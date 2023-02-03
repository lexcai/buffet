 # Démarrage avec Create React App
Ce projet a été bootstrappé avec Create React App.

## Scripts disponibles
Dans le répertoire du projet, vous pouvez exécuter :

### npm start
Exécute l'application en mode développement.
Ouvrez http://localhost:3000 pour la visualiser dans le navigateur.

La page se rechargera si vous effectuez des modifications.
Vous verrez également toutes les erreurs de lint dans la console.

### npm test
Lance le lanceur de tests en mode d'interaction.
Voir la section sur l'exécution de tests pour plus d'informations.

### npm run build
Construit l'application pour la production dans le répertoire build.
Il regroupe correctement React en mode production et optimise la construction pour le meilleur rendement.

La construction est minimisée et les noms de fichiers incluent les hashes.
Votre application est prête à être déployée !

Voir la section sur le déploiement pour plus d'informations.

### npm run eject
Note : ceci est une opération à sens unique. Une fois que vous avez eject, vous ne pouvez pas revenir en arrière !

Si vous n'êtes pas satisfait des choix de l'outil de construction et de configuration, vous pouvez eject à tout moment. Cette commande supprimera la dépendance unique de construction de votre projet.

Au lieu de cela, il copiera tous les fichiers de configuration et les dépendances transitives (webpack, Babel, ESLint, etc.) directement dans votre projet, de sorte que vous ayez un contrôle complet sur eux. Toutes les commandes sauf eject fonctionneront toujours, mais elles pointeront vers les scripts copiés pour que vous puissiez les personnaliser. À ce stade, vous êtes seul.

Vous n'êtes pas obligé d'utiliser eject. La sélection de fonctionnalités soignée convient aux petits et aux moyens déploiements et vous ne devriez pas vous sentir obligé d'utiliser cette fonctionnalité. Cependant, nous comprenons que cet outil ne serait pas utile si vous ne pouviez pas le personnaliser lorsque vous êtes prêt pour cela.

En savoir plus
Vous pouvez en savoir plus dans la [documentation de Create React
# Technologie utilisé et fonctionnalitées 

React: une bibliothèque JavaScript pour la création d'interface utilisateur
React Router DOM: une bibliothèque pour la gestion de la navigation dans une application React
Reactstrap: une bibliothèque basée sur Bootstrap pour la mise en forme et la conception d'interface utilisateur
Firebase: une plateforme pour développer des applications Web et mobiles en temps réel, utilisant ici l'authentification et la gestion de la base de données.

Le code de l'application comporte également des pages telles que Home, Login, Logout, Register, Profile, ChangePassword, PaymentForm, ForgotPassword et ResetPassword qui sont toutes gérées par React Router DOM. L'état utilisateur est géré en utilisant la méthode useState de React Hooks. La méthode useEffect est utilisée pour surveiller les changements d'état utilisateur dans Firebase. La navigation est gérée en utilisant les composants Nav, NavItem et NavLink de Reactstrap.
