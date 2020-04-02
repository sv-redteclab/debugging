FROM node:latest

WORKDIR /app
COPY . .


EXPOSE 8080
EXPOSE 9229
CMD ["node", "--inspect-brk=0.0.0.0", "server.js"]

# docker build -t talk_debugging_node .
# docker container run --name talk_debugging_node_container -d --rm -p 8080:8080 -p 9229:9229 talk_debugging_node