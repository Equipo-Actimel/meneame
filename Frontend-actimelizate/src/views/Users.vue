<template>
  <div><h1>Los usuarios van aquí</h1></div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
    };
  },
  async mounted() {
    let response = await axios("http://localhost:3000/users");
    this.users = response.data;
  },
};
</script>

<style>
  li{
    list-style: none;
  }
  .img{
    border: 1px solid #4b4b4b;
    padding: 100px;
  }
</style>