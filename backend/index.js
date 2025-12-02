const express=require('express')
const cors=require('cors')
const port=7500
const app=express()
app.use(cors())
app.use(express.json())


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mrithika1905051_db_user:Xso2LyRtzjATGnEL@cluster0.fwrarpt.mongodb.net/?appName=Cluster0";

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

    

    const practice=client.db("hari").collection("gee")

    app.post("/upload",async(req,res)=>{
        const data=req.body;
        const result=await practice.insertOne(data);
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


app.listen(port,()=>{
    console.log("listening to port",port)
})

