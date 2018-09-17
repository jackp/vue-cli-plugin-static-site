<template>
  <router-link :to="to" exact-active-class="active">
    <slot/>
  </router-link>
</template>

<script>
export default {
  name: "NavLink",
  props: {
    to: String
  }
};
</script>

<style lang="scss" scoped>
.active {
  color: red;
}
</style>
