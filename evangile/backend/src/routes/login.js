const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mysqlDb = require('../persistence/mysql');

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Champs manquants' });
  }

  const pool = mysqlDb.getPool();

  pool.query(
    'SELECT * FROM users WHERE email = ?',
    [username],
    (err, results) => {
      if (err) {
        console.error('Erreur dans /login:', err);
        return res.status(500).json({ message: 'Erreur serveur' });
      }

      if (!results || results.length === 0) {
        return res.status(401).json({ success: false, message: 'Utilisateur non trouvé' });
      }

      const user = results[0];

      bcrypt.compare(password, user.password, (compareErr, isMatch) => {
        if (compareErr) {
          console.error('Erreur bcrypt:', compareErr);
          return res.status(500).json({ message: 'Erreur serveur' });
        }

        if (!isMatch) {
          return res.status(401).json({ success: false, message: 'Mot de passe incorrect' });
        }

        // Connexion réussie
        res.json({
          success: true,
          message: 'Connexion réussie',
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
          }
        });
      });
    }
  );
});

module.exports = router;
