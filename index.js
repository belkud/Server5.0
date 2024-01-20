




const http = require ('http')


const html = `
<!DOCTYPE html>
<html lang="en">

<style>
body {
    background-color:gray;
}
button {
    color:red;
}
</style>




<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="">
</head>
<body>
    <div style="color:red">hettt</div>
    <button id="open">Открыть</button>

    <script>
        const button = document.querySelector('#open')
        button.addEventListener('click', () => alert('Hello'))
    </script>

</body>
</html>`;






http.createServer((req,res)=> {
    switch (req.url) {
        case '/':
            res.writeHead (200, {'Content-Type': 'text/html'});
            res.write('main page') 
            res.end(html)
         
        case '/app.css':
            res.writeHead (200, {'Content-Type': 'text/css'});
            res.write('second page ')   
            res.end(css) 
        case '/app.js':
            res.writeHead (200, {'Content-Type': 'text/javascript'});
            res.write('third page ')   
            res.end(js) 
        default:
            res.writeHead (404, {'Content-Type': 'text/html'});
    res.write('Error 404 ')   
    res.end('end') 
    }
}).listen(3000, ()=> {
    console.log('Success');
})

//! node index.js