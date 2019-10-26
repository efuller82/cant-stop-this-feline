const petfinder = require("@petfinder/petfinder-js");

class AdoptionSDK {
  constructor() {
    this.client = new petfinder.Client({
      apiKey: "DZTx6mYRQKcXtEzsrwroIRqFXBp2YzYI3YK3ZuqWxkGUjcrmW7",
      secret: "XcUMQrOzZd6F0PxYuqHIGJTGkwmHWdJZJ0wqzXiE"
    });
  }

  search = (location, callback) => {
    return (
      this.client.organization
        .search({ location: location })
        .then(resp => {
          // Do something with resp.data.organizations
          return callback(resp.data);
        })
        // Do something with resp.data.organizations
        //   return callback(resp.data);

        //   .map(org => {
        // map and send back to client only the
        //       // id, title, infoLink, authors, description, and thumbnail
        //       return {
        //         id: org.id,
        //         name: org.organizations.name,
        //         city: org.organizations.city,
        //         website: org.organizations.website,
        //         mission_statement: org.organizations.mission_statement,
        //         href: org.organizations._links.animals
        //       };
        //     });
        //   response.json(results);
        // })
        .catch(error => {
          console.log(error);
        })
    );
  };
}
const adoptsdk = new AdoptionSDK();

export default adoptsdk;
