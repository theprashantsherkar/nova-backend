import express from 'express';

const app = express();

const PORT = 5000;

app.post("/v1/helloworld", (req, res) => {

    const a = dummy;
    console.log(req.headers);
    res.json({
        name: "temp project",
        message: "hello world",
    });
});

app.listen(PORT, () => {
    console.log('server is running at port: ', PORT);
});




//make an express server, 3 apis, get, post
const dummy = [
    {}, {
        
    }, {
        
    }
]