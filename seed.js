var seeder = require("mongoose-seed");

const db = "mongodb+srv://Seed1:!seeds1@cluster0.s5ate.mongodb.net/TestSeeds?retryWrites=true&w=majority";

seeder.connect(db, function () {
  seeder.loadModels([
    "./models/Business",
    "./models/Cart",
    "./models/Product",
    "./models/User",
  ]);
  seeder.clearModels(["Business", "Cart", "Product", "User"], function(){

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
        "username": "HungryHippo",
        "email": "hungryhungry@hippo.com",
        "password": "test123",
      },
      {
        "username": "ItsAlwaysLunchTime",
        "email": "timetoeat@asdsa.com",
        "password": "test123",
      },
      {
        "username": "ILoveFood",
        "email": "foodislife@eat.com",
        "password": "test123",
      },
    ],
  },
  // {
  //   model: "Business",
  //   documents: [
  //     {
  //       "name": "Pho Hoa",
  //       "phone": "+14152836431",
  //       "display_phone": "(415) 283-6431",
  //       "review_count": 1124,
  //       "categories": [{
  //         "title": "Vietnamese",
  //         "title": "Asian",
  //         "title": "Pho"
  //       }],
  //       "rating": 4,
  //       "location":{
          
  //       }

  //     }
  //   ]
  // },
];
