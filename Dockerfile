# Etapa 1: Construir la aplicación
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:stable-alpine

# Copiamos el build de React a la carpeta por defecto de Nginx
COPY --from=build /app/docs /usr/share/nginx/html

# Opcional: reemplazar el archivo de configuración por uno custom
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
