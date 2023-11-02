// const mongoose = require("mongoose");
// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log(`MongoDb Connected: ${'mongodb://localhost:27017/mydatabase'}`);
//   } catch (error) {
//     console.log(`Error: ${error.message}`);
//     process.exit();
//   }
// };

// module.exports = connectDB;

const mongoose = require("mongoose")
const dburl = 'mongodb://localhost:27017/'


async function connectDatabase(){
    try{
        await mongoose.connect(dburl,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("Connected To DB")
    }
    catch(error){
        console.error("Error:",error.message)
    }
}

module.exports = connectDatabase;


// const mongoose = require("mongoose");

// // Define the MongoDB connection URL
// const dburl = process.env.MONGO_URL || 'mongodb://localhost:27017/';

// async function connectToDatabase() {
//   try {
//     const conn = await mongoose.connect(dburl, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log(`MongoDb Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1); // Exit the process with an error code
//   }
// }

// module.exports = connectToDatabase;


