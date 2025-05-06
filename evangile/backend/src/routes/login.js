const express = require('express');
const router = express.Router();
const mysqlDb = require('../persistence/mysql');

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Champs manquants' });
  }

  const pool = mysqlDb.getPool(); // ✅ On récupère dynamiquement le pool ici

  pool.query(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [username, password],
    (err, results) => {
      if (err) {
        console.error('Erreur dans /login:', err);
        return res.status(500).json({ message: 'Erreur serveur' });
      }

      if (results && results.length > 0) {
        res.json({ success: true, message: 'Connexion réussie' });
      } else {
        res.status(401).json({ success: false, message: 'Identifiants invalides' });
      }
    }
  );
});

module.exports = router;
