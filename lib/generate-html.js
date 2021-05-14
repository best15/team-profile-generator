const prettier = require('prettier');

const generateTeam = require('./generate-team-card');

function generateHtml(manager, engineers, interns) {

    return prettier.format(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
            <title>My Team</title>
        </head>
        <body>
            <header class="mb-5">
                <nav class="navbar  bg-secondary ">
                    <div class="container-fluid  justify-content-center">
                        <h1 class="mb-3 text-center text-light">My Team</h1>
                    </div>
                </nav>
            </header>
            <main class="container-fluid">
                <section class="row justify-content-center ">
                ${generateTeam(manager)}
                ${generateTeam(engineers)}
                ${generateTeam(interns)}
                
                </section>
            </main>
        </body>
        </html>`,
        { parser: "html", }
    );
}


module.exports = generateHtml;