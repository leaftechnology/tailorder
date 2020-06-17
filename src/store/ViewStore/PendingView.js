import { observable, action, computed } from "mobx";

export default class PendingView {
  @observable orders = [];
  @observable currentOrder = null;
  @observable orderPressed = null;

  @computed get ordersLength() {
    return this.orders.length;
  }

  @action
  setOrders = (orders) => {
    this.orders = orders;
  }

  @action
  setCurrentOrder = (order) => {
    this.currentOrder = order;
  }
  @action
  setOrderPressed = (id) => {
    for(var i=0;i< this.ordersLength;i+=1){
      if(this.orders[i].id === id){
          this.orderPressed = this.orders[i]
      }
    }
  }
}
