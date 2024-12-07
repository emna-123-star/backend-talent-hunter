const mongoose = require('mongoose');
const User = require('./models/userModel'); // Assurez-vous que ce chemin est correct

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log('MongoDB connected');

  // Créer un nouvel utilisateur
  const user = new User({
    name: 'Test User',
    email: 'testuser@example.com',
    password: 'password123',
    role: 'candidat', // Vous pouvez aussi utiliser 'admin' ou 'user'
  });

  // Sauvegarder l'utilisateur dans la base de données
  await user.save();

  console.log('User created:', user);
  mongoose.connection.close(); // Ferme la connexion à la base de données
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
