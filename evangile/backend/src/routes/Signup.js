const express = require('express');
const bcrypt = require('bcrypt');
const mysqlDb = require('../persistence/mysql'); // <-- importer le module complet

const router = express.Router();

router.post('/signup', (req, res) => {
    const pool = mysqlDb.getPool(); // <-- récupérer le vrai pool ici
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Champs manquants' });
    }

    pool.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) {
            console.error('Erreur dans /signup (check email):', err);
            return res.status(500).json({ error: 'Erreur serveur' });
        }

        if (results.length > 0) {
            return res.status(400).json({ error: 'Email déjà utilisé' });
        }

        bcrypt.hash(password, 10, (hashErr, hashedPassword) => {
            if (hashErr) {
                console.error('Erreur de hash:', hashErr);
                return res.status(500).json({ error: 'Erreur serveur' });
            }

            pool.query(
                'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
                [name, email, hashedPassword],
                (insertErr, result) => {
                    if (insertErr) {
                        console.error('Erreur dans /signup (insert):', insertErr);
                        return res.status(500).json({ error: 'Erreur lors de la création' });
                    }

                    res.status(201).json({
                        success: true,
                        message: 'Utilisateur créé',
                        userId: result.insertId
                    });
                }
            );
        });
    });
});

module.exports = router;
