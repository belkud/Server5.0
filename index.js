 



const http = require ('http')
const fs = require ('fs')


const html = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="icon" href="/public/jspicture.jpg" sizes: "64*64" type="image/jpg">
    
    </head>
    
<style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&display=swap');

    body {
        background-color:gray;
        font-family: 'Playfair Display', serif;
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
    <button id="open">Открыть</button>
    <div style="color:red">hettt</div>


    <script>
        const button = document.querySelector('#open')
        button.addEventListener('click', () => alert('Hello'))
    </script>

</body>

</html>`;


    //! <link rel="stylesheet" href="style.css">

const port = 3000
function staticFile () {

}


http.createServer((req,res)=> {
    switch (req.url) {
        case '/':
            res.writeHead (200, {'Content-Type': 'text/html'});
            let data = fs.readFileSync('./addInfo.html', {encoding: 'utf-8', flag:"r"})
            res.write(`${html} ${data}`)
            // res.write(' <br>')
        
            
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