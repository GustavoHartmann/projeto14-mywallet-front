FROM node:alpine AS build

WORKDIR /home/app

COPY . .

RUN npm install

RUN npm run build


FROM nginx:alpine

COPY --from=build /home/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]