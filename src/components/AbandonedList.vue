<template>
  <div>
    <h1>{{ msg }}</h1>
        <h1>Abandoned Pet List</h1>
    <hr />
    <table>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Age</th>
      </tr>
      <tr v-for="pet in abandonedPets" :key="pet.id">
          <td>{{pet.name}}</td>
          <td>{{pet.type}}</td>
          <td>{{pet.age}}</td>
          <td><button @click="adoptPet(pet)">Adopt Pet</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import PetsService from '@/services/PetsService';

export default {
  name: 'AbandonedList',
  data() {
    return {
      msg: 'List of Abandoned Pets',
      abandonedPets: [],
    };
  },
  created() {
    this.getAbandonedPets();
  },
  methods: {
    getAbandonedPets() {
      PetsService.abandoned()
      .then((response) => {
        this.abandonedPets = response.data;
      });
    },
    adoptPet(pet) {
      PetsService.adopt(pet.id, pet)
        .then(() => {
          alert('Adopted');
        });
      this.getAbandonedPets();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
