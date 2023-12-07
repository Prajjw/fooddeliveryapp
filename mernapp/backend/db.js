const mongoose = require('mongoose');

// Define the connection URI
const mongoURI = 'mongodb+srv://prajjwalsrivastava329:0606PRAJJWAL@cluster0.1hirc2j.mongodb.net/foodies?retryWrites=true&w=majority';

// Connect to MongoDB using a promise
const mongoDB = (async () => {
  try {
    // Connect to MongoDB using await
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB successfully');
    const db = await mongoose.connection.db.collection("food");
    const cursor = db.find({});

    // Convert cursor to an array of documents
    const data = await cursor.toArray();

    global.Sample = data;
    const db2 = await mongoose.connection.db.collection("sample");
    const cursor2 = db2.find({});

    // Convert cursor to an array of documents
    const data2 = await cursor2.toArray();
    global.Sample2 = data2;
    ;













  } catch (error) {
    console.error('Failed to connect to MongoDB', error);

  }
})();


module.exports = mongoDB

