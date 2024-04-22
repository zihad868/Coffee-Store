const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()

// Middleware 
app.use(cors());
app.use(express.json());



var uri = `mongodb://${process.env.ENV_USER_NAME}:${process.env.ENV_USER_PASS}@ac-62j8ihz-shard-00-00.7lbrva6.mongodb.net:27017,ac-62j8ihz-shard-00-01.7lbrva6.mongodb.net:27017,ac-62j8ihz-shard-00-02.7lbrva6.mongodb.net:27017/?ssl=true&replicaSet=atlas-g1t94d-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const coffeeCollection = client.db('CoffeeDB').collection('coffee')

    // Get Data
    app.get('/coffee', async(req, res) => {
      const cursor = coffeeCollection.find();
      const result = await cursor.toArray();

      res.send(result);
    })


    // 
    app.get('/coffee/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await coffeeCollection.findOne(query);

      res.send(result);
    })
  
    // Post Data
    app.post('/coffee', async(req, res) => {
       const newCoffee = req.body;
       console.log(newCoffee);
       const result = await coffeeCollection.insertOne(newCoffee);
       res.send(result);
    })

    // Update Data
    app.put('/coffee/:id', async(req, res) => {
       const id = req.params.id;
       const filter = {_id: new ObjectId(id)};
       const options = { upsert: true };
       const updatedCoffee = req.body;

       const coffee = {
        $set: {
          name: updatedCoffee.name,
          quantity: updatedCoffee.quantity, 
          supplier: updatedCoffee.supplier, 
          taste: updatedCoffee.taste, 
          category: updatedCoffee.category, 
          details: updatedCoffee.details, 
          photo: updatedCoffee.photo
        }
       }

       const result = await coffeeCollection.updateOne(filter, coffee, options);
       res.send(result);
    })


    app.delete('/coffee/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await coffeeCollection.deleteOne(query);

      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send("Coffee Server Running ...");
})


app.listen(port, () => {
    console.log(`Server Listen on Port ${port}`)
})