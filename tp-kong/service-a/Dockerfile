# Utilise une image Node.js légère
FROM node:22-alpine

# Définit le répertoire de travail
WORKDIR /app

# Copie les fichiers nécessaires
COPY package*.json ./
RUN npm install --production
COPY index.js ./

# Expose le port du service
EXPOSE 3001

# Commande de démarrage
CMD ["node", "index.js"]
