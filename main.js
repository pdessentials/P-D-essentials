document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").innerText = cart.length;

  fetch('products.json')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("products");
      data.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p><strong>${product.price}</strong></p>
          <button onclick="addToCart('${product.id}')">Add to Cart</button>
          <br><a href="product.html?id=${product.id}">View Product</a>
        `;
        container.appendChild(div);
      });
    });
});

function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("cart-count").innerText = cart.length;
}