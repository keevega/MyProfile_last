import express from 'express'
import dotenv from 'dotenv'
dotenv.config({path: '.env'})

//Crear la app
const app = express()

// Carpeta Pública
app.use( express.static('public'));

// Controller
const home = (req, res) => {
    res.render('index.html')
}

//Routing (endpoints)
app.get('/',home)


//  Definir un puerto y arrancar el proyecto

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`El servidor esta funcionando ...`);
}); 