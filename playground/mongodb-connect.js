let mongoClient = require("mongodb").MongoClient;

mongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  { useNewUrlParser: true },
  (err, client) => {
    if (err) return console.log("unable to connect mongodb server.");

    console.log("Mongodb connected");
    const db = client.db();

    // // inserting new users
    // db.collection("Users").insertOne(
    //   {
    //     name: "Swapnil",
    //     location: "Noida",
    //     age: 22
    //   },
    //   (err, result) => {
    //     if (err) return console.log(err);

    //     console.log(result.ops);
    //   }
    // );

    // finding document in mongodb
    db.collection("Users")
      .find({ name: "Swapnil" })
      .toArray()
      .then(docs => {
        console.log(docs);
      })
      .catch(err => console.log(err));

    client.close();
  }
);
