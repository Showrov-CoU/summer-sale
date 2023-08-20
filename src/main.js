function productNameAndPrice(target) {
  let productName = target.childNodes[3].childNodes[3].innerText;
  let productPrice = parseFloat(
    target.childNodes[3].childNodes[5].childNodes[1].innerText
  ).toFixed(2);
  console.log(productName, productPrice);
}
