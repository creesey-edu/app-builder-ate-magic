FROM node:22-bullseye

WORKDIR /app

RUN apt update && apt upgrade -y && apt install --no-install-recommends -y \
   git bash python3 make g++ openssl && \
   apt clean && rm -rf /var/lib/apt/lists/*


COPY package*.json ./

# Install dependencies
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev"]
