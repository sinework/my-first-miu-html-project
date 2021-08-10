const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();


const date = new Date();
const hour = date.getHours();


app.use('/css', express.static(path.join(__dirname, '../../w3d6/q1', 'css')));

app.use(express.urlencoded({extended: false}));

app.use(session({
    secret: 'secrete',
    resave: false,
    saveUninitialized: true
}));

app.use((req, res, next) => {
    if(!req.session.userData){
        req.session.userData = {};
    }
    next();
});

app.get('/', (req, res, next) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
            <head> 
                <meta/> 
                <title>demo</title> 
                <link href="${hour > 6 && hour < 18 ? '/css/day.css': '/css/night.css'}" rel="stylesheet"/>
            </head>
            <body>
            <form action="/results" method="post">
                <label>Name: <input type="text" name="name" /></label>
                <label>Age: <input type="text" name="age" /></label>
                <button type="submit">Submit</button>
            </form>
        </body>
    </html>`);
});


app.post('/results', (req, res, next) => {
    let name = req.body.name;
    let age = req.body.age;

    req.session.userData["name"] = name;
    req.session.userData["age"] = age;
    res.redirect(303, '/output')
});


app.get('/output', (req, res, next) => {
   
    let name = req.session.userData['name'];
    let age = req.session.userData['age'];

    if (name && age) {
        res.send(`Name: ${name} Age: ${age}`);
        
    }else{
        name = "person";
        res.send(`Welcome ${name}`);
    }

});

app.listen(3000);