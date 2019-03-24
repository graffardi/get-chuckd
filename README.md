## GET CHUCKD

Hello!

Ce repository contient le travail que j'ai effectué pour le test troopers.agency.

Tout d'abord, l'application est en ligne à cette adresse: https://get-chuckd.herokuapp.com/

Attention, la musique de Walker Texas Ranger se lancera, donc faites attention au volume si vous utilisez un casque :skull:

### Choix techniques

Pour développer cette application, j'ai pris les décisions suivantes:

- Create React App: Pour la simplicité de mise en place, malgré un bundle qui pourrait être plus optimisé.
- React 16.8.+ pour l'utilisation des Hooks (ici principalement useState et useEffect).
- Pas de package de state management, et l'utilisation de la Context API en guise de store. En effet, je pense que Redux sur un si petit projet aurait été un peu (voire très) overkill, et dans le cas de ce programme un store aussi léger et efficace que la Context API collait parfaitement.
- JEST: Je n'avais jamais essayé les tests sur un projet React (il s'agissait d'une première pour moi), je dois avouer que malgré la simplicité de certains de mes tests (vraiment pas très avancés), j'ai été convaincu instantanément par leur utilité. Je me suis renseigné pour tester chaque méthode de chacun de mes composants, mais je n'ai pas réussi à trouver des guides suffisamment avancés sur le test des functional components x hooks pour le moment.
- Javascript, malgré mon attrait pour Typescript.
- Node SASS pour la gestion de mon CSS, par simple habitude.
- Axios pour call l'API.
- Et petit shout out à https://api.chucknorris.io/ bien évidemment!

### Choix fonctionnels

Avant de me lancer dans le développement du projet, j'ai tout de suite regardé comment fonctionnait l'API, et j'ai obviously basé mon fonctionnement sur celle-ci.

On ne peut pas effectuer une recherche avec une catégorie et une query, alors lorsque l'on utilise l'un de ces deux champs l'autre se vide. Si aucun des deux champs n'a de valeur, alors la recherche est simplement aléatoire.

Je souhaitais partir dans un premier temps sur une liste, mais je me suis vite ravisé pour développer un "slider" à la place. En effet, dans le cas d'une belle quantité de datas, le slider est bien plus simple d'utilisation et plus optimisé (et cela nous évite une page bien trop longue).

### Remarques

Pour le "extra bonus" des emojis dans les messages de commit, je ne sais pas si cela faisait référence à gitmoji, mais si c'est le cas ce sera pour une prochaine fois. :wink:

### Commandes

Installation et lancement:

```
yarn install
yarn start
```

Test:

```
yarn test
```

### Pour conclure

Merci d'être arrivé jusqu'au bout du README, et à très bientôt! :sunglasses:
