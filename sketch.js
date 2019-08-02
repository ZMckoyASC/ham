const data = {
  results: [
    {
      gender: "female",
      name: { title: "ms", first: "estelle", last: "rodriguez" },
      location: {
        street: "4188 rue de l'abbé-patureau",
        city: "lille",
        state: "haute-savoie",
        postcode: 91747,
        coordinates: { latitude: "0.4298", longitude: "32.6573" },
        timezone: {
          offset: "-5:00",
          description: "Eastern Time (US & Canada), Bogota, Lima"
        }
      },
      email: "estelle.rodriguez@example.com",
      login: {
        uuid: "5ea46966-e4fa-46b1-9ae4-3dba6cda4257",
        username: "crazyduck864",
        password: "tights",
        salt: "r8NyRggO",
        md5: "9f12e5fff08e6b989d11086a0c79b587",
        sha1: "809e3a27d64b07665a879002eb1e89a83e538e1d",
        sha256:
          "dc10dd393206209934763e2fea3d6217f661ba54755128df0dcb812a16d7cb72"
      },
      dob: { date: "1982-07-29T16:51:15Z", age: 37 },
      registered: { date: "2013-05-11T18:48:30Z", age: 6 },
      phone: "04-86-21-34-60",
      cell: "06-45-09-68-68",
      id: { name: "INSEE", value: "2NNaN99946539 63" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/41.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/41.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/41.jpg"
      },
      nat: "FR"
    }
  ],
  info: { seed: "b1dd21f75533fe77", results: 1, page: 1, version: "1.2" }
};
const img = document.getElementById("image");
img.src = data.results[0].picture.large;
const h1 = document.getElementById("name");
h1.innerHTML = data.results[0].name.first;
const h2 = document.getElementById("email");
h2.innerHTML = data.results[0].email;
const h3 = document.getElementById("phoneNumber");
h3.innerHTML = data.results[0].phone;

const button = document.getElementById("button");
let spongebob = {
    fullName: "Spongebob Squarepants",
    bestFriend: "Patrick",
    home: "Bikini Bottom",
    pet:"Gary",
    // sayFullName: function
}



