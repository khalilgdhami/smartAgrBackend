const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'API Agritech OK' }));

app.use('/api/parcelles', require('./routes/parcelleRoutes'));
// ⚠️ Pas de ligne /api/mesures

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));