import express from 'express';
import pb from '../utils/pocketbaseClient.js';
import logger from '../utils/logger.js';

const router = express.Router();

router.post('/submit', async (req, res) => {
  const { fullName, companyName, industry, email, phone, message, hearAboutUs } = req.body;

  // Validate required fields
  if (!fullName) {
    return res.status(400).json({ error: 'fullName is required' });
  }
  if (!email) {
    return res.status(400).json({ error: 'email is required' });
  }
  if (!message) {
    return res.status(400).json({ error: 'message is required' });
  }

  // Create contact record in PocketBase
  const record = await pb.collection('contacts').create({
    fullName,
    companyName: companyName || '',
    industry: industry || '',
    email,
    phone: phone || '',
    message,
    hearAboutUs: hearAboutUs || '',
  });

  logger.info(`Contact submission created: ${record.id}`);

  // Send email using PocketBase mailer
  await pb.sendSuperuserEmail({
    template: 'contact_form_submission',
    subject: `New Contact Form Submission from ${fullName}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Company:</strong> ${companyName || 'Not provided'}</p>
      <p><strong>Industry:</strong> ${industry || 'Not provided'}</p>
      <p><strong>How they heard about us:</strong> ${hearAboutUs || 'Not provided'}</p>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><strong>Reply to:</strong> ${email}</p>
    `,
  }, 'omer.bashir@saizor.com');

  logger.info(`Email sent for contact submission: ${record.id}`);

  res.status(201).json({
    message: 'Contact form submitted successfully',
    record: {
      id: record.id,
      fullName: record.fullName,
      email: record.email,
      createdAt: record.created,
    },
  });
});

export default router;