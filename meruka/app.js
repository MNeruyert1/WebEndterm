const http = require('http');
const fs = require('fs');
http.createServer(function(request, response) {

    if(request.url==='/'){
        fs.readFile('./index.html', function (err, html) {
            if (err) {
                response.send(500,{error: err});
            }
            response.writeHeader(200, {"Content-Type": "text/html"});
            response.write(html);
            response.end();
        });
    }
    else if(request.url==='/about'){
        fs.readFile('./about.html', function (err, jsFile) {
            if (err) {
                response.send(500,{error: err});
            }
            response.writeHeader(200, {"Content-Type": "text/html"});
            response.write(jsFile);
            response.end();
        });
    }
    else if(request.url==='/graduation') {
        fs.readFile('./graduate.html', function (err, jsFile) {
            if (err) {
                response.send(500, {error: err});
            }
            response.writeHeader(200, {"Content-Type": "text/html"});
            response.write(jsFile);
            response.end();
        })
    }
    else if(request.url==='/study') {
        fs.readFile('./study.html', function (err, jsFile) {
            if (err) {
                response.send(500, {error: err});
            }
            response.writeHeader(200, {"Content-Type": "text/html"});
            response.write(jsFile);
            response.end();
        });
    }
    else if(request.url==='/img/welcome.jpg'){
        fs.readFile('img/welcome.jpg', function (err, jsFile) {
            if (err) {
                response.send(500,{error: err});
            }
            response.writeHeader(200, {"Content-Type": "text/html"});
            response.write(jsFile);
            response.end();
        })
    }
    else if(request.url==='/style.css'){
        fs.readFile('style.css', function (err, jsFile) {
            if (err) {
                response.send(500,{error: err});
            }
            response.writeHeader(200, {"Content-Type": "text/css"});
            response.write(jsFile);
            response.end();
        })
    }
    else if(request.url==='/script.js'){
        fs.readFile('script.js', function (err, jsFile) {
            if (err) {
                response.send(500,{error: err});
            }
            response.writeHeader(200, {"Content-Type": "text/javascript"});
            response.write(jsFile);
            response.end();
        })
    }
    else if(request.url==='/img/about.jpg'){
        fs.readFile('img/about.jpg', function (err, jsFile) {
            if (err) {
                response.send(500,{error: err});
            }
            response.writeHeader(200, {"Content-Type": "text/html"});
            response.write(jsFile);
            response.end();
        })
    }
    else if(request.url==='/img/cry.jpg'){
        fs.readFile('img/cry.jpg', function (err, jsFile) {
            if (err) {
                response.send(500,{error: err});
            }
            response.writeHeader(200, {"Content-Type": "text/html"});
            response.write(jsFile);
            response.end();
        })
    }
    else if(request.url==='/img/gallery/graduation.jpg'){
        fs.readFile('img/gallery/graduation.jpg', function (err, jsFile) {
            if (err) {
                response.send(500,{error: err});
            }
            response.writeHeader(200, {"Content-Type": "image"});
            response.write(jsFile);
            response.end();
        })
    }
    else if(request.url==='/img/gallery/study.jpg'){
        fs.readFile('img/gallery/study.jpg', function (err, jsFile) {
            if (err) {
                response.send(500,{error: err});
            }
            response.writeHeader(200, {"Content-Type": "image"});
            response.write(jsFile);
            response.end();
        })
    }
    else if(request.url==='/video/students/memes.mp4'){
        fs.readFile('video.html', function (err, jsFile) {
            if (err) {
                throw err
            }
            response.writeHeader(200, {"Content-Type": "video"});
            response.write(jsFile);
            response.end();
        })
    }
    else if(request.url==='/video'){
        fs.readFile('video/students/memes.mp4', function (err, jsFile) {
            if (err) {
                response.send(500,{error: err});
            }
            response.writeHeader(200, {"Content-Type": "video"});
            response.write(jsFile);
            response.end();
        })
    }
    else if(request.url!=='/about' || request.url!=='/' || request.url!=='/graduation' || request.url!=='/study'){
        fs.readFile('error.html', function (err, jsFile) {
            if (err) {
                response.send(500,{error: err});
            }
            response.writeHeader(200, {"Content-Type": "text/html"});
            response.write(jsFile);
            response.end();
        })
    }


}).listen(3000);