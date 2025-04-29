const apiKey = 'AIzaSyAP9zaRi1QcS-SHrU0YKR08u-CgfReqgKw';
const sheetId = '1B8Ayk10CEHeDZew3Fl7MyyJXDhHHvj4V-VqEKqTA2E8';
const sheetName = 'Sheet1';

const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}?key=${apiKey}`;

fetch(endpoint)
  .then(res => res.json())
  .then(data => {
    const rows = data.values;
    const list = document.getElementById('product-list');
    for (let i = 1; i < rows.length; i++) {
      const [name, price, image] = rows[i];
      const item = document.createElement('div');
      item.className = 'product';
      item.innerHTML = `
        <img src="${image}" alt="${name}" />
        <h3>${name}</h3>
        <p>₹${price}</p>
        <button onclick="addToCart('${name}', ${price}, '${image}')">Add to Cart</button>
      `;
      list.appendChild(item);
    }
  });

function addToCart(name, price, image) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push({ name, price, image });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Added to cart!');
}
