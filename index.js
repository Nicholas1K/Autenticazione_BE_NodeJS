require('dotenv/config');
const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./routes/UsersRoute');
const { error } = require('console');

const PORT = process.env.PORT;
const app = express();

app.get('/',(req,res)=>{
    try{
        res.send('<h1>Homepage</h1>')
    }catch(error){
        throw new Error(error)
    }   
});

// serve a risolvere i problemi di cors in tutte le chiamate
app.use(cors());

//body parser serve a leggere i file json che vengono inviati con le post e usandolo nella pagina index non dovremo scriverlo in ogni pagina delle routes dove faremo le post
app.use(bodyParser.json());

app.use(express.urlencoded({extended:false}));

//in questa maniera ho associato le route delle pagine che sono in UserRoute senza di questo codice non accedo alle pagine di UserRoute
app.use('/', userRouter);

// qui si mette in ascolto la porta per la connessione 
app.listen(PORT, () => {
    console.log('server in ascolto sulla porta 3000') 
});

//questo è il codice per la connessione con il db precedenteemnte creato su mlab
mongoose.connect(process.env.DB_CONNECTION).then(
    ()=> console.log('connessione riuscita')).catch(
        (err)=>{console.error(err);}
    );
