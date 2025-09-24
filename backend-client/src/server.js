import app from "./app.js";
import { connectDB } from "./config/database.js";

const PORT = 3333;

const start = async () => {
    try {
        await connectDB();
        await app.listen({
            host: '0.0.0.0', port: PORT
        })
        console.log(`Server listening on port ${PORT}`)
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}
start();