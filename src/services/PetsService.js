import axios from 'axios';

export default class Pet {

  static abandoned() {
    return axios.get('http://localhost:5000/api/v1/pets/abandoned');
  }

  static myPets() {
    return axios.get('http://localhost:5000/api/v1/pets');
  }

  static addPet(pet) {
    return axios.post('http://localhost:5000/api/v1/pets', pet);
  }

  static remove(id) {
    return axios.delete(`http://localhost:5000/api/v1/pets/${id}`);
  }

  static edit(id, pet) {
    return axios.put(`http://localhost:5000/api/v1/pets/${id}`, pet);
  }

  static abandon(id, pet) {
    return axios.put(`http://localhost:5000/api/v1/pets/abandon/${id}`, pet);
  }

  static adopt(id, pet) {
    return axios.put(`http://localhost:5000/api/v1/pets/adopt/${id}`, pet);
  }
}
