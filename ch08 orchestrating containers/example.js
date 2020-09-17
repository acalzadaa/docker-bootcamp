let http = require('http');
let url = require('url');
let redis = require('redis');

let client = redis.createClient(6379, 'redis');

client.set("/", "Welcome to Docker-Compose helper\nEnter the docker-compose command in the URL for help\n", redis.print);
client.set("/build", "Build or rebuild services", redis.print);
client.set("/kill", "Kill containers", redis.print);

let server = http.createServer(function (request, response) {
    let href = url.parse(request.url, true).href;
    response.writeHead(200, { "Content-Type": "text/plain" });

    client.get(href, function (err, reply) {
        if (reply == null) response.write("Command: " +
            href.slice(1) + " not supported\n");
        else response.write(reply + "\n");
        response.end();
    });
});

console.log("Listening on port 80");
server.listen(80);