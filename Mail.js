const nodemailer = require('nodemailer');

const sendMail = async (name, email, message) => {
  try {
    // Create a transporter with your email service and credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
    //   auth: {
    //     user: process.env.EMAIL_USER, // Replace with your email
    //     pass: process.env.EMAIL_PASSWORD, // Replace with your password or app-specific password
    //   },
    auth: {
        user: 'nitingangwani982000@gmail.com',
        pass: 'qbkpqwmzfunyzdsy'
      },
    });

    // Email to the website owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER, // Replace with your email
      to: 'nitingangwani982000+portfolio@gmail.com', // Replace with your desired recipient
      subject: 'New Contact Form Submission',
      html: `
      <div style="background-color: #f5f5f5; font-family: Arial, sans-serif; text-align: left;">
      <div style="background-color: #ffffff; padding: 20px; border-radius: 10px; text-align: left;">
        <p style="font-size: 16px;">Hi, Nitin</p>
        <p style="font-size: 16px;">You have received a new contact form submission from your portfolio website. Here are the details:</p>
        <div style="background-color: #13123e; color: white; width: fit-content; margin: 20px 0; padding: 10px; border-radius: 15px; display: inline-block;">
          <p style="font-size: 16px; margin: 0;">Name: ${name}</p>
        </div>
        <div style="background-color: #13123e; color: white; width: fit-content; margin: 20px 0; padding: 10px; border-radius: 15px; display: inline-block;">
          <p style="font-size: 16px; margin: 0;">Email: ${email}</p>
        </div>
        <div style="background-color: #13123e; color: white; width: fit-content; margin: 20px 0; padding: 10px; border-radius: 15px; display: inline-block;" >
        <p style="font-size: 16px;">Message:</p>
        <p style="font-size: 16px;">${message}</p>
        </div>
        <p style="font-size: 16px;">Please respond to this inquiry as soon as possible.</p>
      
        <p style="font-size: 16px;">Best regards,</p>
      </div>
    </div>`
      
      };

    // Email to the person who submitted the form
    const userMailOptions = {
      from: process.env.EMAIL_USER, // Replace with your email
      to: email,
      subject: 'Thank You for Contacting me',
      html: `
      <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; margin: 0; padding: 0;">
      <div style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <div style="background-color: #13123e; color: white; padding: 20px; border-radius: 10px 10px 0 0;">
          <h1 style="font-size: 24px; margin: 0;">Hello ${name},</h1>
        </div>
        <div style="padding: 20px;">
          <p style="font-size: 16px; color: #343377;">Thank you for reaching out to me through my portfolio website. I appreciate your interest and will get back to you as soon as possible.</p>
          <p style="font-size: 16px; color: #343377;">In the meantime, I'd love to hear your feedback. Please click the button below to provide your feedback:</p>
          <p style="text-align: center;">
            <a style="display: inline-block; padding: 10px 20px; background-color: #13123e; color: white; text-decoration: none; border-radius: 5px; transition: background-color 0.2s;" href="https://forms.gle/fz2i4PRBin7DWrhVA">Provide Feedback</a>
          </p>
          <p style="font-size: 16px; color: #343377;">Feel free to explore my portfolio to see some of my projects.</p>
          <p style="text-align: center;">
            <a style="display: inline-block; padding: 10px 20px; background-color: #13123e; color: white; text-decoration: none; border-radius: 5px; transition: background-color 0.2s;" href="https://your-website.com/portfolio">Explore My Portfolio</a>
          </p>
          <p style="font-size: 16px; margin-top: 20px; color: #343377; font-weight: bold;">Best regards,<br>Your Name</p>
        </div>
      </div>
    </body>`
  
  };

    // Send emails
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(userMailOptions);

    console.log('Emails sent successfully.');
  } catch (error) {
    console.error('Error sending emails:', error);
    throw new Error('An error occurred while sending the email.');
  }
};

module.exports = sendMail;
