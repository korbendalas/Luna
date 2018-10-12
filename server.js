const express = require('express');
const mongoose = require('mongoose');

//Autentifikacija korisnika
const users  = require('./routes/api/users');

//Profili
const profile  = require('./routes/api/profile');
//Postovi
const posts  = require('./routes/api/posts');


const app = express();

//DB CONFIG  - pristup mongo podacima, u objektu
const db = require('./config/keys.js').mongoURI;

//Connect to mongoDb kroz mongoose
mongoose.
    connect(db). //vraca prommise
    then(console.log('MongoDB connected!')) //prommise, succcess
    .catch(err => console.log(err)); // ako ima greska 



app.get('/', (req, res)=>{
    res.send('Hello');
    
});

//USE ROUTES  - rutiranje. Mapira req sa lokalnim folderom

app.use('/api/users', users);
app.use('/api/profile',profile);
app.use('/api/posts', posts);

//osluskuj port servera ILI lookalni na  portu 5000
const port = process.env.PORT || 5000;
app.listen(port, ()=>{console.log(`Server running on port ${port}`)});