
export const bodyEmail = (user,jwt,host) => {

    return `<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f2f2f2;
                color: #333;
            }
            .container {
                width: 80%;
                margin: 20px auto;
                background-color: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
            }
            h1 {
                text-align: center;
            }
            p {
                line-height: 1.6;
            }
            .btn {
                background-color: #007bff;
                color: #fff;
                border: none;
                padding: 10px 20px;
                cursor: pointer;
                border-radius: 5px;
                text-decoration: none;
                display: inline-block;
            }
            .btn:hover {
                background-color: #0056b3;
            }
            .token {
                background-color: #eee;
                padding: 10px;
                border-radius: 5px;
                margin-bottom: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Recover password</h1>
            <p>Hey ${user}, </p>
            <p>You have requested to reset your password. Use the following token to create a new password:</p>
            <div class="token">${host}/recover?token=${jwt}</div>
            <p>If you have not requested this change, please ignore this message.</p>
            <p>Thanks,<br>Support team</p>
        </div>
    </body>
    </html>`

}


