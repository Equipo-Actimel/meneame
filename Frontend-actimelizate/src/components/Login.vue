<template>
    <div>
    <!-- Si el usuario NO está identificado, Le mostramos la opción de loguearse o crear cuenta -->
      <div v-if="!isAuth">
          <div v-if="showLogin">
            <h3>Login <small><a href="#" @click="showLogin=false">¿crear cuenta?</a></small></h3>
            <label>Email: <input type="text" v-model="email" ></label>
            <label>Contraseña <input type="password" v-model="password"></label>
            <button @click="login">Login</button>
          </div>
          <div v-else>
            <h3>Crear cuenta <small><a href="#" @click="showLogin=true">¿ya tienes cuenta?</a></small></h3>
            <label>Nombre: <input type="text" v-model="name"></label>
            <label>Apellidos: <input type="text" v-model="surname"></label>
            <label>Email: <input type="email" v-model="email" ></label>
            <label>Contraseña <input type="password" v-model="password"></label>
            <button @click="createUser">Crear</button>
          </div>
      </div>

    <!-- Si el usuario está identificado, le mostramos un logout -->
      <div v-else>
          <button @click="logout">Log out</button>
      </div>
    </div>    
</template>

<script>
export default {
  data(){
    return {
      isAuth: false,
      email: "",
      password: "",
      orders: [],
      showLogin: true,
      name: "",
      surname: ""
    }
  },
  mounted() {
    this.checkAuth();
  },
  methods: {
    async getOrders(){
      /*
      let config = {
        headers: {
            'Authorization': `Bearer ${window.localStorage.getItem("token")}`
        }
      }
      let response = await await axios("http://localhost:3000/users")
      this.users = response.data
      */
    },
   
    checkAuth(){
      this.isAuth = window.localStorage.getItem("token")!= null
    },
    async createUser(){
      let newUser = {
        email: this.email,
        password: this.password,
        name: this.name,
        surname: this.surname,
        profile: "user"
      }

      try{
        let userCreated = await this.$http.post('users', newUser)

        this.email = ""
        this.name = ""
        this.password = ""
        this.surname = ""
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
        email: this.email,
        password: this.password
      }
      try{
        let response = await this.$http.post("auth/login", loginData)
        window.localStorage.setItem("token",response.data.token)
        
        this.checkAuth()
      }catch(e){
        console.log("Se ha producido un error")
      }
    }
  },
}
</script>