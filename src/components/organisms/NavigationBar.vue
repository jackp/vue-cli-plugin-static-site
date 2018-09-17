<template>
  <nav>
    <nav-link to="/">Home</nav-link>
    <nav-link to="/components">Components</nav-link>
  </nav>
</template>

<script>
import NavLink from "../atoms/NavLink.vue";

export default {
  name: "NavigationBar",
  components: {
    NavLink
  }
};
</script>

<style>
</style>
