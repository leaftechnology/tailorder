import { observable, action, computed } from "mobx";

export default class HomeView {
  @observable tableNumber = "";
  @observable confirmOrder = false;
  @observable visibleDialogInput = true;
  @observable visibleCategoryList = false;
  @observable isTakeAway = false;
  @observable isSyncing = false;
  @observable syncMessage = "";
  @observable remarks = "";

  @observable category = "All";
  @observable isNewOrder = true;
  @observable orderType = "Dine-in";

  @action
  setTableNumber = (number) => {
    this.tableNumber = number;
  }

  @action
  setCategory = (category) => {
    this.category = category;
  }

  @action
  hideDialogInput = () => {
    this.visibleDialogInput = false;
  };

  @action
  showDialogInput = () => {
    this.visibleDialogInput = true;
  };

  @action
  toggleCategoryList = () => {
    this.visibleCategoryList = !this.visibleCategoryList;
  }

  @action
  setConfirmOrder = () => {
    this.confirmOrder = true;
  };

  @action
  unsetConfirmOrder = () => {
    this.confirmOrder = false;
  }

  @action
  setTakeAway = () => {
    this.isTakeAway = true;
  }

  @action
  setDineIn = () => {
    this.isTakeAway = false;
  }

  @action
  newOrder = () => {
    this.category = "All";
    this.tableNumber = "";
    this.remarks = "";
    this.orderType = "Dine-in";
    this.confirmOrder = false;
    this.visibleDialogInput = true;
  }

  @action
  setIsSyncing = () => {
    this.isSyncing = true;
  }

  @action
  setIsNotSyncing = () => {
    this.isSyncing = false;
  }

  @action
  setSyncMessage = (syncMessage) => {
    this.syncMessage = syncMessage;
  }

  @action
  setRemarks = (remarks) => {
    this.remarks = remarks;
  }

  @action
  setOrderType = (orderType) => {
    this.orderType = orderType;
  }

  @action
  toggleIsNewOrder = () => {
    this.isNewOrder = !this.isNewOrder;
  }

  @computed get table() {
    return parseInt(this.tableNumber, 10);
  }
}
