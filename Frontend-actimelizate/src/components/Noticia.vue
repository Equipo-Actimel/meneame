<template>
    <div class="container mt-4">
        <div class="row">
            <form class="col-6">
                <h3>¿Qué está pasando?</h3>
                <label>Título: <input type="text" v-model="title"></label>
                <label>Noticia <textarea v-model="body" /></label>
                <button @click="añadirNoticia()">Añadir</button>
            </form>
        </div>
    </div>
</template>


<script>
export default {
  data(){
    return {
      title: "",
      body: ""
    }
  },
  methods: {
      async añadirNoticia(){
          try{
            const token = window.localStorage.getItem('token')
            let Noticia = {
                title: this.title,
                body: this.body
            }
            let newNoticia = await this.$http.post("news", Noticia, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            
            this.title = ""
            this.body = ""
            this.$router.push('/news')
          } catch(e){
              console.log(e)
          }
          
      }
  }
}
</script>
