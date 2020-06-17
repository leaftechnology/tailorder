export const ITEM_KEY = "Item";

export const itemToOrderItem = function(item, remarks = false) {
  let rate = item.standardRate;

  if (remarks) {
    rate = null;
  }


  return {
    itemCode: item.name,
    itemName: item.itemName,
    rate: rate,
    qty: 1,
    category: item.category,
    tax: JSON.stringify(item.itemTaxTemplateDetail.slice())
  };
};
