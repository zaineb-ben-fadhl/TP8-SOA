# TP8 – Microservices avec API Gateway Dynamique (Kong DB-less)

## Description du Projet

Ce projet consiste à mettre en place une architecture microservices avec **Kong** en mode **DB-less** comme API Gateway. Nous avons déployé deux microservices REST en **Node.js** (un pour les utilisateurs et un pour les produits), et nous avons configuré Kong pour assurer le routage dynamique entre ces services via un fichier de configuration YAML. Le tout est orchestré avec **Docker Compose**.

### Objectifs :
- Découvrir et utiliser **Kong** comme API Gateway dynamique en mode DB-less.
- Déployer deux microservices REST (Users et Products) en **Node.js**.
- Configurer le routage dynamique dans Kong via un fichier de configuration.
- Utiliser **Docker Compose** pour l'orchestration des services.
- Tester les services via l'API Gateway de Kong.

## Arborescence du Projet

