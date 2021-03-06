const MongoClient = require('mongodb').MongoClient;

const config = require('config');

const db = config.get('mongoURI');

const connectDB = async () => {

    try {
        await MongoClient.connect(db, {
             useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected... ")
    } catch (error) {
        console.log("error", error)
        console.error(error.message);
        // Exit Process with Failure
        process.exit(1);
    }
}


module.exports = connectDB;