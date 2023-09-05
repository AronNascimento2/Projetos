const express = require("express");
const router = require("./router");
const app = express();
// app.get("/tasks", (request, response) => {
//   response.status(200).send("Ola,Mundo");
// });
// app.post("/tasks", (request, response) => {
//   response.status(200).send("Ola,Mundo");
// });
// app.delete("/tasks", (request, response) => {
//   response.status(200).send("Ola,Mundo");
// });
// app.put("/tasks", (request, response) => {
//   response.status(200).send("Ola,Mundo");
// });
app.use(router);
module.exports = app;
