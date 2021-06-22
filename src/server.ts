import express, { response } from "express";

// Instalar tipagem express: @types/express
const app = express();

app.get("/users", (request, response)=> {
   return response.send("Hello World NLW - [GET]");
});

app.post("/users", (request, response) => {
    return response.send("Hello World NLW - [POST]");
});

app.listen(3000, () => console.log('server is running'));