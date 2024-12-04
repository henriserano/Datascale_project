
# Framework de Modélisation et d'Exécution de Processus Métiers avec Chatbot

## Description

Ce projet vise à développer un framework permettant la modélisation et l'exécution de processus métiers à l'aide d'un modèle JSON. Il génère automatiquement un chatbot capable d'interagir en langage naturel avec les utilisateurs pour orchestrer ces processus en temps réel.

---

## Prérequis

Avant de lancer le frontend, assurez-vous d'avoir installé les éléments suivants :

* **Node.js** (version 14 ou supérieure) : [Télécharger Node.js](https://nodejs.org/)
* **Git** pour cloner le repository : [Télécharger Git](https://git-scm.com/)
* **Vite.js** pour le serveur de développement (inclus dans le projet)

---

## Installation

1. Clonez le repository :
   ```bash
   git clone https://github.com/henriserano/Datascale_project.git
   ```
2. Accédez au dossier du frontend :
   ```bash
   cd Datascale_project/frontend
   ```
3. Installez les dépendances du projet :
   ```bash
   npm install
   ```

---

## Lancer le serveur de développement

1. Démarrez le serveur local Vite :
   ```bash
   npm run dev
   ```
2. Une fois le serveur démarré, ouvrez votre navigateur et accédez à l'URL affichée, généralement [http://localhost:3000](http://localhost:3000/).

---

## Structure du Projet

* **`src/`** : Contient le code source de l'application.
  * **`components/`** : Composants réutilisables.
  * **`views/`** : Pages principales de l'application.
  * **`assets/`** : Fichiers statiques (images, styles, etc.).
  * **`router/`** : Configuration des routes pour naviguer entre les pages.
* **`public/`** : Contient les fichiers accessibles directement via le navigateur.
* **`vite.config.js`** : Configuration spécifique à Vite.js.

---

## Scripts Utiles

* **Installation des dépendances** :
  ```bash
  npm install
  ```
* **Démarrage du serveur de développement** :
  ```bash
  npm run dev
  ```
* **Compilation pour la production** :
  ```bash
  npm run build
  ```
* **Prévisualisation de la build de production** :
  ```bash
  npm run preview
  ```

---

## Objectifs du Projet

1. Modélisation des processus métiers à l'aide de JSON.
2. Développement d'une interface utilisateur intuitive pour concevoir des processus.
3. Génération d'un chatbot capable d'interpréter les modèles JSON.
4. Orchestration des processus en temps réel.

---

## Technologies Utilisées

* **Vite.js** pour le serveur de développement rapide.
* **React.js** ou **Vue.js** (selon votre configuration).
* **Node.js** pour la gestion des dépendances et des scripts.

---

## Contact

Pour toute question ou suggestion, vous pouvez contacter l'encadrant du projet :

**Henri Serano** - [henri.serano@gmail.com](henri.serano@gmail.com)
