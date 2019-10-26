import axios from "axios";

export default {
  //Get local organizations via petfinder api and user input location
  getOrgs: function(q) {
    return axios.get("/api/search", { params: { q: "location:" + q } });
  },

  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("It reached here.");
    return axios.post("/api/books", bookData);
  }
};
