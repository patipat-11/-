let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("total");

    cartItems.innerHTML = ""; // เคลียร์รายการเดิม

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price.toLocaleString()} บาท`;
        cartItems.appendChild(li);
    });

    totalDisplay.textContent = `รวม: ${total.toLocaleString()} บาท`;
}
