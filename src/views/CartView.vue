<template>
  <div class="cart container">
    <h1>Your Cart</h1>
    <div v-if="cart.length === 0">
      <p>Your cart is empty.</p>
    </div>
    <div v-else class="row">
      <div v-for="(item, index) in cart" :key="index" class="cart-item m-2 p-2 col-7">
        <div class="cart-item-details bg-warning-subtle ">
          <h3>{{ item.title }}</h3>
          <p >Price: TK{{ item.price }}</p>
        </div>
        <button @click="removeFromCart(index)" class="btn btn-danger">
          Remove
        </button>
      </div>
      <div class="cart-total bg-danger-subtle col-3 mx-2 px-2">
        <p>Total: TK{{ calculateTotal() }}</p>
      </div>
    </div>
  </div>
  <div class="ceckout">
<button class="btn btn-success">Ceckout</button>
  </div>
</template>

<script>
export default {
  name: "CartView",
  data: function () {
    return {
      cart: [],
    };
  },
  methods: {
    saveCartToLocalStorage() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    loadCartFromLocalStorage() {
      const cartData = localStorage.getItem("cart");
      if (cartData) {
        try {
          this.cart = JSON.parse(cartData);
        } catch (error) {
          console.error("Error loading cart data from localStorage:", error);
        }
      } else {
        this.saveCartToLocalStorage();
      }
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
      this.saveCartToLocalStorage();
    },
    deleteCart(index) {
      this.$emit("remove", index); // Emit a custom event to notify the parent component to remove the item from cart
    },
    calculateTotal() {
      return this.cart
        .reduce((total, item) => total + item.price, 0)
        .toFixed(2);
    },
  },
  created() {
    this.loadCartFromLocalStorage();
  },
};
</script>

<style scoped>
.cart {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
}

.cart-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.cart-item-details {
  flex: 1;
}

.cart-item-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.cart-item-price {
  color: #555;
}

.cart-total {
  text-align: right;
  margin-top: 20px;
}

.cart-total-label {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.cart-total-amount {
  font-size: 24px;
  color: #e44d26;
}
</style>
