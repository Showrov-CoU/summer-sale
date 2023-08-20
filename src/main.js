function getProductNameAndPrice(target) {
  let productName = target.childNodes[3].childNodes[3].innerText;
  let productPrice = parseFloat(
    target.childNodes[3].childNodes[5].childNodes[1].innerText
  );
  putItemsInProductList("productsList", productName);
  totalPriceCalculation("totalPrice", productPrice);
}

const putItemsInProductList = (sectionId, productName) => {
  let itemSection = document.getElementById(sectionId);
  let item = document.createElement("p");
  let count = itemSection.childElementCount;
  item.innerHTML = `${count + 1}. ${productName}`;
  itemSection.appendChild(item);
};

const totalPriceCalculation = (totalPriceId, productPrice) => {
  let totalPrice = parseFloat(document.getElementById(totalPriceId).innerText);
  totalPrice += productPrice;

  setTotalPrice("totalPrice", totalPrice);

  if (totalPrice >= 1) {
    buttonAnable("purchaseBtn");
  }
  if (totalPrice >= 200) {
    buttonAnable("applyBtn");
  }
};

const setTotalPrice = (totalPriceId, sum) => {
  document.getElementById(totalPriceId).innerText = sum.toFixed(2);
};

const buttonAnable = (btnId) => {
  let btn = document.getElementById(btnId);
  btn.removeAttribute("disabled");
  btn.classList.remove("opacity-30");
};

