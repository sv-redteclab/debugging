FROM node:latest

WORKDIR /app
COPY . .


EXPOSE 8080
EXPOSE 9229
CMD ["node", "--inspect-brk=0.0.0.0", "server.js"]
