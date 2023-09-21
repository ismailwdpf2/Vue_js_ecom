<template>
  <h1 @click="hi">{{ message }}</h1>
</template>
<script>
import commonfx from "./../common";
export default {
  data: function () {
    return {
      message: "Hi from IsDB Component",
    };
  },
  methods: {
    hi() {
      commonfx.x("Hi from IsDB Component called");
    },
  },
};
</script>