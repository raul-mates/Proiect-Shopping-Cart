"use strict";

import { renderCartList, renderProductsList } from "./renderer.js";

const sortArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let e = i + 1; e < arr.length; e++) {
      if (arr[i].price < arr[e].price) {
        let temp = arr[i];
        arr[i] = arr[e];
        arr[e] = temp;
      }
    }
  }
};

const removeProductFromCart = (arr) => {
  let dismissButtons = document.querySelectorAll(".dismiss");
  dismissButtons.forEach((el) => {
    let currentIndex = +el.getAttribute("data-index");
    el.addEventListener("click", () => {
      arr[currentIndex].isInCart = false;
      arr[currentIndex].quantity = 1;
      renderAndBindEvents(arr);
      toggleCartState(arr);
    });
  });
};

const addProps = (arr) =>
  arr.map((item) => ({
    ...item,
    isInCart: false,
    currency: "$",
    quantity: 1,
  }));

const toggleCartState = (arr) => {
  let errorMessage = document.querySelector(".empty-cart-msg-active");
  let productsWrapper = document.querySelector(".selected-products-box");
  let isEmpty = isCartEmpty(arr);
  if (!isEmpty) {
    productsWrapper.classList.add("hidden");
    errorMessage.classList.add("show");
  } else {
    productsWrapper.classList.remove("hidden");
    errorMessage.classList.remove("show");
  }
};

const addToCart = (arr) => {
  let addCartBttns = document.querySelectorAll(".add-cart-bttn");

  addCartBttns.forEach((button, i) => {
    button.addEventListener("click", (event) => {
      let btn = event.currentTarget;
      let buttonId = +btn.getAttribute("data-index");
      arr[buttonId].isInCart = true;
      renderAndBindEvents(arr);
      toggleCartState(arr);
    });
  });
};

const renderAndBindEvents = (arr) => {
  renderProductsList(arr);
  addToCart(arr);
  renderCartList(arr);
  removeProductFromCart(arr);
  totalUpQty(arr);
};

const getProducts = async (url) => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    let productsArr = addProps([...data]);
    sortArr(productsArr);
    return productsArr;
  } catch (e) {
    return [];
  }
};

const totalUpQty = (arr) => {
  let qtyInputs = document.querySelectorAll(".prod-quantity");
  qtyInputs.forEach((qtyInput) => {
    qtyInput.addEventListener("change", function () {
      let qtyParent = this.closest(".selected-product");
      let totalPriceElement = qtyParent.querySelector(".prod-value.col-4");
      let currentIndex = +this.getAttribute("data-index");
      arr[currentIndex].quantity = +this.value;
      totalPriceElement.innerText = (
        arr[currentIndex].price * arr[currentIndex].quantity
      ).toFixed(2);
    });
  });
};

const isCartEmpty = (arr) => {
  return arr.some((el) => el.isInCart === true);
};

const getURLCurrency = () => {
  const params = new URLSearchParams(window.location.search);
  console.log(params);
  if (params.has("curr")) {
    console.log(params.get("curr"));
  } else {
    console.log("Not found");
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  // getURLCurrency();
  let myArr = await getProducts(
    "http://private-32dcc-products72.apiary-mock.com/product"
  );
  renderProductsList(myArr);
  addToCart(myArr);
});
