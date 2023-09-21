<template>
    <div class="about container">
      <h1>Our Recent Products</h1>

      <div class="row">
        <div v-for="product in products" :key="product.id" class="card border-success mb-3 col-3">
            <div class="card-header bg-transparent border-success">Category: {{ product.category }}</div> 
            
        <div class="card-body text-success">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text">
            <img :src="product.images[0]" alt="" class="img-fluid pimage">
           {{ product.description }}
          </p>
        </div>
          <div class="card-footer bg-transparent border-success">
            <i @click="addToCart(product)" class="bi bi-bag-plus"></i>   
            
            <router-link :to="'/details/' + product.id">Details</router-link>
            
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
// import CartView from "./CartView.vue"
// import CheckoutForm from './CheckoutForm.vue';
  export default {
    name: "ProductView",
    components: {

  },
    data: function () {
      return {
        products: [],
        cart: [], // Array to store cart items
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

      getProducts() {
        fetch("https://dummyjson.com/products?limit=100")
          .then((response) => response.json())
          .then((data) => {
            this.products = data.products;
          })
          .catch((err) => {
            console.error(err);
          });
      },
      addToCart(product) {
        this.cart.push(product);
        this.saveCartToLocalStorage();
        Swal.fire({
        icon: 'success',
        title: 'Added to cart',
        text: `${product.title} added to your cart.`,
      });
      },
      
    },
    created() {
      this.getProducts(); 
      this.loadCartFromLocalStorage();
    },
  }
  </script>
  