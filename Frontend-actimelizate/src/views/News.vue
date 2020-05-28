<template>
  <section id="features">
    <div class="container">
      <header>
        <h2>¡Gente!, estas son nuestras <strong>NOTICIAS</strong>!</h2>
      </header>
      <div class="row aln-center">
        <div class="col-10 col-6-medium col-12-small">
          <!-- Feature -->
          <ul class="row">
            <li v-for="item in news" :key="item.id" class="col-4">
              <a href="#" class="image featured"
                ><img src="../../public/assets/images/pic01.jpg" alt=""
              /></a>
              <header>
                <h3>{{ item.title }}</h3>
              </header>
              <p>{{ item.body }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      news: [],
    };
  },
  async mounted() {
    let response = await axios("http://localhost:3000/news");
    this.news = response.data;
  },
};
</script>

<style>
ul li {
    margin: 0
}
  li{
    list-style: none;
  }
  .img{
    border: 1px solid #4b4b4b;
    padding: 100px;
  }
</style>