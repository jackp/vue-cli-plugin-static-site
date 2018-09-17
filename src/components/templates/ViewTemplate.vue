<template>
  <div id="app">
    <navigation-bar />
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import NavigationBar from "@/components/organisms/NavigationBar.vue";
export default {
  name: "ViewTemplate",
  components: {
    NavigationBar
  }
};
</script>

<style>
</style>
