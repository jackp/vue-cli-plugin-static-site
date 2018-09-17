<template>
  <view-template>
    <div class="home">
      <img alt="Vue logo" src="@/assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </view-template>
</template>

<script>
import ViewTemplate from "@/components/templates/ViewTemplate.vue";
import HelloWorld from "@/components/organisms/HelloWorld.vue";

export default {
  name: "home",
  components: {
    ViewTemplate,
    HelloWorld
  }
};
</script>
