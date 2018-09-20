let { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
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

    // // finding document in mongodb
    // db.collection("Users")
    //   .find({ name: "Swapnil" })
    //   .toArray()
    //   .then(docs => {
    //     console.log(docs);
    //   })
    //   .catch(err => console.log(err));

    // // deleting user using deleteMany
    // db.collection("Users")
    //   .deleteMany({ name: "Swapnil" })
    //   .then(res => {
    //     console.log(res.result);
    //   })
    //   .catch(err => console.log(err));

    // // deleteing user using findOneAndDelete
    // db.collection("Users")
    //   .findOneAndDelete({ _id: new ObjectID("5ba3f720a9bd2835bc4df276") })
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(err => console.log(err));

    // // updating document using findOneAndUpdate
    db.collection("Users")
      .findOneAndUpdate(
        { _id: new ObjectID("5ba3f70c8b583c2984fa80be") },
        {
          $inc: {
            age: 1
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));

    client.close();
  }
);
