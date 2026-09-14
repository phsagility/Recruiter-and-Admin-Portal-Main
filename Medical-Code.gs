const STATLAB_MAP_URL = 'https://www.bing.com/maps?osid=c798ff09-0d57-4970-83e7-20f17b0cffb5&cp=10.698373%7E122.565794&lvl=17.0&v=2&sV=2&form=S00027';

function doGet() {
  return jsonResponse({ success: true, message: 'Sagility medical email service is running.' });
}

function doPost(e) {
  try {
    const requestBody = e.postData?.contents || '';
    const data = requestBody
      ? JSON.parse(requestBody)
      : Object.fromEntries(Object.entries(e.parameter || {}).map(([key, value]) => [key, Array.isArray(value) ? value[0] : value]));
    const email = String(data.email || '').trim();
    const name = String(data.name || '').trim();
    const contactNumber = String(data.contactNumber || '').trim();
    const location = String(data.location || '').trim();
    const account = String(data.account || '').trim();
    const accountSubprocess = String(data.accountSubprocess || '').trim();
    const startDate = String(data.startDate || '').trim();
    const dateOfIssuance = String(data.dateOfIssuance || '').trim();
    const medicalExamDate = String(data.medicalExamDate || '').trim();
    const role = String(data.role || '').trim();
    const requestedPackage = String(data.requestedPackage || '').trim();
    const recruiter = String(data.recruiter || '').trim();
    const pdfBase64 = String(data.pdfBase64 || '').trim();
    const filename = String(data.filename || `STATLAB_${name || 'Candidate'}.pdf`).trim();
    const noteTitle = String(data.noteTitle || '').trim();
    const noteSubject = String(data.noteSubject || '').trim();
    const noteLocation = String(data.noteLocation || '').trim();
    const noteLink = String(data.noteLink || '').trim();

    if (!email || !name || !contactNumber || !location || !account || !accountSubprocess || !dateOfIssuance || !medicalExamDate || !role || !requestedPackage || !recruiter || !pdfBase64) {
      throw new Error('Name, email, contact number, location, account, account subprocess, date of issuance, medical examination date, role, requested package, recruiter, and filled medical PDF are required.');
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      throw new Error('Invalid candidate email address.');
    }

    const hospitalTitle = noteTitle || 'Statlab Medical and Diagnostic Center';
    const locationLabel = String(location || noteSubject || '').trim();
    const normalizedLocationLabel = locationLabel.replace(/\s+City$/i, '');
    const hospitalSubject = hospitalTitle || normalizedLocationLabel;
    const hospitalLocation = noteLocation || hospitalTitle;
    const mapUrl = noteLink || STATLAB_MAP_URL;
    const candidateLocation = location.toLowerCase();
    const replyTo = candidateLocation.includes('bohol')
      ? 'Bohol.Preboarding@Sagilityhealth.com'
      : candidateLocation.includes('iloilo')
        ? 'Iloilo.Preboarding@sagility.com'
        : '';
    const contactEmail = replyTo || 'Iloilo.Preboarding@Sagilityhealth.com';
    const subject = `Sagility Medical Forms_${name}_${location || hospitalTitle}`;

    const attachment = Utilities.newBlob(
      Utilities.base64Decode(pdfBase64),
      'application/pdf',
      filename
    );

    const body = [
      `Hi ${name},`,
      '',
      'PRE-EMPLOYMENT MEDICAL FORM',
      '',
      'We are pleased to inform you that your medical examination is scheduled as part of our standard procedure. To facilitate this process, kindly follow the instructions outlined below:',
      '',
      '1. Medical Slip: Attached to this email, you will find your personalized medical slip. This slip contains essential details required for your medical assessment.',
      '',
      'Medical Requirements:',
      '- Printed medical slip',
      '- 1 Valid Government ID',
      '',
      `2. ${hospitalSubject}: Your medical assessment is to be conducted at ${hospitalTitle}. Please present your printed medical slip and 1 Valid Government ID to the hospital staff upon arrival.`,
      `Location: ${hospitalLocation}`,
      '',
      '3. Validity of Medical Slip: It is crucial to note that your medical slip is valid until the Date of Examination specified on the form. Please ensure that you schedule your visit and complete the medical before this date to ensure the accuracy and timeliness of the results.',
      '',
      'If you have any inquiries or require further assistance, please do not hesitate to contact your Recruiter.',
      '',
      `We wish you a successful and productive visit to ${hospitalTitle}. We look forward to receiving your completed medical assessment.`,
      '',
      `For concerns or clarifications please email ${contactEmail}.`,
      '',
      'This is an auto-generated email. Please do not reply.',
      '',
      'Recruiter,',
      recruiter,
      'Human Resources - Talent Acquisition'
    ].join('\n');

    const htmlBody = [
      `<p><strong>Hi ${escapeHtml(name)},</strong></p>`,
      '<p><strong style="color:#008000;">PRE-EMPLOYMENT MEDICAL FORM</strong></p>',
      '<p>We are pleased to inform you that your medical examination is scheduled as part of our standard procedure. To facilitate this process, kindly follow the instructions outlined below:</p>',
      '<p><strong>1. Medical Slip:</strong> Attached to this email, you will find your personalized medical slip. This slip contains essential details required for your medical assessment.</p>',
      '<p><strong>Medical Requirements:</strong><br>- Printed medical slip<br>- 1 Valid Government ID</p>',
      `<p><strong>2. ${escapeHtml(hospitalSubject)}:</strong> Your medical assessment is to be conducted at ${escapeHtml(hospitalTitle)}. Please present your printed medical slip and 1 Valid Government ID to the hospital staff upon arrival.</p>`,
      `<p><strong>Location:</strong> ${escapeHtml(hospitalLocation)}${mapUrl ? ` <a href="${mapUrl}">[View Map]</a>` : ''}</p>`,
      '<p><strong>3. Validity of Medical Slip:</strong> It is crucial to note that your medical slip is valid until the Date of Examination specified on the form. Please ensure that you schedule your visit and complete the medical before this date to ensure the accuracy and timeliness of the results.</p>',
      '<p>If you have any inquiries or require further assistance, please do not hesitate to contact your Recruiter.</p>',
      `<p>We wish you a successful and productive visit to ${escapeHtml(hospitalTitle)}. We look forward to receiving your completed medical assessment.</p>`,
      `<p>For concerns or clarifications please email <a href="mailto:${contactEmail}">${contactEmail}</a>.</p>`,
      '<p><strong style="color:#c00000;">This is an auto-generated email. Please do not reply.</strong></p>',
      '<p><strong>Recruiter,</strong><br><strong>' + escapeHtml(recruiter) + '</strong><br><strong>Human Resources - Talent Acquisition</strong></p>'
    ].join('');

    const emailOptions = { to: email, subject, body, htmlBody, attachments: [attachment] };
    if (replyTo) emailOptions.replyTo = replyTo;
    MailApp.sendEmail(emailOptions);
    return jsonResponse({ success: true, message: 'Medical email sent successfully.' });
  } catch (error) {
    return jsonResponse({ success: false, message: error.message || String(error) });
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
