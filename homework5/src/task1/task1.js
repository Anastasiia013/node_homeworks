import express from "express";

const app = express();

app.use((req, res, next) => {
    const authorization = req.headers['authorization'];

    if (!authorization) {
        return res.status(401).type('text').send('Unauthorized');
    }

    res.status(200).type('text').send('Authorization header received');
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});