import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const PORT = 5000;

app.post("/v1/helloworld", (req, res) => {

    console.log(req.body);

    res.json({
        name: "temp project",
        message: "hello world",
    });
});

app.listen(PORT, () => {
    console.log('server is running at port: ', PORT);
});




