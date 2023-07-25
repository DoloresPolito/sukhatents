import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { name, email, message, date,
  place,
  phone,
  quantity,
} = req.body;


  const SMTP_HOST = "smtp.gmail.com";
  const SMTP_PORT = 465;
  const SMTP_USER = "sukhatents@gmail.com";
  const SMTP_PASS = "vqoxujdbiliwcdju";

  try {
    // Configurar el transporte de nodemailer con tus credenciales SMTP
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Configurar el mensaje de correo
    const mailOptions = {
      from: email,
      to: "sukhatents@gmail.com", // Cambia esto al correo del destinatario
      subject: `Mensaje de ${name}`,
      text: `
      Hola Sukha Tents.

      Tenes una consulta de ${name}, numero de telefono: ${phone}, email: ${email}.
      Fecha del evento: ${date}.
      Lugar del evento: ${place}.
      Cantidad de personas: ${quantity}.

      ${message}.
      
      
      Saludos.`
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return res.status(200).end();
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
}
