const LOCATION_RECIPIENTS = {
  Iloilo: 'Iloilo.Preboarding@Sagilityhealth.com',
  Bohol: 'Bohol.Preboarding@Sagilityhealth.com'
};

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ success: true, message: 'Sagility recruiter email service is running.' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || '{}');
    const pdfBase64 = String(data.pdfBase64 || '').trim();

    if (pdfBase64) {
      const email = String(data.email || '').trim();
      const name = String(data.name || '').trim();
      const safeName = name.replace(/[^\w\s.-]/g, '').replace(/\s+/g, ' ').trim() || 'Applicant';
      const filename = String(data.filename || 'Sagility eSign Forms_' + safeName + '.pdf').trim();

      if (!email || !name || !pdfBase64) {
        throw new Error('Missing email, name, or PDF data.');
      }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        throw new Error('Invalid email address.');
      }

      const attachment = Utilities.newBlob(
        Utilities.base64Decode(pdfBase64),
        'application/pdf',
        filename
      );
      const body = [
        `Hi ${name},`,
        '',
        'Kindly review the attached PDF file containing your eSign forms.',
        '',
        'Please forward this email to the appropriate Sagility email address below:',
        'ILOILO: Iloilo.Preboarding@Sagilityhealth.com',
        'BOHOL: Bohol.Preboarding@Sagilityhealth.com',
        '',
        'Please note that this is an automated email. Do not reply directly to this message.',
        '',
        'Thank you for your cooperation.',
        '',
        'Sagility Recruitment Team'
      ].join('\n');
      const htmlBody = [
        `<p><strong>Hi ${escapeHtml(name)},</strong></p>`,
        '<p>Kindly review the attached PDF file containing your eSign forms.</p>',
        '<p>Please forward this email to the appropriate Sagility email address below:<br>' +
          '<strong>ILOILO:</strong> <a href="mailto:Iloilo.Preboarding@Sagilityhealth.com">Iloilo.Preboarding@Sagilityhealth.com</a><br>' +
          '<strong>BOHOL:</strong> <a href="mailto:Bohol.Preboarding@Sagilityhealth.com">Bohol.Preboarding@Sagilityhealth.com</a></p>',
        '<p><strong style="color:#c00000;">Please note that this is an automated email. Do not reply directly to this message.</strong></p>',
        '<p>Thank you for your cooperation.</p>',
        '<p>Sagility Recruitment Team</p>'
      ].join('');
      const subjectFilename = filename.replace(/\.pdf$/i, '');

      MailApp.sendEmail({
        to: email,
        subject: 'Sagility E sign Forms_' + safeName + '_' + subjectFilename,
        body,
        htmlBody,
        attachments: [attachment]
      });

      return jsonResponse({ success: true, message: 'Email sent successfully.' });
    }

    const name = String(data.name || '').trim();
    const email = String(data.email || '').trim();
    const contactNumber = String(data.contactNumber || '').trim();
    const birthday = String(data.birthday || '').trim();
    const age = String(data.age || '').trim();
    const address = String(data.address || '').trim();
    const location = String(data.location || '').trim();
    const account = String(data.account || '').trim();
    const startDate = String(data.startDate || '').trim();
    const accountSubprocess = String(data.accountSubprocess || '').trim();
    const medicalExamDate = String(data.medicalExamDate || '').trim();
    const role = String(data.role || '').trim();
    const requestedPackage = String(data.requestedPackage || '').trim();
    const recruiter = String(data.recruiter || '').trim();
    const packages = Array.isArray(data.packages) ? data.packages : [];

    if (!name || !email || !location || !account || !accountSubprocess || !recruiter || !packages.length) {
      throw new Error('Name, email, location, account, account subprocess, recruiter, and package are required.');
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      throw new Error('Invalid candidate email address.');
    }

    const recipients = email;
    const replyTo = location.indexOf('Iloilo') === 0
      ? LOCATION_RECIPIENTS.Iloilo
      : location.indexOf('Bohol') === 0
        ? LOCATION_RECIPIENTS.Bohol
        : '';
    const links = packages.map((item, index) => `${index + 1}. ${item.name}: ${item.link}`).join('\n');
    const htmlLinks = packages.map((item, index) => `<p>${index + 1}. <strong>${escapeHtml(item.name)}:</strong> <a href="${escapeHtml(item.link)}">Click Here</a></p>`).join('');
    const subject = `Sagility Pre-Employment Forms – ${name}_${location}`;
    const body = [
      `Hi ${name},`,
      '',
      'PRE-EMPLOYMENT FORMS',
      '',
      'Please click the link below to review, complete, and sign your',
      'Pre-Employment Forms.',
      '',
      links,
      '',
      'Please forward the signed pdf file to email below:',
      '',
      'ILOILO: Iloilo.Preboarding@Sagilityhealth.com',
      'BOHOL: Bohol.Preboarding@Sagilityhealth.com',
      '',
      'Best regards,',
      '',
      `Sagility Recruitment ${location}`,
      recruiter
    ].join('\n');
    const htmlBody = [
      `<p><strong>Hi ${escapeHtml(name)},</strong></p>`,
      '<p><strong style="color:#008000;">PRE-EMPLOYMENT FORMS</strong></p>',
      '<p>Please click the link below to review, complete, and sign your<br>Pre-Employment Forms.</p>',
      htmlLinks,
      '<p>Please forward the signed pdf file to email below:</p>',
      `<p><strong>ILOILO:</strong> <a href="mailto:${LOCATION_RECIPIENTS.Iloilo}">${LOCATION_RECIPIENTS.Iloilo}</a><br><strong>BOHOL:</strong> <a href="mailto:${LOCATION_RECIPIENTS.Bohol}">${LOCATION_RECIPIENTS.Bohol}</a></p>`,
      '<p><strong>Best regards,</strong><br>',
      `<strong>Sagility Recruitment ${escapeHtml(location)}</strong><br>`,
      `<strong>${escapeHtml(recruiter)}</strong></p>`
    ].join('');

    const remainingQuota = MailApp.getRemainingDailyQuota();
    console.log(JSON.stringify({
      type: 'pre-employment-email',
      recipient: recipients,
      packageCount: packages.length,
      remainingQuota
    }));
    if (remainingQuota < 1) {
      throw new Error('Daily email quota is exhausted for the account running this Apps Script.');
    }

    MailApp.sendEmail({ to: recipients, replyTo, subject, body, htmlBody });
    return jsonResponse({ success: true, message: 'Email sent successfully.' });
  } catch (error) {
    return jsonResponse({ success: false, message: error.message || String(error) });
  }
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
