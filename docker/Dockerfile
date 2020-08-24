FROM node:10.16.3-lts
WORKDIR /app
EXPOSE 3000

COPY ./dist ./
COPY ./node_modules ./node_modules

# file storage location
RUN mkdir "/uploads"

ENTRYPOINT ["node", "./main.js"]
