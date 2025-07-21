# MARTIAN FUDO

Martian es una aplicación web desarrollada con react para resolución de un challenge de la empresa FUDO
Esta aplicación es una red social que maneja posteos y comentarios a éstos. Tiene un login sencillo que requiere solo un nombre de usuario y url de avatar. para poder interactuar con la aplicación.

# EJECUCIÓN

La aplicación está hosteada en gh-pages para una rápida visualización 
```
https://celizond.github.io/martian-fudo/ 
```

El repositorio incluye el Dockerfile para buildear la imagen que sirve la aplicación
```
docker build --no-cache -t martian-fudo .
docker run -p 3000:80 martian-fudo       
```

Para correr la aplicación para desarrollo es necesario hacer las correspondientes instalaciones y levantar el proyecto
```
npm install
npm run dev
```

# SECTOR TÉCNICO

La aplicación fue creada con:
- Vite
- React
- Typescript

Para el Ruteo: React Router DOM V6
```
npm install react-router-dom@6
```

Para los estilos: SASS
```
npm install -D sass
```

Para las solicitudes HTTP: Axios
```
npm install axios
```

Manejo de datos: React Query
```
tanstack/react-query
```
<!-- 
Para testing se utilizaría Jest y Testing Library
**** No implementado aún
```
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest ts-jest
npm install --save-dev ts-jest babel-jest @babel/preset-env @babel/preset-react @babel/preset-typescript
``` 
-->