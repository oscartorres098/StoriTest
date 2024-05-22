const RedTemplate = (title, body, url)=>{
    `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Confirm Account Hola</title>
        </head>
        <body>
            <div id="__next"><div><div style="width:600px;max-width:100%;padding:0 10px 10px 0;border-radius:20px;border:1px solid #6d6d6d;margin:auto;box-sizing:border-box;background:#6d6d6d">
            <div style="width:100%;padding:20px;border-radius:20px;background:#fff;margin:-5px 0 0 -5px;border:1px solid #6d6d6d;text-align:center;box-sizing:border-box"><br><br>
            <img src="https://i.ibb.co/RTBbv40/logo-assisttu-green-2.png">
            <h1 style="color:red;font:normal 900 2.5rem/1 system-ui;text-wrap:balance">${title}</h1>
            <h1 style="color:#6d6d6d;font:normal 500 1.25rem/1 system-ui;text-wrap:pretty">${body}</h1><br>
            <img src="https://i.ibb.co/RTBbv40/logo-assisttu-green-2.png">
            <br><br>
            <a href="${url}" rel="noopener noreferrer"><button style="color:#fff;background:#17204a;font:normal 900 1.3rem/1 system-ui;padding:12px 25px;min-width:250px;cursor:pointer;border-radius:20px;border:0;text-transform:uppercase">Click</button></a></div></div></div></div>
        </body>
    </html>`
}
export default RedTemplate;