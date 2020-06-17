exports.fetchItems = function(origin, deviceId) {
  const url = `${origin}/api/method/tailpos_sync.api.fetch_items`;

  const fetchData = {
    method: "POST",
    body: JSON.stringify({ device: deviceId })
  };

  return fetch(url, fetchData)
    .then(response => response.json())
    .then(data => data.message);
};

exports.fetchCategories = function(origin,deviceId) {
  const url = `${origin}/api/method/tailpos_sync.api.fetch_categories`;
    const fetchData = {
        method: "POST",
        body: JSON.stringify({ device: deviceId })
    };

  return fetch(url,fetchData)
    .then(response => response.json())
    .then(data => data.message);
};
