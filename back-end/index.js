const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/posts', async (req, res) => {

    let sortedPosts

    await axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(function (response) {
            const posts = response;
            sortedPosts = posts.data.sort((a, b) => b.title.length - a.title.length);
        })
        .catch(function (error) {
            console.log(error);
        })
        
    res.send(sortedPosts);
})

app.listen(3001, 'localhost', () => {
    console.log('Listening on http://localhost:3001');
})