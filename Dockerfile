# Etape 1 : Construction de l'application
FROM node:18.12.1 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
#point 1 : référence au répertoire local (ou se trouve Dockerfile)
#point 2 : référence au répertoire de travail dans l'image Docker (WORKDIR /app) (ou se trouve Dockerfile)
COPY . . 
RUN npm run build

#Etape 2 : Servir l'application
FROM node:18.12.1
WORKDIR /app 
COPY --from=builder /app/build ./build
COPY package*.json ./
RUN npm install --only=production
EXPOSE 5000
CMD ["npx", "serve", "-s", "build", "-1", "5000"]