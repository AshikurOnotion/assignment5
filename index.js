
const products = document.querySelectorAll('.product');
const cartList = document.querySelector('#cart ol');
const cartTotal = document.querySelector('#cart-total');
const couponInput = document.querySelector('#coupon-code');
const applyCouponBtn = document.querySelector('#apply-coupon');

let total = 0;
let couponApplied = false;

products.forEach(product => {
  const addToCartBtn = product.querySelector('.add-to-cart');
  const productId = product.getAttribute('data-id');
  const productName = product.querySelector('h2').innerText;
  const productPrice = parseFloat(product.querySelector('p').innerText.split('$')[1]);

  addToCartBtn.addEventListener('click', () => {
    const cartItem = document.createElement('li');
    cartItem.textContent = `${productName} - $${productPrice}`;
    cartList.appendChild(cartItem);

    total += productPrice;
    cartTotal.textContent = total.toFixed(2);
  });
});

applyCouponBtn.addEventListener('click', () => {
  if (!couponApplied) {
    const couponCode = couponInput.value;
    if (couponCode === '20OFF' && total >= 200) {
      const discount = total * 0.2;
      total -= discount;
      cartTotal.textContent = total.toFixed(2);
      couponApplied = true;
      applyCouponBtn.disabled = true;
    }
  }
});