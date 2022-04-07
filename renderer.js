export const renderCartList = (arr) => {
  const cartProductBox = document.getElementsByClassName("cart-products")[0];
  cartProductBox.innerHTML = "";

  arr.forEach((el, i) => {
    if (el.isInCart) {
      let selectedProduct = document.createElement("div");
      let qtyWrapper = document.createElement("div");
      let productName = document.createElement("p");
      let productValue = document.createElement("p");
      let qtyInput = document.createElement("input");
      let dismiss = document.createElement("div");

      selectedProduct.classList.add("selected-product");

      productName.classList.add("prod-name");
      productName.classList.add("col-4");
      productName.innerText = el.name;
      productValue.classList.add("prod-value");
      productValue.classList.add("col-4");
      productValue.innerText = (el.price * el.quantity).toFixed(2);

      dismiss.classList.add("dismiss");
      dismiss.setAttribute("data-index", i);
      dismiss.innerText = "X";

      qtyWrapper.classList.add("col-4");
      qtyInput.setAttribute("min", "1");
      qtyInput.setAttribute("max", "99");
      qtyInput.setAttribute("type", "number");
      qtyInput.setAttribute("value", "1");
      qtyInput.setAttribute("data-index", i);
      qtyInput.classList.add("prod-quantity");
      qtyInput.value = el.quantity;
      qtyWrapper.append(qtyInput);

      selectedProduct.append(productName);
      selectedProduct.append(qtyWrapper);
      selectedProduct.append(productValue);
      selectedProduct.append(dismiss);

      cartProductBox.append(selectedProduct);
    }
  });
};

export const renderProductsList = (arr) => {
  const productsBox = document.getElementsByClassName("products-box")[0];
  productsBox.innerHTML = "";

  arr.forEach((el, i) => {
    if (!el.isInCart) {
      let list = document.createElement("ul");
      list.classList.add("products-list");
      let element1 = document.createElement("li");
      let element2 = document.createElement("li");
      let div1 = document.createElement("div");
      let div2 = document.createElement("div");

      div1.innerText = el.name;
      div2.innerText = `Price: $${el.price}`;
      div1.classList.add("product-name");

      let button = document.createElement("button");
      button.classList.add("add-cart-bttn");
      button.setAttribute("data-index", i);
      button.innerText = "Add to cart";
      element1.append(div1);
      element1.append(div2);
      element2.append(button);
      list.append(element1);
      list.append(element2);
      productsBox.append(list);
    }
  });
};
