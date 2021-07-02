import seeder from "mongoose-seed";

const db = "mongodb:http://localhost:3000/#/";

seeder.connect(db, function () {
  seeder.loadModels([
    "./models/Business",
    "./models/Cart",
    "./models/Product",
    "./models/User",
  ]);
  seeder.clearModels(["Business", "Cart", "Product", "User"]);
  seeder.populateModels(data, function (err, done) {
    if (err) {
      return console.log("Seeding failed", err);
    }
    if (done) {
      return console.log("Seeding complete", done);
    }
    seeder.disconnect();
  });
});

const data = [
  {
    model: "User",
    documents: [
      {
        "username": "PeterPorker",
        "email": "SpiderHam@blarg.com",
        "password": "test123",
      },
      {
        "username": "",
        "email": "",
        "password": "",
      },
      {
        "username": "",
        "email": "",
        "password": "",
      },
      {
        "username": "",
        "email": "",
        "password": "",
      },
    ],
  },
  {
    model: "Business",
    documents: [
      {
        "name": "Pho Hoa",
        "phone": "+14152836431",
        "display_phone": "(415) 283-6431",
        "review_count": 1124,
        "categories": [{
          "title": "Vietnamese",
          "title": "Asian",
          "title": "Pho"
        }],
        "rating": 4,
        "location":{
          
        }

      }
    ]
  },
];
