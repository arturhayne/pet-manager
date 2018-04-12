<template>
  <div>
    <h1>My Pets</h1>
    <h3>Add Pets</h3>
    <form @submit.prevent="savePet()">
        <input v-model="pet.name" placeholder="Name"/>
        <input v-model="pet.type" placeholder="Type"/>
        <input v-model="pet.age" placeholder="Age"/>
        <button type="submit">Save Pet</button>
    </form>
    <h1>{{ msg }}</h1>
    <table>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Age</th>
      </tr>
      <tr v-for="pet in myPets" :key="pet.id">
          <td>{{pet.name}}</td>
          <td>{{pet.type}}</td>
          <td>{{pet.age}}</td>
          <td><button @click="editingPet(pet)">Edit Pet</button> </td>
          <td><button @click="removePet(pet.id)">Remove Pet</button></td>
          <td><button @click="abandonPet(pet)">Abandon Pet</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import PetsService from '@/services/PetsService';

export default {
  name: 'mypetslist',
  data() {
    return {
      msg: 'List of My Pets',
      pet: {},
      myPets: [],
      isEditing: false,
    };
  },
  created() {
    this.getPets();
  },
  methods: {
    getPets() {
      PetsService.myPets()
      .then((response) => {
        this.myPets = response.data;
      });
    },
    savePet() {
      if (this.isEditing) {
        this.editPet();
      } else {
        this.addPet();
      }
    },
    editPet() {
      PetsService.edit(this.pet.id, this.pet)
        .then(() => {
          alert('Edited Sucess!');
        });
      this.getPets();
      this.pet = {};
      this.isEditing = false;
    },
    abandonPet(pet) {
      PetsService.abandon(pet.id, pet)
        .then(() => {
          alert('Abandoned!');
        });
      this.getPets();
    },
    addPet() {
      PetsService.addPet(this.pet)
        .then(() => {
          alert('Added Sucess!');
        });
      this.getPets();
      this.pet = {};
    },
    removePet(id) {
      PetsService.remove(id)
        .then(() => {
          alert('Deleted Sucess!');
        });
      this.getPets();
    },
    editingPet(pet) {
      this.pet = Object.assign({}, this.pet, pet);
      this.isEditing = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
