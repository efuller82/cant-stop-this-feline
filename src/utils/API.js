import axios from "axios";

export default {
  getOrgs: function(q) {
    return axios.get("/api/search", { params: { q: "location:" + q } });
  },

  // Saves a book to the database
  saveCat: function(catData) {
    return axios.post("/api/cats", catData);
  },

  // Deletes the book with the given id
  deleteCat: function(id) {
    return axios.delete("/api/cats/" + id);
  }
};
