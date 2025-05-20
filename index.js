import express from "express";
import { readFileSync } from "fs";

const quest = JSON.parse(readFileSync("./quest.json", "utf-8"));

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(quest)
})

app.listen(PORT, () => {
    console.log(`O Servidor esta rodando na porta ${PORT}`)
})