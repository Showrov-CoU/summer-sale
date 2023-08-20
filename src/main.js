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

  setPrice("totalPrice", totalPrice);

  if (totalPrice >= 1) {
    buttonAnable("purchaseBtn");
  }
  if (totalPrice >= 200) {
    buttonAnable("applyBtn");
  }
};

const setPrice = (PriceId, Price) => {
  document.getElementById(PriceId).innerText = Price.toFixed(2);
};

const buttonAnable = (btnId) => {
  let btn = document.getElementById(btnId);
  btn.removeAttribute("disabled");
  btn.classList.remove("opacity-30");
};

document.getElementById("coupon").addEventListener("keyup", () => {
  const couponCode = document.getElementById("coupon").value;
  const totalPrice = parseFloat(
    document.getElementById("totalPrice").innerText
  );
  if (couponCode === "SELL200") {
    discountCalculation(totalPrice);
  }
});

const discountCalculation = (totalPrice) => {
  let discout = 20;
  let discoutPrice = totalPrice * (discout / 100);
  let total = totalPrice - discoutPrice;

  document.getElementById("applyBtn").addEventListener("click", () => {
    setPrice("discount", discoutPrice);
    setPrice("total", total);
  });
};
