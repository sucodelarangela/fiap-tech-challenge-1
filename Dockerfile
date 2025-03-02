FROM paulamacedof/docker-fiap:1.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT ["npm","run", "dev"]