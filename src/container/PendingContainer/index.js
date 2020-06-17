import * as React from "react";
import { inject, observer } from "mobx-react/native";
import Pending from "../../stories/screens/Pending";
import { printOrder, fetchOrders } from "../../services/server";
import { printAlert, showDangerToast } from "../../utils";

@inject("settingsDomain", "pendingView")
@observer
class PendingContainer extends React.Component {
  onFetchOrder = async () => {
    const { settingsDomain, pendingView } = this.props;
    const orders = await fetchOrders(settingsDomain.getQueueOrigin);
    pendingView.setOrders(orders);
  }
  onTableLongPress = async (number) => {
    const { pendingView } = this.props;
    pendingView.setCurrentOrder(number);
    printAlert(_printOrder.bind(this));
  }
    onTablePress = async (number) => {
        const { pendingView } = this.props;
        pendingView.setOrderPressed(number);
    }
  render() {
      const { settingsDomain } = this.props;
    return (
      <Pending
        iconSize={settingsDomain.iconSize}
        navigation={this.props.navigation}
        pendingView={this.props.pendingView}
        onFetchOrder={this.onFetchOrder}
        onTableLongPress={this.onTableLongPress}
        onTablePress={this.onTablePress}
        table={this.props.pendingView.orderPressed ?  this.props.pendingView.orderPressed.items.slice() : []}
      />
    );
  }
}

const _printOrder = async function() {
  const { settingsDomain, pendingView } = this.props;
  try {
    await printOrder(
      settingsDomain.getQueueOrigin,
      { id: pendingView.currentOrder }
    );
  } catch (err) {
    showDangerToast(`Unable to print [${err}]`, "top");
  }
};

export default PendingContainer;
