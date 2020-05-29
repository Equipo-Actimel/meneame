<template>
    <div>
        <Login> </Login>
        <br>
        <Noticia> </Noticia>
    </div>

</template>

<script>
import Login from '@/components/Login'
import Noticia from '../components/Noticia'
export default {
    name : 'Home',
    components: {
        Login,
        Noticia
    }
}
</script>