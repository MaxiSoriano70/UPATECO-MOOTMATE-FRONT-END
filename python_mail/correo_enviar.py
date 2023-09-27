from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from smtplib import SMTP

# Configurar cuentas
remitente = "maximiliano.70.32.10.soriano@gmail.com"  # Correo de la cuenta que envía el mail
destinatario = "castillathiago@gmail.com"  # Correo al que mandar el mail

# Configurar mensaje
mensaje_correo = MIMEMultipart("alternative")
mensaje_correo["From"] = remitente
mensaje_correo["To"] = destinatario
mensaje_correo["Subject"] = "Carnet de"

saludo = "( . ) ( . )"
html = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="max-width: 900px;">
    <header style="width:100%">
        <img style="width:100%" src="https://pbs.twimg.com/media/F7EMi2RXAAAV7Xl?format=png&name=900x900" alt="">
    </header>
    <main style="width:100%;">
        <a href="#"><img src="https://pbs.twimg.com/media/F7EQUiYXMAA93Qq?format=png&name=900x900" alt=""></a>
    </main>
    <footer style="width:100%">
        <img style="width:100%" src="https://pbs.twimg.com/media/F7EM8gMWUAAxF41?format=png&name=900x900" alt="">
    </footer>
</body>
</html>
"""

texto_plano = saludo
mensaje_plano = MIMEText(texto_plano, "plain")
mensaje_html = MIMEText(html, "html")

mensaje_correo.attach(mensaje_plano)
mensaje_correo.attach(mensaje_html)

# Conección
servidor = SMTP("smtp.gmail.com", 587)
servidor.ehlo()
servidor.starttls()

# Inicio de sesión
servidor.login(remitente, "vbwgzkcezkqwhtkb")  # Se agrega el usuario de mail y la contraseña generada

# Enviar mail
servidor.sendmail(remitente, destinatario, mensaje_correo.as_string())

# Terminar Conección
servidor.quit()
print("Correo enviado")
