# Projet Web Services

Le projet est composé de 2 services :
    - un service de gestion des utilisateurs
    - un service de gestion des activités sportives (API REST)
    
## Technologies utilisées
### Client Front-End
Technologie : VueJS

Bibliothèques :


### Serveur Back-End
Technologie : NodeJS

Bibliothèques : 
- ExpressJS

### Base de données 
Technologie : MongoDB


## Consigne
Conception d'un back-end en REST ou SOAP, langage au choix.
Conception d'un front-end, langage et framework au choix.
Depuis le front-end, consommation de son propre back-end.
Consommation d'au moins 2 API externes (à consommer depuis le front ou le back, peu importe).

Authentification (une méthode, OAuth ou classique avec id et pw)
Sécurisation du WS (cacher les informations sensibles, chiffrage en base de données...)
Pas de duplication de code
Respecter au mieux les 11 commandements des WS
Commenter son code

## Installation

```bash	
npm install
```

## Lancement sur un serveur

```bash
npm start
```

## Fonctionnement en local

Si l'on souhaite tester le projet en local, il faut modifier deux lignes de code dans les fichiers create.html à la ligne 97 et list.html à la ligne 39 il faut passer le https en http afin de faire fonctionner le projet en local.

