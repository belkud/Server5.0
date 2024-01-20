 



const http = require ('http')


const html = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>

<style>
body {
    background-color:gray;
  
}
h1 {
    text-align:center;
}
#open {
    color:red;
}
div {
    margin:20px;
}

</style>

<body>
    <h1>Мой первый сервер</h1>
    <div style="color:red">hettt</div>
    <button id="open">Открыть</button>

    <script>
        const button = document.querySelector('#open')
        button.addEventListener('click', () => alert('Hello'))
    </script>

</body>

</html>`;


    //! <link rel="stylesheet" href="style.css">

const port = 3000

http.createServer((req,res)=> {
    switch (req.url) {
        case '/':
            res.writeHead (200, {'Content-Type': 'text/html'});
            res.write(html) 
            res.write('<p>hello world</p> <br>')
            res.end('main page')
         
        case '/second':
            res.writeHead (200, {'Content-Type': 'text/html'});
            res.write(html)   
            res.end('<h3>second page 2</h3>') 
        case '/third':
            res.writeHead (200, {'Content-Type': 'text/html'});
            res.write(html)   
            res.end('third page ') 
        default:
            res.writeHead (404, {'Content-Type': 'text/html'});
            res.write('Error 404 ')   
    }
}).listen(port, ()=> {
    console.log('Success');
})

//! node index.js