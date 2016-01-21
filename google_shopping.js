var data = require("./products.json")
var items = data["items"]

for (var index in items) {
	console.log(index);
	console.log(items[index]["kind"])
}

// console.log(data["items"]);