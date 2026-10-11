const db = require('../config/db');

module.exports = {
  async create(data) {
    const [result] = await db.query(
      `INSERT INTO parcelles (nom, humidite_min, humidite_max, temperature_max)
       VALUES (?, ?, ?, ?)`,
      [
        data.nom,
        data.humidite_min ?? 30,
        data.humidite_max ?? 70,
        data.temperature_max ?? 45
      ]
    );
    return this.findById(result.insertId);
  },

  async findAll() {
    const [rows] = await db.query('SELECT * FROM parcelles ORDER BY id DESC');
    return rows;
  },

  async findById(id) {
    const [rows] = await db.query('SELECT * FROM parcelles WHERE id = ?', [id]);
    return rows[0];
  }
};