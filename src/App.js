import logo from './logo.svg';
import './App.css';

function Index() {
  return(
    <div class="formulaire">
      <form action="#" method="post">
        <label for="nom">Nom :</label>
        <input type="text" id="nom" name="nom" required /><br />

        <label for="prenom">Prénom :</label>
        <input type="text" id="prenom" name="prenom" required /><br />

        <label for="age">Âge :</label>
        <input type="number" id="age" name="age" required /><br />

        <label for="email">Adresse e-mail :</label>
        <input type="email" id="email" name="email" required /><br />

        <label for="password">Nouveau mot de passe :</label>
        <input type="password" id="password" name="password" required /><br />

        <label for="confirm_password">Confirmer le mot de passe :</label>
        <input type="password" id="confirm_password" name="confirm_password" required /><br />

        <input type="submit" value="Envoyer" />
      </form>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
<nav>
    <ul>
      <li><a href="#">Accueil</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Infos</a></li>
      <li><a href="#">Se connecter</a></li>
    </ul>
  </nav>
 <h1> Créer un Nouveau Compte</h1>
 <h3>Entrer vos coordonnées</h3>
        <Index />
      </header>
    </div>
  );
}

export default App;
