exports.sendOrder = function(origin, order) {
  const url = `${origin}/api/v1/orders`;

  const fetchData = {
    method: "POST",
    body: JSON.stringify(order),
  };

  return fetch(url, fetchData)
    .then(response => response.json());
};

exports.printOrder = function(origin, order) {
  const url = `${origin}/api/v1/print_order`;

  const fetchData = {
    method: "POST",
    body: JSON.stringify(order)
  };

  return fetch(url, fetchData)
    .then(response => response.json());
};

exports.fetchOrders = function (origin) {
  const url = `${origin}/api/v1/orders`;

  return fetch(url)
    .then(response => response.json());
};

exports.prepareOrder = function(view, domain) {
  const orderedItems = domain.orderedItems.slice();
  const items = [];

  for (let i = 0; i < orderedItems.length; i++) {
    items.push({
      item_name: orderedItems[i].itemName,
      item_code: orderedItems[i].itemCode,
      rate: orderedItems[i].rate,
      qty: orderedItems[i].qty,
      tax: orderedItems[i].tax,
      category: orderedItems[i].tax,
    });
  }

  return {
    items,
    table_no: view.table,
    type: view.orderType,
    remarks: view.remarks,
  };
};
