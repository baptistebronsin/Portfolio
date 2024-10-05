# Étape 1 : Construction de l'application
FROM node:20-alpine AS build

# Installer les dépendances nécessaires pour la construction
RUN apk add --no-cache python3 make g++

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json pnpm-lock.yaml ./

# Installer pnpm
RUN npm install -g pnpm

# Installer les dépendances
RUN pnpm install

# Copier le reste du code de l'application
COPY . .

# Construire l'application pour la production (SSR)
RUN pnpm run build

# Étape 2 : Création de l'image finale
FROM node:20-alpine

# Définir le répertoire de travail
WORKDIR /app

# Installer pnpm
RUN npm install -g pnpm

# Copier les fichiers de dépendances
COPY package.json pnpm-lock.yaml ./

# Installer les dépendances de production
RUN pnpm install --prod

# Copier le build de l'étape précédente
COPY --from=build /app/.output ./.output

# Exposer le port sur lequel l'application tourne
EXPOSE 3000

# Démarrer l'application
CMD ["node", ".output/server/index.mjs"]

# docker build -t registry.gitlab.com/baptiste.bronsin/portfolio:1.0.1 .
# docker push registry.gitlab.com/baptiste.bronsin/portfolio:1.0.1
# docker run -p 3000:3000 portfolio