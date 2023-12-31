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
    const label = document.getElementById("purchaseBtn");
    label.setAttribute("for", "my_modal_6");
  }
  if (totalPrice >= 200) {
    buttonAnable("applyBtn");
  }
};

const discountCalculation = (totalPrice) => {
  let discout = 20;
  let discoutPrice = totalPrice * (discout / 100);
  let total = totalPrice - discoutPrice;
  setPrice("discount", discoutPrice);
  setPrice("total", total);
};

document.getElementById("applyBtn").addEventListener("click", () => {
  let coupon = document.getElementById("coupon");
  let couponCode = coupon.value;
  if (couponCode === "SELL200") {
    const totalPrice = parseFloat(
      document.getElementById("totalPrice").innerText
    );
    discountCalculation(totalPrice);
  } else if (couponCode === "") {
    alert("Use coupon code to get 20% off");
  } else {
    alert("Coupon Code is wrong");
    coupon.value = "";
  }
});

const buttonAnable = (btnId) => {
  let btn = document.getElementById(btnId);
  btn.removeAttribute("disabled");
  btn.classList.remove("opacity-30");
};

const buttonDisable = (btnId) => {
  let btn = document.getElementById(btnId);
  btn.setAttribute("disabled", "true");
  btn.classList.add("opacity-30");
};

const setPrice = (PriceId, Price) => {
  document.getElementById(PriceId).innerText = Price.toFixed(2);
};

document.getElementById("goHome").addEventListener("click", () => {
  //..............clear text input field.................//
  document.getElementById("coupon").value = "";
  // ................reset selected items................//
  const listContainer = document.getElementById("productsList");
  const items = listContainer.querySelectorAll("p");
  items.forEach((item) => {
    listContainer.removeChild(item);
  });
  // ..............clear price................//
  let value = "00.00";
  let initialValue = parseFloat(value);
  setPrice("totalPrice", initialValue);
  setPrice("discount", initialValue);
  setPrice("total", initialValue);
  //...............Disable button.............//
  buttonDisable("purchaseBtn");
  buttonDisable("applyBtn");

  const label = document.getElementById("purchaseBtn");
  label.removeAttribute("for");
});
