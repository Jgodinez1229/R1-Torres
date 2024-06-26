const mongoose = require("mongoose");
// Para guardar en la nube: 

const MONGODB_URL = "mongodb://localhost:27017/centro_medico";


mongoose.connection.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
mongoose.connection.on('connected', async () => {
  console.log('Conexión exitosa a MongoDB');

 
});

mongoose.connect(MONGODB_URL)
  .catch(err => console.error('Error al conectar a MongoDB:', err));

module.exports = mongoose;