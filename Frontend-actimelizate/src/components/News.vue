<template>
  <section id="features">
    <div class="container">
      <header>
        <h2>Gentlemen, behold! This is <strong>OUR NEWS</strong>!</h2>
      </header>
      <div class="row aln-center">
        <div class="col-4 col-6-medium col-12-small">
          <!-- Feature -->
          <ul>
            <li v-for="item in news" :key="item.id">
              <a href="#" class="image featured"
                ><img src="images/pic01.jpg" alt=""
              /></a>
              <header>
                <h3>{{ item.title }}</h3>
              </header>
              <p>{{ item.content }}</p>
            </li>
          </ul>
        </div>
        <div class="col-4 col-6-medium col-12-small"></div>
        <div class="col-12">
          <ul class="actions">
            <li>
              <a href="#" class="button icon solid fa-file">Tell Me More</a>
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
    console.log(response.data);
    this.news = response.data;
  },
};
</script>
