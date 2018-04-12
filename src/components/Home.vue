<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul>
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'abandonedlist' }">Abandoned Pets</router-link></li>
      <li><router-link :to="{ name: 'mypetslist' }">My Pets</router-link></li>
      <li><a @click="deslogar()">Deslogar</a></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Pets',
      token: '',
    };
  },
  methods: {
    deslogar() {
      localStorage.setItem('token', '');
      axios.defaults.headers.common.Authorization = '';
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
