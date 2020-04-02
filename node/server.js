const http = require("http");

const users = [];
let currentCount = 0;

const requestListener = function(req, res) {
  if (!req.url.startsWith("/user/") || !["PUT", "GET"].includes(req.method)) {
    res.writeHead(400);
    res.end("BAD REQUEST\n");
    return;
  }

  // curl -X PUT -v localhost:8080/user/SOMENAME
  if (req.method == "PUT") {
    const name = req.url.replace("/user/", "");
    users[++currentCount] = name;

    res.writeHead(200);
    res.end(`Added user: ${name}\nTotal users: ${currentCount}\n`);
    return;
  }

  // curl -X GET -v localhost:8080/user/
  if (req.method == "GET") {
    let result = "";

    for (let index = 0; index < currentCount; ++index) {
      result += `${users[index]}\n`;
    }

    res.writeHead(200);
    res.end(result);
    return;
  }
};

const server = http.createServer(requestListener);
server.listen(8080);
