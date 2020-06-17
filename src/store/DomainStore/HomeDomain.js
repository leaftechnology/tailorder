import { observable, action, computed } from "mobx";
import { retrieveFromStorage } from "../../services/storage";

import { ITEM_KEY } from "../../model/Item";
import { CATEGORY_KEY } from "../../model/Category";

class HomeDomain {
  @observable categories = ["All"];
  @observable listingItems = [];
  @observable orderedItems = [];
  @observable lastOrderedItem = {}

  constructor() {
    retrieveFromStorage(ITEM_KEY)
      .then(data => data.map(item => {
        this.listingItems.push(item)
      }));
    retrieveFromStorage(CATEGORY_KEY)
      .then(data => data.map(item => this.categories.push(item.name)));
  }

  @action
  orderItem = (item) => {

    let newItem = item;

    if (this.lastOrderedItem.itemCode === item.itemCode) {
      this.removeItem(this.orderedItems.length - 1);
      this.lastOrderedItem.qty = this.lastOrderedItem.qty + item.qty;
      newItem = this.lastOrderedItem;
    }

    this.lastOrderedItem = newItem;
    this.addItem(newItem);
  }

  @action
  addItem = (item) => {
    this.orderedItems.push(item);
  }

  @action
  removeItem = (index) => {
    const filtered = this.orderedItems.filter((item, id) => id !== index);
    this.orderedItems.replace(filtered);
  }

  @action
  decreaseQty = (index) => {
    const itemQty = this.orderedItems[index].qty;

    if (itemQty === 1) {
      this.removeItem(index);
      this.setLastOrderedItem();
    } else {
      this.orderedItems[index].qty = itemQty - 1;
    }
  }

  @action
  clearOrderedItems = () => {
    this.orderedItems.clear();
    this.lastOrderedItem = {};
  }

  @action
  clearLastOrderedItem = () => {
    this.lastOrderedItem = {};
  }

  @action
  setLastOrderedItem = () => {
    if (!this.isOrderedItemsEmpty) {
      const lastIndex = this.orderedItemsLength - 1;
      this.lastOrderedItem = this.orderedItems[lastIndex];
    } else {
      this.clearLastOrderedItem();
    }
  }

  @computed
  get orderedItemsLength() {
    return this.orderedItems.length;
  }

  @computed
  get orderedItemsTotal() {
    let total = 0.00;

    for (let i = 0; i < this.orderedItems.length; i++) {
      const { rate, qty } = this.orderedItems[i];
      let subtotal = rate * qty;
      total = total + subtotal;
    }
    return total;
  }
  @computed
  get isOrderedItemsEmpty() {
    return (this.orderedItems.length === 0);
  }
    @computed
    get taxesTotal() {
      let taxes = this.taxesValues
        let total=0
        for (let ii=0; ii < taxes.length; ii += 1){
          total += taxes[ii].totalAmount
        }
        return parseFloat(total.toFixed(2))
        
    }
    @computed
    get taxesValues(){
        let taxObjectInReceipt = [];

        for(let x=0;x<this.orderedItems.length;x+=1){
            let taxObjectFromLine = JSON.parse(this.orderedItems[x].tax)
            for (let ii = 0; ii < taxObjectFromLine.length; ii += 1) {
                let status = false
                for (let i = 0; i < taxObjectInReceipt.length; i += 1){
                    if (taxObjectInReceipt[i].name === taxObjectFromLine[ii].tax_type) {
                        status = true
                        taxObjectInReceipt[i].totalAmount += parseFloat((taxObjectFromLine[ii].tax_rate / 100) * (this.orderedItems[x].qty * this.orderedItems[x].rate));
                    }
                }


                if(!status){
                    taxObjectInReceipt.push({
                        name: taxObjectFromLine[ii].tax_type,
                        totalAmount: parseFloat((taxObjectFromLine[ii].tax_rate / 100) * (this.orderedItems[x].qty * this.orderedItems[x].rate))
                    })
                }
            }
        }
        return taxObjectInReceipt
    }
}

export default HomeDomain;
