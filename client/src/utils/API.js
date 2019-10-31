import axios from "axios";

export default {
  //Get local organizations via petfinder api and user input location
  getOrgs: function(q) {
    return axios.get("/api/search", { params: { q: "location:" + q } });
  },
  // Gets all cats
  getCats: function() {
    return axios.get("/api/cats");
  },
  // Gets the cat with the given id
  updateCat: function(id, upvotes) {
    return axios.put("/api/cats/" + id, upvotes);
  },
  // Deletes the cat with the given id
  deleteCat: function(id) {
    return axios.delete("/api/cats/" + id);
  },
  // Saves a cat to the database
  saveCat: function(catData) {
    return axios.post("/api/cats", catData);
  },

  //Displays selected cat on rumble page
  selectCat: function(id) {
    return axios.get("/api/cats/" + id);
  }
};
