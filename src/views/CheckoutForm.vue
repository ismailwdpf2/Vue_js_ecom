<!-- CheckoutForm.vue -->
<template>
    <div>
      <h2>Checkout</h2>
      <form @submit.prevent="submitOrder">
        <!-- Add your form fields here -->
        <input type="text" v-model="formData.name" placeholder="Name" required class="form-control" />
        <input type="email" v-model="formData.email" placeholder="Email" required class="form-control" />
        <!-- Add more form fields as needed -->
  
        <!-- Display cart items -->
        <h3>Cart Items:</h3>
        <ul>
          <li v-for="item in cart" :key="item.id">Item Name: {{ item.title }} - Price:  {{ item.price }}</li>
        </ul>
  
        <button type="submit" class="btn btn-outline-info m-4 p-4">Place Order</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        formData: {
          name: "",
          email: "",
          // Add more form fields here
        },
      };
    },
    props: {
      cart: Array, // Pass in the cart items as a prop
    },
    methods: {
        async submitOrder() {
    try {
      const orderData = {
        cart: this.cart,
        formData: this.formData,
      };

      // Replace 'YOUR_API_URL' with your actual API endpoint
      const response = await axios.post('http://localhost/laravelprojectlink/api/order', orderData);

      // Handle the API response as needed
      console.log('Order placed successfully:', response.data);

      // Optionally, reset the form and cart after a successful order
      this.formData = {
        name: "",
        email: "",
        // Reset other form fields as needed
      };
      this.cart = [];
    } catch (error) {
      console.error('Error placing order:', error);
      // Handle the error, display an error message, or take other actions as needed
    }
  },
    },
  };
  </script>
  