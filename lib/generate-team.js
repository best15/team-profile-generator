
function generateTeam(empDetails) {
    console.log(empDetails);
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
    </head>
    <body>
        ${empDetails}
    </body>
    </html>`,
        { parser: "html" }

}

module.exports = generateTeam;