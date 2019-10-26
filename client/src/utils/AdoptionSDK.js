const petfinder = require("@petfinder/petfinder-js");

class AdoptionSDK {
  constructor() {
    this.client = new petfinder.Client({
      apiKey: "DZTx6mYRQKcXtEzsrwroIRqFXBp2YzYI3YK3ZuqWxkGUjcrmW7",
      secret: "XcUMQrOzZd6F0PxYuqHIGJTGkwmHWdJZJ0wqzXiE"
    });
  }

  search = (location, callback) => {
    return this.client.organization
      .search({ location: location })
      .then(resp => {
        // Display resp.data.organizations on adoption.js
        return callback(resp.data);
      })

      .catch(error => {
        console.log(error);
      });
  };
}
const adoptsdk = new AdoptionSDK();

export default adoptsdk;
