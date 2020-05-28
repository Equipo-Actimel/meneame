<template>
    <div class="formulario" v-if="!isAuth">
        <div v-if="showLogin">
          <h3>Login <small><a href="#" @click="showLogin=false">¿crear cuenta?</a></small></h3>
           <label>Usuario: <input type="text" v-model="user" ></label>
          <label>Contraseña <input type="password" v-model="pass"></label>
          <button @click="login">Login</button>
        </div>
        <div v-else>
          <h3>Crear cuenta <small><a href="#" @click="showLogin=true">¿ya tienes cuenta?</a></small></h3>
          <label>Usuario: <input type="text" v-model="user" ></label>
          <label>Contraseña <input type="password" v-model="pass"></label>
          <button @click="createUser">Crear cuenta</button>
        </div>
    </div>
</template>

<script>

import firebase from 'firebase'

export default {
  name: 'App',
  data(){
    return {
      isAuth: false,
      user: "voldemort@hogwarts.es",
      pass: "testttttt",
      orders: [],
      showLogin: true
    }
  },
  mounted() {
    this.checkAuth();
  },
  methods: {
    async getOrders(){
      let config = {
        headers: {
            'Authorization': `Bearer ${window.localStorage.getItem("token")}`
        }
      }
      let response = await await axios("http://localhost:3000/users")
      this.users = response.data
    },
   
    checkAuth(){
      this.isAuth = window.localStorage.getItem("token")!= null
    },
    async createUser(){
      try{
        let auth = await firebase.auth().createUserWithEmailAndPassword(this.user,this.pass)
        console.log(auth.user.uid)
      }catch(err){
        alert(err.message)
      }
    },
    async logout(){
      window.localStorage.removeItem("token")
      this.checkAuth()
    },
    async login(){
      let loginData = {
        email: this.user,
        password: this.pass
      }
      try{
        let response = await axios("http://localhost:3000/auth/login") /* this.$http.post("auth/login", loginData) */
        window.localStorage.setItem("token",response.data.token)
        
        this.checkAuth()
      }catch(e){
        console.log("Se ha producido un error")
      }
    }
  },
}
</script>