<template>
    <div class="nav">
        <router-link class="nav-item" to="/">Home</router-link> |
      <router-link class="nav-item" to="/news">News</router-link> |
      <router-link class="nav-item" to="/about">About</router-link>
    </div>
</template>

<style>
.nav{
    width: 100%;
    background: #888;
    padding: 20px;
    color: #fff;
    
}
.nav-item{
    color: #fff;
    padding-right: 10px;
}
</style>