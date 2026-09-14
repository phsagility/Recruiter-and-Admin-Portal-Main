const ADDITIONAL_LOCATION_RECIPIENTS = {
  Iloilo: 'Iloilo.Preboarding@sagility.com',
  Bohol: 'Bohol.Preboarding@Sagilityhealth.com'
};

const NEW_HIRE_REQUIREMENT_LINK = 'https://drive.google.com/file/d/1yFCAna-x9EcbQMPenUBDwXCj5eg7GKyE/view?usp=sharing';
const BIRTH_CERTIFICATE_LINK = 'https://psaserbilis.com.ph/';
const SSS_LINK = 'https://www.sss.gov.ph/become-an-sss-member/';
const TIN_LINK = 'https://drive.google.com/file/d/1QdqGqG1ZrvgkZqlPjsz59KylrYCtNn8I/view';
const PHILHEALTH_LINK = 'https://pcu.philhealth.gov.ph/';
const PAGIBIG_LINK = 'https://www.pagibigfundservices.com/virtualpagibig/OnlineMemRegMain.aspx';
const NBI_FIRST_TIME_LINK = 'https://firsttimejobseekers.nbi.gov.ph/';
const NBI_RENEWAL_LINK = 'https://clearance.nbi.gov.ph/';
const WORKDAY_LINK = 'https://sagility.wd1.myworkdayjobs.com/en-US/PHP_Bulk_Hiring_Job_Posting/login';
const UNIONBANK_GUIDE_LINK = 'https://drive.google.com/file/d/1ta9KpGjiflU3Xo62wgPGvIM3Yyn_xVCu/view?usp=drive_link';
const TEAMS_ASSISTANCE_LINK = 'https://teams.microsoft.com/meet/455947232368335?p=bI6X6MhmISHL6eBoCW';

function doGet() {
  return jsonResponse({ success: true, message: 'Sagility additional pre-employment email service is running.' });
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || '{}');
    const name = String(data.name || '').trim();
    const email = String(data.email || '').trim();
    const location = String(data.location || '').trim();
    const recruiter = String(data.recruiter || '').trim();
    const packages = Array.isArray(data.packages) ? data.packages : [];

    if (!name || !email || !location || !recruiter || !packages.length) {
      throw new Error('Name, email, location, recruiter, and at least one pre-employment package are required.');
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      throw new Error('Invalid candidate email address.');
    }

    const replyTo = location.indexOf('Iloilo') === 0
      ? ADDITIONAL_LOCATION_RECIPIENTS.Iloilo
      : location.indexOf('Bohol') === 0
        ? ADDITIONAL_LOCATION_RECIPIENTS.Bohol
        : '';
    const selectedPackages = packages.map((item) => String(item.name || '').trim()).filter(Boolean).join(', ');
    const subject = `Sagility Pre-employment Requirement_${name}_${location}`;
    const body = [
      `Hi ${name},`,
      '',
      'Welcome to Sagility!',
      '',
      'To help ensure a smooth onboarding process, please prepare and submit the following pre-employment requirements:-',
      '',
      `NEW HIRE PRE-EMPLOYMENT REQUIREMENT- ${NEW_HIRE_REQUIREMENT_LINK}`,
      '',
      'I. LIST OF REQUIREMENTS',
      '✅ Selfie Photo holding a govt. ID',
      `✅ Birth Certificate- To apply online click here: ${BIRTH_CERTIFICATE_LINK}`,
      `✅ SSS Number- To apply SSS number click here: ${SSS_LINK}`,
      `✅ TIN (Tax Identification Number)- To apply TIN click here: ${TIN_LINK}`,
      `✅ PhilHealth Number- PhilHealth Check: ${PHILHEALTH_LINK}`,
      '- First time job seekers without PHIC number, please go to Sagility Recruitment Hub to get a hard copy of the ER2 Form',
      `✅ PAG-IBIG Number- To apply PAG-IBIG number click here: ${PAGIBIG_LINK}`,
      '✅ Proof of Education',
      '✅ Proof of Employment (if applicable)',
      '✅ Vaccination Certificate or Card (if applicable)',
      '✅ Marriage Certificate- For married applicants',
      "✅ Child's Birth Certificate (if applicable)",
      '✅ NBI Clearance- How to apply NBI click the links below.',
      `⭐ First time Job Seekers, use this link to apply: ${NBI_FIRST_TIME_LINK}`,
      `⭐ For Online Renewal click here: ${NBI_RENEWAL_LINK}`,
      '',
      `You may submit your documents through this email below for our initial review and validation. Once your Workday task becomes available, you will be required to upload the same documents directly to Workday (WD log-in here): ${WORKDAY_LINK}`,
      '',
      'II. UNION BANK ONLINE ACCOUNT',
      '',
      'UnionBank Account Setup',
      `Your UnionBank account processing will be facilitated after you begin training. The reference code will be shared with you once you have started your training. Please use this guide to ensure a smooth account opening process once you have your reference number: ACCOUNT OPENING GUIDE- ${UNIONBANK_GUIDE_LINK}`,
      '',
      'Need Assistance?',
      "If you have any questions, concerns, or clarifications, please don't hesitate to reach out. You may:",
      '📧 Reply directly to this email (all requirements or other assistance):',
      `- ${ADDITIONAL_LOCATION_RECIPIENTS.Iloilo} (for Iloilo Site)`,
      `- ${ADDITIONAL_LOCATION_RECIPIENTS.Bohol} (for Bohol Site)`,
      `💬 Connect with us through Microsoft Teams from Mondays to Fridays, 1:00 PM to 10:00 PM using this link: ${TEAMS_ASSISTANCE_LINK}`,
      'Our team will be happy to assist and guide you throughout your onboarding journey.',
      '',
      'To avoid delays in your onboarding and training schedule, we encourage you to submit your requirements as soon as they become available. Early submission allows our team to review and validate your documents promptly, ensuring a smooth and hassle-free onboarding experience. We appreciate your cooperation and look forward to welcoming you to Sagility!',
      '',
      'Privacy & Security Reminder: To protect your personal information, please submit your documents only through official Sagility channels such as this email thread and your Workday account once available.',
      '',
      'Selected pre-employment package(s):',
      selectedPackages,
      '',
      'Recruiter,',
      recruiter,
      'Human Resources - Talent Acquisition'
    ].join('\n');

    const htmlLink = (label, url) => `<a href="${escapeHtml(url)}">${escapeHtml(label)}</a>`;
    const htmlBody = [
      `<p>Hi <strong>${escapeHtml(name)},</strong></p>`,
      '<p><strong>Welcome to Sagility!</strong></p>',
      '<p>To help ensure a smooth onboarding process, please prepare and submit the following pre-employment requirements:-</p>',
      `<p><strong>NEW HIRE PRE-EMPLOYMENT REQUIREMENT</strong>- ${htmlLink('link', NEW_HIRE_REQUIREMENT_LINK)}</p>`,
      '<p><strong style="color:#00a99d;">I. LIST OF REQUIREMENTS</strong></p>',
      '<p>&#9989; Selfie Photo holding a govt. ID<br>' +
        `&#9989; Birth Certificate- To apply online click here &#10132; ${htmlLink('link', BIRTH_CERTIFICATE_LINK)}<br>` +
        `&#9989; SSS Number- To apply SSS number click here &#10132; ${htmlLink('link', SSS_LINK)}<br>` +
        `&#9989; TIN (Tax Identification Number)- To apply TIN click here &#10132; ${htmlLink('link', TIN_LINK)}<br>` +
        `&#9989; PhilHealth Number- PhilHealth Check- ${htmlLink('link', PHILHEALTH_LINK)}<br>` +
        '<em>-First time job seekers without PHIC number, please go to Sagility Recruitment Hub to get a hard copy of the ER2 Form</em><br>' +
        `&#9989; PAG-IBIG Number- To apply PAG-IBIG number click here &#10132; ${htmlLink('link', PAGIBIG_LINK)}<br>` +
        '&#9989; Proof of Education<br>' +
        '&#9989; Proof of Employment (if applicable)<br>' +
        '&#9989; Vaccination Certificate or Card (if applicable)<br>' +
        '&#9989; Marriage Certificate- For married applicants<br>' +
        "&#9989; Child's Birth Certificate (if applicable)<br>" +
        '&#9989; NBI Clearance- How to apply NBI click link below.<br>' +
        `&#11088; First time Job Seekers, use this link to apply &#10132; ${htmlLink('link', NBI_FIRST_TIME_LINK)}<br>` +
        `&#11088; For Online Renewal click here &#10132; ${htmlLink('link', NBI_RENEWAL_LINK)}</p>`,
      `<p>You may submit your documents through this email thread for our initial review and validation. Once your Workday task becomes available, you will be required to upload the same documents directly to Workday (${htmlLink('WD log-in here', WORKDAY_LINK)}).</p>`,
      '<p><strong style="color:#00a99d;">II. UNION BANK ONLINE ACCOUNT</strong></p>',
      '<p><strong>UnionBank Account Setup</strong><br>' +
        `Your UnionBank account processing will be facilitated after you begin training. The reference code will be shared with you once you have started your training. Please use this guide to ensure a smooth account opening process once you have your reference number - <strong>ACCOUNT OPENING GUIDE- ${htmlLink('LINK', UNIONBANK_GUIDE_LINK)}</strong></p>`,
      '<p><strong>Need Assistance?</strong><br>' +
        "If you have any questions, concerns, or clarifications, please don't hesitate to reach out. You may:<br>" +
        '&#128231; Reply directly to this email below (all requirements or assistance)<br>' +
        `- ${htmlLink(ADDITIONAL_LOCATION_RECIPIENTS.Iloilo, `mailto:${ADDITIONAL_LOCATION_RECIPIENTS.Iloilo}`)} (for Iloilo Site)<br>` +
        `- ${htmlLink(ADDITIONAL_LOCATION_RECIPIENTS.Bohol, `mailto:${ADDITIONAL_LOCATION_RECIPIENTS.Bohol}`)} (for Bohol Site)<br>` +
        `&#128172; Connect with us through Microsoft Teams from Mondays to Fridays, 1:00 PM to 10:00 PM using this - ${htmlLink('link', TEAMS_ASSISTANCE_LINK)}<br>` +
        'Our team will be happy to assist and guide you throughout your onboarding journey.</p>',
      '<p><strong><em>To avoid delays in your onboarding and training schedule, we encourage you to submit your requirements as soon as they become available. Early submission allows our team to review and validate your documents promptly, ensuring a smooth and hassle-free onboarding experience. We appreciate your cooperation and look forward to welcoming you to Sagility!</em></strong></p>',
      '<p><em>Privacy &amp; Security Reminder: To protect your personal information, please submit your documents only through official Sagility channels such as this email thread and your Workday account once available.</em></p>',
      `<p><strong>Recruiter,</strong><br><strong>${escapeHtml(recruiter)}</strong><br><strong>Human Resources - Talent Acquisition</strong></p>`
    ].join('');

    const emailOptions = { to: email, subject, body, htmlBody };
    if (replyTo) emailOptions.replyTo = replyTo;
    MailApp.sendEmail(emailOptions);
    return jsonResponse({ success: true, message: 'Additional pre-employment email sent successfully.' });
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
