import express from "express";

const app = express();

app.put("/", (req, res) => {
    res.status(200).type("text").send("PUT-запрос обработан");
});

app.delete("/", (req, res) => {
    res.status(200).type("text").send("DELETE-запрос обработан");
});

app.listen(3000, () => {
    console.log("Cервер запущен на порту 3000");
});