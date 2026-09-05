import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://alesyta22_db_user:F6JQx6jR1zy3mwxY@cine-db.pjcnrrw.mongodb.net/?appName=cine-db"

const cliente = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export default cliente;