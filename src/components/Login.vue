<template>
  <div>
    <h1>{{ msg }}</h1>
    <input placeholder="Login" v-model="usuario.email"/>
    <input placeholder="Password" v-model="usuario.password"/>
    <button   @click=authenticate>Authenticate</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      msg: 'Login',
      usuario: { email: '', password: '' },
      token: '',
    };
  },
  methods: {
    authenticate() {
      axios.post('http://localhost:5000/api/v1/authenticate', this.usuario)
      .then((response) => {
        axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
        localStorage.setItem('token', `Bearer ${response.data.token}`);
        this.$router.push({ name: 'home' });
      }).catch(() => {
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
