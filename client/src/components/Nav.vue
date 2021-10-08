<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="../assets/logo.png" />
      </a>
      <h3 class="title">Hello World</h3>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        :class="{ 'is-active': isActive }"
        @onclick="isActive = !isActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': isActive }"
    >
      <div class="navbar-start">
        <a class="navbar-item" href="/"> Home </a>

        <a class="navbar-item"> Documentation </a>
        <a class="navbar-item" href="/feed"> Feed </a>

        <div class="navbar-item has-dropdown is-hoverable"> <!---Wont show up in safari?-->
          <a class="navbar-link"> More </a>

          <div class="navbar-dropdown">
            <a class="navbar-item" href="/about"> About </a>
            <a class="navbar-item"> Jobs </a>
            <a class="navbar-item"> Contact </a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Report an issue </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">

        <div class="navbar-item">
          <LoginBadge/>
        
          
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import LoginBadge from './LoginBadge';

export default {
  data() {
    return {
      //global data for this component

      isActive: false,
    };
  },
  components: {
    LoginBadge,
  },
};
</script>

<style>
</style>