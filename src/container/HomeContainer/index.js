import * as React from "react";
import { ToastAndroid } from "react-native";
import { observer, inject } from "mobx-react/native";

import { fetchItems, fetchCategories } from "../../services/frappe";
import { saveToStorage } from "../../services/storage";
import { sendOrder, printOrder, prepareOrder } from "../../services/server";

import { ITEM_KEY, itemToOrderItem } from "../../model/Item";
import { CATEGORY_KEY } from "../../model/Category";
import { LOG_KEY } from "../../model/Log";

import {
	showDangerToast,
	showSuccessToast,
	printAlert,
} from "../../utils";

import Home from "../../stories/screens/Home";

@inject("homeView", "homeDomain", "settingsDomain")
@observer
class HomeContainer extends React.Component {
	checkOrderedItems = () => {
		const { isOrderedItemsEmpty } = this.props.homeDomain;

		let valid = true;

		if (isOrderedItemsEmpty) {
			ToastAndroid.show("Please order items", ToastAndroid.SHORT);
			valid = false;
		}

		return valid;
	}

	order = async (toPrint) => {
		/**
		 * This is the entry point for TailOrder server
		 */
		const {
			homeView,
			homeDomain,
			settingsDomain,
		} = this.props;

		let hasPrinted = false;

		try {

			let order = await sendOrder(
				settingsDomain.getQueueOrigin,
				prepareOrder(homeView, homeDomain)
			);

			showSuccessToast(
				`Successful order. The table number is ${order.table_no}`,
				"bottom",
				5000
			);

			if (toPrint) {
				// TODO: check on this
				await printOrder(settingsDomain.getQueueOrigin, { id: order.id });
				hasPrinted = true;
			}

		} catch (err) {
			let text = `There is something wrong with sending order. [${err}]`;

			if (!hasPrinted) {
				text = `Order sent. Receipt not printed [${err}].`;
			}

			showDangerToast(text, "top");

		} finally {
			this.newOrder();
		}
	}

	orderAndPrint = () => {
		this.order(true);
	}

	onOrder = () => {
		const { homeView, settingsDomain } = this.props;

		if (!homeView.confirmOrder) {
			const valid = this.checkOrderedItems();
			valid && homeView.setConfirmOrder();
		} else {
			if (settingsDomain.enablePrint) {
				printAlert(this.orderAndPrint, this.order);
			} else {
				this.order();
			}
		}
	}

	newOrder = () => {
		const { homeView, homeDomain } = this.props;
		homeView.newOrder();
		homeDomain.clearOrderedItems();
	}

	orderItem = (item) => {

		const { homeDomain } = this.props;
		let remarks = item.category === "Remarks" ? true : false;

		const orderedItem = itemToOrderItem(item, remarks);
		homeDomain.orderItem(orderedItem);
	}

	onClear = () => {
		ToastAndroid.show("Long press to clear all items", ToastAndroid.SHORT);
	}

	checkTableNo = () => {
		const { tableNumber, orderType } = this.props.homeView;

		if (tableNumber === "" && orderType === "Dine-in") {
			return false;
		}

		return true;
	}

	onDineIn = () => {
		const { homeView } = this.props;

		if (!this.checkTableNo()) {
			showDangerToast(
				"Table No is required.",
				"bottom"
			);
			return;
		}

		homeView.setDineIn();
		homeView.hideDialogInput();
	}

	getItems = async () => {
		const { getOrigin, deviceId } = this.props.settingsDomain;
		const { setIsSyncing, setIsNotSyncing, setSyncMessage } = this.props.homeView;

		setIsSyncing();
		try {
			const data = await fetchItems(getOrigin, deviceId);
			const category = await fetchCategories(getOrigin, deviceId);
			saveToStorage(ITEM_KEY, data);
			saveToStorage(CATEGORY_KEY, category);
			saveToStorage(LOG_KEY, { lastSync: Date.now() });

			showSuccessToast("Successfully synced. Please restart the application", "bottom");

			let syncMessage = "Synced, please restart the application";

			if (data.length === 0) {
				syncMessage = "Synced, but no items were fetched";
			}

			setSyncMessage(syncMessage);

		} catch (err) {
			showDangerToast(`Unable to sync. [${err}]`, "bottom");
			setSyncMessage(`Error: [${err}]`);
		} finally {
			setIsNotSyncing();
		}
	}

	removeItem = (index) => {

		const { homeDomain } = this.props;
		homeDomain.removeItem(index);

		if (homeDomain.isOrderedItemsEmpty) {
			homeDomain.clearLastOrderedItem();
		} else {
			homeDomain.setLastOrderedItem();
		}
	}

	decreaseQty = (index) => {
		const { homeDomain } = this.props;
		homeDomain.decreaseQty(index);
	}

	_getOrderedItemsTotal = () => {
		const { homeDomain, settingsDomain } = this.props;

		const total = homeDomain.orderedItemsTotal;
		console.log("MURAG NAA DIRI ANG PROBLEM")
		console.log(total)
		console.log(homeDomain.taxesTotal)
		console.log(total + homeDomain.taxesTotal)
		return total + homeDomain.taxesTotal;
	}

	render() {
		const {
			settingsDomain,
			homeDomain,
			homeView,
			navigation,
		} = this.props;
		return (
			<Home
				navigation={navigation}

				// HomeDomain
				categories={homeDomain.categories.slice()}
				listingItems={homeDomain.listingItems.slice()}
				orderedItems={homeDomain.orderedItems.slice()}
				clearOrderedItems={homeDomain.clearOrderedItems}
				orderedItemsLength={homeDomain.orderedItemsLength}
				taxes={homeDomain.taxesValues}

				// HomeView
				category={homeView.category}
				isSyncing={homeView.isSyncing}
				setRemarks={homeView.setRemarks}
				isTakeAway={homeView.isTakeAway}
				syncMessage={homeView.syncMessage}
				setCategory={homeView.setCategory}
				tableNumber={homeView.tableNumber}
				confirmOrder={homeView.confirmOrder}
				setTableNumber={homeView.setTableNumber}
				hideDialogInput={homeView.hideDialogInput}
				showDialogInput={homeView.showDialogInput}
				toggleCategoryList={homeView.toggleCategoryList}
				visibleDialogInput={homeView.visibleDialogInput}
				visibleCategoryList={homeView.visibleCategoryList}
				remarks={homeView.remarks}
				orderType={homeView.orderType}
				setOrderType={homeView.setOrderType}
				isNewOrder={homeView.isNewOrder}
				toggleIsNewOrder={homeView.toggleIsNewOrder}

				// SettingsDomain
				useDescription={settingsDomain.useDescription}
				iconSize={settingsDomain.iconSize}
				tax={settingsDomain.tax}
				roundoff={settingsDomain.roundoff}

				// Container
				onClear={this.onClear}
				onOrder={this.onOrder}
				onDineIn={this.onDineIn}
				getItems={this.getItems}
				orderItem={this.orderItem}
				removeItem={this.removeItem}
				decreaseQty={this.decreaseQty}

				// Computed
				orderedItemsTotal={this._getOrderedItemsTotal().toFixed(2)}
				taxAmount={
					parseFloat(homeDomain.orderedItemsTotal * settingsDomain.taxPercentage).toFixed(2)
				}

			/>
		);
	}
}

export default HomeContainer;
