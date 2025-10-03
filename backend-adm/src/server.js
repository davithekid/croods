import app from "./app.js";

const PORT = 3334;

const start = async () => {
    try {
        await app.listen({
            host: '0.0.0.0', port: PORT
        }),
        console.log("HTTP Server is Running!")
    } catch (error) {
        console.error(error);   
        process.exit(1);
    }
}

start();