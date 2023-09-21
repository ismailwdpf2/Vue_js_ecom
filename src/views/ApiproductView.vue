<template>
    <div>
      <h2>API Products</h2>
    </div>
    <div class="row">
      <div v-for="item in products" :key="item.id" class="card border-success mb-3 col-3">
        <div class="card-body text-success">
            {{ item.product_category_name }} <hr>
          <h5 class="card-title">{{ item.product_name }}</h5>
          <p class="card-text">
            <img :src="Url+ '/'+ item.product_img" alt="Image" class="img-fluid pimage"> <br>
            <!-- {{ item.product_description }} -->
          </p>
        </div>
        <h5 style="color: blue;">Price:{{ item.price }} TK</h5>
        <div class="card-footer bg-transparent border-success">
          <i @click="addToCart(item)" class="bi bi-bag-plus"></i>             
          <router-link :to="'/details/' + item.id">Details</router-link>            
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'apiproduct',
    data() {
      return {
        products: [], // Initialize as an empty array
        cart: [],
        Url : "http://localhost/WDPF/Vue_js/final_project/laravel_ecom/public/"
      };
    },
    mounted() {
      this.getProduct();
      this.loadCartFromLocalStorage();
    },
    methods: {
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
      getProduct() {
        fetch("http://127.0.0.1:8000/api/apidata")
          .then((response) => response.json())
          .then((data) => {
            this.products = data.product;
          })
          .catch((err) => {
            console.error("Error fetching product data:", err);
          });
      },
      addToCart(product) {
        this.cart.push(product);
        this.saveCartToLocalStorage();
        Swal.fire({
        icon: 'success',
        title: 'Added to cart',
        text: `${product.product_name} added to your cart.`,
      });
      },
      saveCartToLocalStorage() {
        localStorage.setItem("cart", JSON.stringify(this.cart));
      },
    },
  };
  </script>
  