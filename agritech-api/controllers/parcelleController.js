const Parcelle = require('../models/parcelleModel');

// POST /api/parcelles
exports.create = async (req, res) => {
  try {
    if (!req.body.nom) {
      return res.status(400).json({ success: false, message: 'Le nom est obligatoire' });
    }
    const parcelle = await Parcelle.create(req.body);
    res.status(201).json({ success: true, message: 'Parcelle ajoutée', data: parcelle });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erreur serveur' });
  }
};

// GET /api/parcelles
exports.getAll = async (req, res) => {
  try {
    const parcelles = await Parcelle.findAll();
    res.json({ success: true, total: parcelles.length, data: parcelles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erreur serveur' });
  }
};

// GET /api/parcelles/:id
exports.getOne = async (req, res) => {
  try {
    const parcelle = await Parcelle.findById(req.params.id);
    if (!parcelle) {
      return res.status(404).json({ success: false, message: 'Parcelle non trouvée' });
    }
    res.json({ success: true, data: parcelle });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erreur serveur' });
  }
};