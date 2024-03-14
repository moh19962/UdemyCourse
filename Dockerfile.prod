# Kies een base image
FROM node:16

# Stel de werkdirectory in de container in
WORKDIR /usr/src/app

# Kopieer package.json en package-lock.json
COPY package*.json ./

# Installeer projectafhankelijkheden
RUN npm install

# Kopieer alle projectbestanden naar de container
COPY . .

# Stel de poort in die de container beschikbaar zal stellen
EXPOSE 3000

# Definieer het commando om de app te starten
CMD ["npm", "start"]
