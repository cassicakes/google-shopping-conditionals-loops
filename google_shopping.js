var data = require("./products.json")

//Write your solutions below
var itemsResult = 0;
var inventoriesResult = 0;
var imageResult = 0;
var cannonResult = 0;
var ebayResult = 0;
var shortResults = 0;
var shortResults = 0;
	//product list
for (var i=0; i< data.items.length; ++i) {
	var item = data.items[i];
	if (data.items[i].kind === "shopping#product") {
		itemsResult++;
	}
	//check inventories
	if (item.product.inventories[0].availability === "backorder") {
		inventoriesResult++;
	}
	//images
	if (item.product.images.length >1) {
		imageResult++;
	}
	//canon
	var isCanon = item.product.brand.toLowerCase() === "canon";
	if (isCanon) {
		cannonResult++;
	}
	// ebay & canon
	if (item.product.author.name.toLowerCase().indexOf("ebay") != -1 && isCanon) {
		ebayResult++;
	}
	// #6
	var readableResult = "Product brand: " + item.product.brand;
	readableResult +="\nprice: "+item.product.inventories[0].price;
	readableResult +="\nImage link: "+item.product.images[0].link;
	shortResults.push(readableResult);
}

console.log("shopping#product count: "+itemsResult);
console.log("Products with inventories: "+inventoriesResult);
console.log("Items with images: " +imageResult);
console.log("Canon items: " =cannonResult);
console.log("ebay and Canon items: " +ebayResult)
console.log(shortResults.join("\n--------------------\n"));