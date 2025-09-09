<script>
    let cart = [];
    let total = 0;
    function addToCart(itemName, price) {
        // Check if item already exists in cart
        let existingItem = cart.find(item => item.name === itemName);
        if (existingItem) {
            existingItem.quantity += 1;
            existingItem.totalPrice += price;
        } else {
            cart.push({ name: itemName, price: price, quantity: 1, totalPrice: price });
        }
        updateCart();
    }
    function removeFromCart(itemName) {
        cart = cart.filter(item => item.name !== itemName);
        updateCart();
    }
    function updateCart() {
        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = '';
        total = 0;

        cart.forEach(item => {
            total += item.totalPrice;
            cartItems.innerHTML += `
                <li>
                    ${item.name} x ${item.quantity} - $${item.totalPrice}
                    <button onclick="removeFromCart('${item.name}')">Remove</button>
                </li>
            `;
        });
        document.getElementById('total').textContent = total;
    }
</script>
