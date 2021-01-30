export const regEmail = (link: string) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body
        style="
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
        color: #fff;
        background-color: #232323;
    
        "
    >
        <main style="
        padding: 30px;
        ">
            <div class="wrapper">
                <p style="width: 100%; text-align: center; margin: 0; padding-top: 20px;">
                    <img style="height: 70px;" src="https://i.imgur.com/FVuVSBC.png" alt="logo" style="height: 70px;"></br>
                </p>
                <h1 style="text-align: center;">Вітаємо у сім'ї Razom!</h1></br>
                <a style="
                display: block;
                text-decoration: none;
                background-color: #4CAF50;
                color: #fff;
                font-size: 21px;
                font-weight: bold;
                text-align: center;
                padding: 4px;
                border-radius: 8px;
                " href="${link}">Натисніть Тут щоб підтвердити реєстрацію</a> </br>
                <p>Якщо це не ви, то просто видаліть даний лист!</p> </br>
            </div>
        </main>
    </body>
    </html>
    `
}