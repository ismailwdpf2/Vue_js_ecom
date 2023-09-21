<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>
<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand logo"
              ><img style="height: 60px" src="@/assets/logo.jpg" alt=""
            /></a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item p-1">
                  <a class="nav-link"
                    ><RouterLink to="/apiproduct">Product</RouterLink></a
                  >
                </li>
                <li class="nav-item p-1">
                  <a class="nav-link"><RouterLink to="/">Home</RouterLink></a>
                </li>
                <li class="nav-item p-1">
                  <a class="nav-link" href="#"
                    ><RouterLink to="/products">New </RouterLink></a
                  >
                </li>
                <li class="nav-item p-1">
                  <a class="nav-link" href="#"
                    ><RouterLink to="/about">About</RouterLink></a
                  >
                </li>
                <li class="">
                  <RouterLink to="/cart"
                    ><button
                      type="button"
                      class="btn btn-primary position-relative"
                    >
                      <i class="bi bi-cart"></i>
                      <!-- <span
                        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                      >
                        <span class="visually-hidden">unread messages</span>
                      </span> -->
                    </button></RouterLink
                  >
                </li>
                <li class="nav-item2 p-1">
                  <a class="nav-link" href="#"
                    ><RouterLink to="/login">Login</RouterLink></a
                  >
                </li>
                <li class="nav-item2 p-1">
                  <a class="nav-link" href="#"
                    ><RouterLink to="/register">Register</RouterLink></a
                  >
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  </header>
  <marquee id="mr" behavior="" direction="">Welcome to Ecommerce</marquee>
  <RouterView />

  <div class="footer_section layout_padding">
    <div class="container">
      <div class="input_bt">
        <input
          type="text"
          class="mail_bt"
          placeholder="Your Email"
          name="Your Email"
        />
        <span class="subscribe_bt" id="basic-addon2"
          ><a href="#">Subscribe</a></span
        >
      </div>
      <div class="footer_menu">
        <ul>
          <li><a href="#">Best Sellers</a></li>
          <li><a href="#">Gift Ideas</a></li>
          <li><a href="#">New Releases</a></li>
          <li><a href="#">Today's Deals</a></li>
          <li><a href="#">Customer Service</a></li>
        </ul>
      </div>
      <div class="location_main">
        Help Line Number : <a href="#">+1 1800 1200 1200</a>
      </div>
    </div>
  </div>
  <!-- footer section end -->
  <!-- copyright section start -->
  <div class="copyright_section">
    <div class="container">
      <p class="copyright_text">
        © 2020 All Rights Reserved. Design by
        <a href="https://html.design">Free html Templates</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

#mr {
  color: crimson;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  text-decoration: none;
  color: aliceblue;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 100%) {
  header {
    display: flex;
    justify-content: space-between;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: center;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
.nav-item {
  background-color: orangered;
  margin-left: 5px;
}
.nav-item2 {
  background-color: rgb(5, 173, 5);
  margin-left: 5px;
}
.nav-itemcart {
  background-color: gray;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 5px;
}
</style>
