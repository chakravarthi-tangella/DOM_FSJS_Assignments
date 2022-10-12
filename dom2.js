var v = document.getElementsByClassName("as-imagegrid-item-title");
var products = new Array();
for (let val of v) {
    products.push(val.firstChild.data);
}
console.log(products);