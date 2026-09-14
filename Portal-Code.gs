const LOCATION_RECIPIENTS = {
  Iloilo: 'Iloilo.Preboarding@sagility.com',
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
    const subject = `Sagility Pre-Employment Forms_${name}_${location}`;
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
      'ILOILO: Iloilo.Preboarding@sagility.com',
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
      packageNames: packages.map((item) => String(item.name || '').trim()),
      remainingQuota
    }));
    if (remainingQuota < 1) {
      throw new Error('Daily email quota is exhausted for the account running this Apps Script.');
    }

    MailApp.sendEmail({
      to: recipients,
      replyTo,
      name: 'sagilityeforms',
      subject,
      body,
      htmlBody
    });
    console.log(JSON.stringify({ type: 'pre-employment-email-sent', recipient: recipients, subject }));
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
