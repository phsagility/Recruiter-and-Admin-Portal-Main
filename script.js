const packageGrid = document.querySelector('.categories-wrapper');
const accountSubprocesses = {
  ACCREDO: ['PHL_CIGNA ACCREDO CORE QC', 'PHL_CIGNA ACCREDO CORE ILO', 'PHL_CIGNA ACCREDO ILO'],
  AETNA: ['PHL_AETNA CLAIMS LIFELINE', 'AETNA CLAIMS LIFELINE ALABANG', 'AETNA PHP DENTAL', 'PHL_AETNA DENTAL', 'AETNA DENTAL ALABANG', 'PHL_AETNA DENTAL ALABANG', 'AETNA EOC', 'AETNA GLOBAL BENEFITS OVERPAYMENT NON-VOICE', 'AETNA GLOBAL BENEFITS OVERPAYMENT VOICE', 'GLOBAL BENEFITS', 'AETNA GLOBAL BENEFITS', 'PHL_AETNA MEDICARE ETECH', 'PHL_AETNA MEDICARE MEMBER', 'PHL_AETNA MEDICARE MEMBER ILOILO', 'AETNA PHP PROV COB', 'AETNA PHP PROV HMO', 'PHL_AETNA PROV TRAD', 'PHL_AETNA PROVIDER TRAD', 'PHL_AETNA PROVIDER ALABANG', 'AETNA PROVIDER DCAT HMO', 'AETNA PROVIDER DCAT TRAD', 'AETNA PROVIDER', 'AETNA PHP ALABANG DCAT TRAD', 'AETNA PHP PROV HMO ALABANG', 'PHL_AETNA PROV TRAD ALABANG', 'AETNA PROVIDER DCAT HMO ALABANG', 'Aetna Provider Alabang', 'AETNA DCAT HMO ALB', 'AETNA DCAT TRAD ALB', 'AETNA DCAT HMO BT', 'AETNA DCAT HRP BT', 'AETNA DCAT TRAD BT', 'AETNA PHP PROV HMO ILOILO', 'AETNA PHP PROV TRAD ILOILO', 'PHL_AETNA PROVIDER ILOILO', 'AETNA PHP PROV MEDICARE', 'PHL_Aetna Provider Medicare', 'PHL_AETNA PROVIDER MEDICARE ALABANG', 'PHL_AETNA PROVIDER MEDICARE ILO', 'AETNA PHP SG KANA', 'AETNA PHP SG TRAD', 'AETNA SMALL GROUP', 'PHL_AETNA SG TRAD ALABANG', 'AETNA STUDENT HEALTH', 'AETNA STUDENT HEALTH ALB', 'AETNA PHP TECH SUPPORT', 'PHL_AETNA TECH SUPPORT ALABANG', 'PHL_AETNA VOLUNTARY ALABANG', 'PHL_AETNA VOLUNTARY', 'Aetna Provider Coordination of Benefits', 'PHL_Aetna Member Nonpar BT', 'PHL_AETNA MEDSUPP BT QC ZETA', 'PHL_Aetna MedSupp ILO', 'PHL_Aetna Integrated Service Model', 'PHL_Aetna Provider Medicare Innercore Bldg Bohol'],
  AKUMIN: ['PHL_Akumin Scheduling Support Bohol', 'PHL_INBOUND SCHEDULING', 'PHL_SCHEDULING SUPPORT', 'PHL_Scheduling Support MNL', 'PHL_SCHEDULING PATIENT'],
  APRIA: ['PHL_APRIA PPMC OB', 'PHL_APRIA PPMC IB', 'APRIA PPMC', 'PHL_APRIA SLEEP CS', 'PHL_APRIA SLEEP EQ', 'PHL_APRIA- SLP EQ -BYRAM', 'PHL_APRIA DIRECT / KAISER', 'PHL_APRIA- SLP EQ'],
  APRICUS: ['PHL_APRICUS_ILO', 'PHL_APRICUS_MNL'],
  BCI: ['PHL_BLUE CROSS OF IDAHO', 'PHL_BCI G&A Clinical Review'],
  BROADPATH: ['PHL_HELP AT HOME ILOILO MEMBER SUPPORT', 'PHL_HELP AT HOME MANILA MEMBER SUPPORT', 'PHL_BGSI Help At Home Bilingual', 'PHL_BroadPath Help At Home Bilingual', 'PHL_BGSI Gravie Provider Support ILO', 'PHL_BP Cigna_MedicareAdvantagePSRPH', 'Gravie - ICHRA'],
  BYRAM: ['PHL_Byram OIP Iloilo'],
  CENTERWELL: ['CENTERWELL PHARMACY'],
  CIGNA: ['CIGNA BEHAVIORAL HEALTH QC', 'CIGNA PAYERS SOLUTIONS', 'CIGNA COMMON INTAKE', 'CIGNA BEHAVIORAL HEALTH', 'CIGNA COMMON INTAKE ALABANG', 'CIGNA COMMON INTAKE ILO', 'CIGNA CUSTOMER MEDICAL', 'CIGNA CUSTOMER DENTAL / Cigna IFP', 'CIGNA CUSTOMER DENTAL QC', 'PHL_CIGNA CUSTOMER DENTAL', 'PHL_CIGNA CUSTOMER ONEGUIDE ALA', 'Cigna Dental Alabang', 'PHL_CIGNA DENTAL EW', 'PHL_CIGNA ESI ILOILO', 'PHL_CIGNA ESI ILOILO (Centene D, Commercial, Pharmacy Helpdesk)', 'PHL_CIGNA ILOILO FACETS', 'Cigna Facets Provider ILO', 'CIGNA INDIGO EU ALABANG', 'PHL_CIGNA INDIGO GIPMI ALABANG', 'PHL_CIGNA HEALTH SPRING PROVIDER', 'PHL_CIGNA HEALTHSPRING PROVIDER ILO', 'PHL_CIGNA HEALTHSPRING PROVIDER', 'PHL_CIGNA HEALTH SPRING CUSTOMER', 'CIGNA HEALTH SPRING DENTAL', 'CIGNA HEALTH SPRING PROVIDER QC', 'Cigna Healthspring Provider ILO', 'PHL_CIGNA MEDICAL CASE MGT CHIL', 'CIGNA MEDICAL CASE MGT CPAN', 'CIGNA MEDICAL CASE MGT IPCM', 'PHL_CIGNA MEDICAL CASE MGT PNA', 'CIGNA MEDICAL CASE MGT PREMIUM CM', 'PHL_CIGNA INDIGO EU ALABANG', 'CIGNA – PROJECT STETHOSCOPE', 'PHL_CIGNA PROVIDER GLOBAL', 'PHL_CIGNA PROVIDER GLOBAL CUSTOMER', 'Cigna Provider (Global)', 'PHL_CIGNA SERVICE OPS ALABANG', 'PHL_CIGNA SERVICE OPERATIONS ALABANG', 'CIGNA SERVICE OPS EASTWOOD', 'PHL_CIGNA SERVICE OPS EASTWOOD AZ MEDICARE', 'PHL_CIGNA SERVICE OPS EASTWOOD AZ PPACA', 'PHL_CIGNA SERVICE OPS EASTWOOD HCP PORTAL', 'CIGNA SERVICE OPS EASTWOOD PASSWORD RESET', 'PHL_Cigna Service Operations Eastwood', 'PHL_CLICK 2 CHAT - ONE GUIDE', 'MEDICAL PROVIDER', 'PHL_CIGNA SERVICE OPERATIONS ILOILO', 'CIGNA THN AL ADHOC', 'PHL_CIGNA THN AL BEHAVIORAL HEALTH', 'PHL_CIGNA THN EW BEHAVIORAL HEALTH', 'CIGNA THN EW ADHOC', 'CIGNA THN EW BEHAVIORAL HEALTH', 'CIGNA THN RMC', 'CLICK 2 CHAT - One Guide', 'CLICK 2 CHAT - Premium', 'PHL_CIGNA ILOILO ONE GUIDE CUSTOMER', 'Cigna Iloilo Proclaim Customer', 'One Guide Proclaim', 'CIGNA COMMON INTAKE FAX TRIAGE', 'Cigna Provider Bronze ILO SP', 'Centene Med D', 'PHL_PASSWORD RESET', 'Cigna PPACA', 'Cigna Multilingual', 'PHL_CIGNA MDLIVE ILO', 'Cigna Provider Bronze', 'PHL_Cigna Provider Bronze ALA', 'PHL_Cigna EviCore Pre-Auth Intake', 'MAPD- PHL_CIGNA HEALTHSPRING CUSTOMER', 'PHL_CIGNA MAPD CUSTOMER', 'PHL_Cigna PBM Centene Med D', 'PHL_Cigna PBM Pharmacy Helpdesk', 'Cigna ICSA', 'Cigna Indigo GIH', 'PHL_Cigna SGB QC/ALA', 'CIGNA CSB', 'Cigna CSB ALA', 'PHL_CIGNA MEDICAL CASE MGT PA', 'PHL_CIGNA GLOBAL CARIBBEAN', 'PHL_CIGNA GLOBAL IO CARIBBEAN 2', 'CIGNA MEDICAL CASE MGT ENGAGEMENT', 'PHL_Cigna MDLive BT', 'Cigna Customer_Medical QC', 'PHL_CIGNA DENTAL', 'PHL_Cigna CGHB Global QC', 'PHL_CIGNA Medical Case Management EHE Coaching'],
  COHERE: ['PHL_INTAKE', 'COHERE INTAKE', 'PHL_COHERE CLINICIANS'],
  CONVEY: ['PHL_Convey HealthCalls_ILO', 'PHL_HCSC Customer ALA Welcome', 'PHL_Convey HealthCalls_Bohol'],
  ENABLECOMP: ['PHL_Workers Compensation'],
  ENLYTE: ['PHL_CLINICAL CARE 24 ( USRN)', 'ENLYTE IME', 'Enlyte IME QA Coordinator_MNL', 'Enlyte IME QA Coordinator_ILO', 'Enlyte IME QA Specialist_MNL', 'Enlyte IME QA Specialist_ILO', 'Enlyte IME QA Coordinator_MNL_PHRN', 'Enlyte IME QA Coordinator_ILO_PHRN', 'Enlyte IME QA Specialist_MNL_PHRN', 'Enlyte IME QA Specialist_ILO_PHRN', 'ENLYTE IME UNITY', 'Apricus Intake Phone', 'Apricus Ops Support', 'Apricus Post Scheduling -- Delivery confirm', 'Apricus Post Scheduling -- Repricing Bills', 'Apricus Post Scheduling -- Unmatched Bills', 'Apricus Post Scheduling -- Retro Auth Bills', 'Apricus Post Scheduling -- Service Auth Bills', 'Apricus Prescheduling - Diagnostics', 'Apricus Specialty Scheduling - Diagnostic', 'Apricus Specialty Scheduling - Home Health', 'Apricus Specialty Scheduling - Physical Medicine', 'Apricus Specialty Scheduling - Network Scheduling', 'Apricus Standard Scheduling - DME', 'Apricus Standard Scheduling - STIM', 'Enlyte IME Cadence', 'PHL_Apricus_MNL', 'PHL_CARE COORDINATOR', 'PHL_Care Coordinator - MNL'],
  FLATIRON: ['PHL_Clinical Abstraction'],
  'HUMAN RESOURCES': ['Human Resources Business Partner (HRBP)'],
  HUMANA: ['PHL_HUMANA ALABANG CIT', 'HUMANA PHP AEC', 'HUMANA PHP CIT MEDICAID FAX', 'HUMANA PHP CIT MEDICAID PHONES', 'PHL_HUMANA CIT', 'HUMANA PHP PPI AVAILITY', 'HUMANA PHP PPI CORR ESCALATION', 'HUMANA PHP PPI CORRESPONDENCE', 'HUMANA PHP PPI EMAIL SUPPORT', 'HUMANA PHP PPI LIVE LINE', 'HUMANA PHP PPI PREPAY', 'GBO HD ALABANG', 'HUMANA PHP MSP Commercial COB', 'HUMANA PHP MSP HUMANAONE RX', 'HUMANA PHP MSP MEDICARE GROUP', 'Eden Medicare Secondary Payor', 'PHL_HUMANA PR', 'HUMANA PHP PR BOP', 'PCC ALABANG ML1 ELEGBENENQ- HUMANA', 'PCC ALABANG ML2 CLAIM ENQ- - HUMANA', 'PHL_HUMANA CIT FAX', 'HUMANA CIT BOP ILO', 'PHL_HUMANA CIT VOICE ILO', 'PHL_HUMANA GBO CB QC', 'HUMANA PHP GBO CB QC 11', 'HUMANA PHP GBO HD QC', 'HUMANA PCC DENTAL PROVIDER ILOILO', 'GROUP MEDICARE', 'PCC ILOILO ML2 CLAIM ENQ- - HUMANA', 'HUMANA PCC POST SERVICE ILOILO', 'PHL_ML1 ELEGBENENQ', 'PCC ILOILO ML1 ELEGBENENQ- HUMANA', 'PHL_HUMANA PCC COMPBEN ALABANG', 'HUMANA PCC DENTAL PROVIDER', 'PHL_HUMANA PCC DENTAL PROVIDER ILOILO', 'HUMANA PPI ILOILO', 'Humana PPI ILOILO PREPAY', 'HUMANA PHP GO365 FAX', 'PHL_HUMANA GO365 PHONES', 'HUMANA PHP PPI CAS CORRECTED', 'Humana Collections', 'HUMANA PHP PPI IVR', 'PHL_HUMANA CCC MEMBER (TIER 1)', 'PHL_HUMANA CCC MEMBER (TIER 2)', 'PHL_HUMANA CCC MEMBER (TIER 3)', 'PHL_HUMANA CCC MEMBER (TIER 4)', 'PHL_Humana CCC Bohol (Tier 1-3)', 'PHL_HUMANA HRA QC', 'PHL_HRA', 'PHL_Humana RAA', 'PHL_PCC ILOILO ML1 ELEGBENENQ- HUMANA', 'PHL_Humana QC Member Care Coach Clinical', 'PHL_HUMANA PPI INNERCORE BLDG BOHOL', 'PHL_HUMANA GBO SSO HD QC', 'PHL_HUMANA CLINICAL APPEALS', 'PHL_Humana HD Bohol - align to SSO', 'PHL_HUMANA SSO HD', 'PHL_HUMANA CLINICAL EXPEDITED APPEALS', 'PHL_HUMANA CIT CLINICAL', 'PHL_Humana QC Member Care Coach', 'PHL_Humana ALA Member Care Coach Stars Low LOI', 'PHL_Humana ILO Member Care Coach Low LOI', 'PHL_Humana QC Member Care Coach Post ER Follow-up', 'PHL_Humana QC Member Care Coach Controlling Blood Pressure', 'PHL_PCC ILOILO ML1 ELEGBENENQ', 'PHL_HUMANA PPI LIVE LINE', 'PHL_ML1 ELEGBENENQ Priority Health', 'HUMANA UTILIZATION MANAGEMENT APPEALS', 'PHL_PRIORITY HEALTH PROVIDER CALLS QC', 'PHL_HUMANA CLINICAL HEDIS', 'PHL_HUMANA GBO HD QC'],
  LABCORP: ['PHL_LABCORP PATIENT CALLING', 'LABCORP PATIENT CALLING MNL', 'PRE AUTHORIZATION', 'LabCorp Prior Authorization', 'UNBILLABLE OB CALLING', 'PHL_LABCORP UNBILLABLE OB CALLING', 'PHL_PATIENT CALLING ILOILO', 'Prior Authorization', 'PHL_PATIENT ACCOUNT RECEIVABLE SP', 'PHL_PATIENT ACCOUNT RECEIVABLE SP / LABCORP', 'PATIENT ACCOUNT RECEIVABLE SP', 'LabCorp Prior Authorization/Modified'],
  MEDICA: ['PHL_Dean Health Plan Benefits', 'PHL_Medica ISET Benefits', 'PHL_Medica PAR', 'PHL_Medica HR Benefits'],
  MERITAIN: ['PHL_Meritain Calls_ILO'],
  MITCHELL: ['MITCHELL PROVIDER CALLS', 'MITCHELL ZURICH', 'PHL_MITCHELL INTERNATIONAL', 'Mitchell International Manila'],
  MOILINA: ['PHL_Molina Healthcare', 'PHL_Molina HRA', 'PHL_Molina Overall QC'],
  PRIME: ['PHL_PRIME Rx Helpdesk / Pharmacy Helpdesk', 'PHL_PRIME PHD BOHOL', 'PHL_PRIME PHD ILOILO'],
  PWC: ['PWC PDM', 'PHL_PWC PROVIDER PANEL', 'COVENTRY PWC TCM', 'PHL_PWC COVENTRY NT24', 'COVENTRY NT24', 'PWC PCS', 'COVENTRY PDM', 'COVENTRY PP'],
  QUALYNX: ['PHL_QUAL-LYNX CLINICAL QL 1', 'PHL-QUAL-LYNX CLINICAL QL 2', 'PHL_QUAL-LYNX CLINICAL CLAIMS', 'PHL_QUAL-LYNX CLAIMS'],
  RADIOLOGY: ['PHL_PATIENT BILLING', 'PHL_Radiology Partners Overall ILO', 'PHL_Radiology Partners Overall MNL', 'PHL_RADIOLOGY PARTNERS', 'Patient Billing (HAH)', 'Scheduling (inbound customer service) – Jefferson', 'Scheduling (inbound customer service) – RAI', 'PHL_Desert Radiology SP', 'PHL_ARA - ILO WAVE 12', 'PHL_SCHEDULING CALLS (ARA)', 'PHL_Patient Billing_Innercore Bldg_BHL', 'PHL_DESERT RADIOLOGY SP', 'PHL_JEFFERSON RADIOLOGY', 'PHL_JEFFERSON RADIOLOGY SCHEDULING', 'PHL_DESERT RDIOLOGY SP'],
  TALISPOINT: ['PHL_Talispoint PDM'],
  ARA: ['PHL_Scheduling Calls'],
  HCSC: ['PHL_HCSC CUSTOMER ILO WELCOME', 'PHL_HCSC AZ Medicare BT', 'PHL_HCSC Customer Ilo Welcome', 'PHL_HCSC Customer ALA Welcome', 'PHL_HCSC MA Provider BT']
};
accountSubprocesses.BROADPATH.push('PHL_BGSI Div BroadPath Moda Provider Services - PH');
accountSubprocesses.CIGNA.push('PHL_Cigna Iloilo Dental Customer');
const accountNames = Object.keys(accountSubprocesses);
const fallbackPackageDefinitions = [
  'Generic Forms',
  'Generic Forms with Vanguard',
  'New Hire Acknowledgement Form',
  'Package 4',
  'Package 5',
  'Package 6',
  'Package 7',
  'Package 8',
  'Package 9',
  'Package 10',
  'Package 11',
  'Package 12',
  'Package 13',
  'Package 14',
  'Package 15'
];
let packageDefinitions = fallbackPackageDefinitions.map((name) => ({ name, file: `${name}.pdf` }));
let checkboxes = [];
let preEmploymentCheckboxes = [];
let medicalCheckboxes = [];
const portalStateStorageKey = 'sagility-portal-state-v1';
const selectedPackagesStorageKey = 'sagility-selected-packages-v1';
let isRestoringPortalState = false;
const portalFirebaseConfig = {
  apiKey: 'AIzaSyBAy6P6iU18RjMfamovnptmO0gMRMNhJTc',
  authDomain: 'sagility-notes.firebaseapp.com',
  projectId: 'sagility-notes',
  storageBucket: 'sagility-notes.firebasestorage.app',
  messagingSenderId: '1028959325040',
  appId: '1:1028959325040:web:a35d6206c77c4087fc5db5',
  measurementId: 'G-J8FTL3YZFD'
};
const portalFirebaseApp = firebase.initializeApp(portalFirebaseConfig);
const portalFirestore = portalFirebaseApp.firestore();
const portalFirebaseAuthReady = firebase.auth().signInAnonymously();
let sentEmailHistoryRecords = [];
const emailSendQueue = [];
let emailSendWorkerRunning = false;

function renderEmailSendQueue() {
  const list = document.querySelector('#emailQueueList');
  const count = document.querySelector('#emailQueueCount');
  const title = document.querySelector('#emailQueueTitle');
  if (!list || !count || !title) return;
  count.textContent = String(emailSendQueue.length);
  const isSending = emailSendQueue.some((item) => item.status === 'pending' || item.status === 'sending');
  const hasErrors = emailSendQueue.some((item) => item.status === 'error');
  const isComplete = emailSendQueue.length > 0 && emailSendQueue.every((item) => item.status === 'success');
  title.className = isSending || hasErrors
    ? 'queue-sending'
    : isComplete
      ? 'queue-complete'
      : 'queue-empty';
  title.textContent = isSending
    ? "Email Queue - Please don't close your browser. Still sending"
    : hasErrors
      ? 'Email Queue - Some emails failed to send'
      : 'Email Queue - No emails in the queue';
  list.innerHTML = emailSendQueue.length
    ? [...emailSendQueue].reverse().map((item) => `<div class="email-queue-item ${item.status}">
        <div class="email-queue-item-main"><strong>${escapeHistoryHtml(item.name)}</strong><span>${escapeHistoryHtml(item.types)}</span></div>
        <span class="email-queue-status">${escapeHistoryHtml(item.statusLabel)}</span>
      </div>`).join('')
    : '<p class="email-queue-empty">No emails in the queue.</p>';
  list.scrollTop = 0;
}

function enqueueEmailJob(job, details) {
  emailSendQueue.push({ ...details, run: job, status: 'pending', statusLabel: 'Pending' });
  renderEmailSendQueue();
  processEmailSendQueue();
}

async function processEmailSendQueue() {
  if (emailSendWorkerRunning) return;
  emailSendWorkerRunning = true;
  while (emailSendQueue.some((item) => item.status === 'pending')) {
    const queueItem = emailSendQueue.find((item) => item.status === 'pending');
    queueItem.status = 'sending';
    queueItem.statusLabel = 'Sending';
    renderEmailSendQueue();
    try {
      await queueItem.run();
      queueItem.status = 'success';
      queueItem.statusLabel = 'Successfully sent';
    } catch (error) {
      console.error('Queued email job failed', error);
      queueItem.status = 'error';
      queueItem.statusLabel = 'Failed';
    }
    renderEmailSendQueue();
  }
  emailSendWorkerRunning = false;
  renderEmailSendQueue();
}

function escapeHistoryHtml(value) {
  return String(value || '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[character]));
}

function historyDateKey(timestamp) {
  const date = new Date(Number(timestamp) || Date.now());
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function formatHistoryDate(value) {
  const match = String(value || '').match(/^(\d{4})-(\d{2})-(\d{2})$/);
  return match ? `${match[2]}/${match[3]}/${match[1]}` : String(value || '');
}

function normalizeHistoryFilter(value) {
  return String(value || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function formatHistoryPosition(value) {
  return normalizeHistoryFilter(value) === 'customerservicerepresentativecsr' ? 'CSR' : String(value || '');
}

function renderHistoryTrendGraph() {
  const container = document.querySelector('#historyTrendCharts');
  if (!container) return;
  const records = sentEmailHistoryRecords.filter((record) => record.timestamp);
  const monthInput = document.querySelector('#historyTrendMonthInput');
  const selectedMonth = monthInput?.value || historyDateKey(Date.now()).slice(0, 7);
  const [year, month] = selectedMonth.split('-').map(Number);
  const daysInMonth = new Date(year, month, 0).getDate();
  const dates = Array.from({ length: daysInMonth }, (_, index) => `${selectedMonth}-${String(index + 1).padStart(2, '0')}`);
  if (!records.length) {
    container.innerHTML = '<p class="history-trend-empty">No sent email history available for the graph.</p>';
    return;
  }
  const colors = ['#4d7cff', '#20a66a', '#e5a91f', '#e85d9e', '#8b5cf6', '#e66b3d', '#1597b8', '#d14d72'];
  const chartTypes = [
    { title: 'Sent emails by Location', field: 'location' },
    { title: 'Sent emails by Account', field: 'account' }
  ];
  container.innerHTML = chartTypes.map(({ title, field }) => {
    const categories = [...new Set(records.map((record) => String(record[field] || '').trim()).filter(Boolean))];
    const values = categories.map((category) => dates.map((date) => records.filter((record) => String(record[field] || '').trim() === category && historyDateKey(record.timestamp) === date).length));
    const maxValue = Math.max(1, ...values.flat());
    const width = 1400;
    const height = 220;
    const left = 38;
    const right = 10;
    const top = 20;
    const bottom = 42;
    const plotWidth = width - left - right;
    const plotHeight = height - top - bottom;
    const x = (index) => left + (dates.length === 1 ? plotWidth / 2 : (index / (dates.length - 1)) * plotWidth);
    const y = (value) => top + plotHeight - (value / maxValue) * plotHeight;
    const grid = [0, .5, 1].map((ratio) => `<line x1="${left}" y1="${y(maxValue * ratio)}" x2="${width - right}" y2="${y(maxValue * ratio)}" class="history-trend-grid-line"></line><text x="${left - 8}" y="${y(maxValue * ratio) + 4}" text-anchor="end" class="history-trend-axis-label">${Math.round(maxValue * ratio)}</text>`).join('');
    const lines = values.map((series, index) => {
      const points = series.map((value, dateIndex) => `${x(dateIndex)},${y(value)}`).join(' ');
      const circles = series.map((value, dateIndex) => `<circle cx="${x(dateIndex)}" cy="${y(value)}" r="3.5" fill="${colors[index % colors.length]}" class="history-trend-point"></circle>`).join('');
      return `<polyline points="${points}" fill="none" stroke="${colors[index % colors.length]}" class="history-trend-line"></polyline>${circles}`;
    }).join('');
    const labels = dates.map((date, index) => {
      const day = Number(date.slice(-2));
      const weekday = new Date(year, month - 1, day).toLocaleDateString('en-US', { weekday: 'short' });
      return `<text x="${x(index)}" y="${height - 20}" text-anchor="middle" class="history-trend-axis-label">${weekday} ${day}</text>`;
    }).join('');
    const legend = categories.map((category, index) => `<span><i style="background:${colors[index % colors.length]}"></i>${escapeHistoryHtml(category)}</span>`).join('');
    const monthLabel = new Date(year, month - 1, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    return `<div class="history-trend-chart"><div class="history-trend-period">${monthLabel}</div><h3>${title}</h3><div class="history-trend-legend">${legend}</div><svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${title} for ${selectedMonth}">${grid}${lines}${labels}</svg></div>`;
  }).join('');
}

function initializeHistoryTrendToggle() {
  const chart = document.querySelector('#historyTrendCharts');
  const toggle = document.querySelector('#toggleHistoryTrendBtn');
  const hint = document.querySelector('#historyTrendHint');
  if (!chart || !toggle || !hint) return;
  toggle.addEventListener('click', () => {
    const isCollapsed = chart.classList.toggle('is-collapsed');
    toggle.setAttribute('aria-expanded', String(!isCollapsed));
    toggle.textContent = isCollapsed ? 'Show graph' : 'Hide graph';
    hint.classList.remove('is-visible');
  });
  let hintTimer;
  const hintObserver = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    hint.classList.add('is-visible');
    window.clearTimeout(hintTimer);
    hintTimer = window.setTimeout(() => hint.classList.remove('is-visible'), 4500);
  }, { threshold: 0.8 });
  hintObserver.observe(toggle);
}

function getFilteredHistoryRecords() {
  const search = document.querySelector('#historySearchInput')?.value.trim().toLowerCase() || '';
  const locationFilter = normalizeHistoryFilter(document.querySelector('#historyLocationFilter')?.value);
  const start = document.querySelector('#historyExportStart')?.value || '';
  const end = document.querySelector('#historyExportEnd')?.value || '';
  const accountFilter = normalizeHistoryFilter(document.querySelector('#historyAccountFilter')?.value);
  const recruiterFilter = normalizeHistoryFilter(document.querySelector('#historyRecruiterFilter')?.value);
  const startDateFilter = document.querySelector('#historyStartDateFilter')?.value || '';
  return sentEmailHistoryRecords.filter((record) => {
    const haystack = `${record.name || ''} ${record.email || ''} ${record.account || ''} ${record.accountSubprocess || ''} ${record.position || ''}`.toLowerCase();
    const locationHaystack = normalizeHistoryFilter(record.location || '');
    const accountHaystack = normalizeHistoryFilter(`${record.account || ''} ${record.accountSubprocess || ''}`);
    const recruiterHaystack = normalizeHistoryFilter(record.recruiter || record.candidateInformation?.recruiter || '');
    const dateKey = historyDateKey(record.timestamp);
    return (!search || haystack.includes(search)) && (!locationFilter || locationHaystack.includes(locationFilter)) && (!accountFilter || accountHaystack.includes(accountFilter)) && (!recruiterFilter || recruiterHaystack.includes(recruiterFilter)) && (!startDateFilter || String(record.startDate || '') === startDateFilter) && (!start || dateKey >= start) && (!end || dateKey <= end);
  });
}

function renderSentEmailHistory() {
  const body = document.querySelector('#sentEmailHistoryBody');
  const records = getFilteredHistoryRecords();
  body.innerHTML = records.length ? records.map((record, index) => `
    <tr>
      <td><input type="checkbox" class="history-delete-checkbox" data-record-id="${escapeHistoryHtml(record.id)}" aria-label="Select record for deletion"></td>
      <td><button class="history-row-button history-view-button" type="button" data-record-id="${escapeHistoryHtml(record.id)}">View</button></td>
      <td>${index + 1}</td>
      <td>${escapeHistoryHtml(record.name)}</td>
      <td>${escapeHistoryHtml(record.email)}</td>
      <td>${escapeHistoryHtml(record.contactNumber || record.candidateInformation?.contactNumber)}</td>
      <td>${escapeHistoryHtml(record.account)}</td>
      <td>${escapeHistoryHtml(record.accountSubprocess)}</td>
        <td>${escapeHistoryHtml(record.recruiter || record.candidateInformation?.recruiter)}</td>
      <td>${escapeHistoryHtml(formatHistoryDate(record.startDate))}</td>
      <td>${escapeHistoryHtml(formatHistoryPosition(record.position || record.role))}</td>
      <td>${escapeHistoryHtml(record.location)}</td>
      <td>${escapeHistoryHtml(record.date)}</td>
    </tr>`).join('') : '<tr><td colspan="13">No sent email records found</td></tr>';
  body.querySelectorAll('.history-view-button').forEach((button) => button.addEventListener('click', () => {
    const record = sentEmailHistoryRecords.find((item) => item.id === button.dataset.recordId);
    const links = (record?.packages || []).map((item) => `<span class="package-view-name">${escapeHistoryHtml(item.name)}</span>`).join('');
    const dialog = document.createElement('dialog');
    dialog.className = 'package-view-dialog';
    dialog.innerHTML = `<h2>Sent packages</h2><div id="packageViewList">${links || '<p>No package links saved for this record.</p>'}</div><div class="package-view-actions"><button class="package-view-send" type="button"${record?.packages?.length ? '' : ' disabled'}>Sent</button><button class="package-view-close-action" type="button">Close</button></div><p class="package-view-status" role="status" aria-live="polite"></p>`;
    dialog.querySelector('.package-view-close-action').onclick = () => dialog.close();
    dialog.querySelector('.package-view-send').onclick = async () => {
      const sendButton = dialog.querySelector('.package-view-send');
      const status = dialog.querySelector('.package-view-status');
      if (!record?.packages?.length) return;
      sendButton.disabled = true;
      sendButton.textContent = 'Sending...';
      status.textContent = 'Please wait, sending email...';
      status.className = 'package-view-status sending';
      try {
        await sendHistoryRecordEmails(record);
        await saveSentEmailHistory(record.name, record.email, record.location, record.packages, true, getHistoryRecordDetails(record));
        sendButton.textContent = 'Sent';
        status.textContent = 'Successfully sent';
        status.className = 'package-view-status success';
      } catch (error) {
        console.error('Could not resend package email', error);
        sendButton.textContent = 'Send failed';
        status.textContent = 'Could not send email';
        status.className = 'package-view-status error';
      } finally {
        sendButton.disabled = false;
      }
    };
    document.body.append(dialog);
    dialog.addEventListener('close', () => dialog.remove(), { once: true });
    dialog.showModal();
  }));
  const checkboxes = [...body.querySelectorAll('.history-delete-checkbox')];
  const selectAllButton = document.querySelector('#selectAllHistoryBtn');
  const deleteButton = document.querySelector('#deleteSelectedHistoryBtn');
  if (selectAllButton) {
    selectAllButton.disabled = !checkboxes.length;
    selectAllButton.textContent = checkboxes.length && checkboxes.every((checkbox) => checkbox.checked) ? 'Clear All' : 'Select All';
  }
  if (deleteButton) deleteButton.disabled = !body.querySelector('.history-delete-checkbox:checked');
}

async function saveSentEmailHistory(name, email, location, packages, isFollowUp = false, details = {}) {
  await portalFirebaseAuthReady;
  await portalFirestore.collection('sentHistory').add({
    name,
    email,
    location,
    ...details,
    packages,
    isFollowUp,
    timestamp: Date.now(),
    date: new Date().toLocaleString('en-PH')
  });
}

function getHistoryRecordDetails(record) {
  const candidate = record.candidateInformation || {};
  const other = record.otherInformation || {};
  const medical = record.medicalInformation || {};
  return {
    account: record.account || other.account || '',
    accountSubprocess: record.accountSubprocess || other.accountSubprocess || '',
    startDate: record.startDate || other.startDate || '',
    position: record.position || record.role || medical.role || '',
    contactNumber: record.contactNumber || candidate.contactNumber || '',
    birthday: record.birthday || candidate.birthday || '',
    age: record.age || candidate.age || '',
    address: record.address || candidate.address || '',
    dateOfIssuance: record.dateOfIssuance || medical.dateOfIssuance || '',
    medicalExamDate: record.medicalExamDate || medical.medicalExamDate || '',
    role: record.role || record.position || medical.role || '',
    requestedPackage: record.requestedPackage || medical.requestedPackage || '',
    recruiter: record.recruiter || candidate.recruiter || '',
    candidateInformation: {
      name: record.name || candidate.name || '',
      email: record.email || candidate.email || '',
      contactNumber: record.contactNumber || candidate.contactNumber || '',
      birthday: record.birthday || candidate.birthday || '',
      age: record.age || candidate.age || '',
      address: record.address || candidate.address || '',
      location: record.location || candidate.location || '',
      recruiter: record.recruiter || candidate.recruiter || ''
    },
    otherInformation: {
      account: record.account || other.account || '',
      accountSubprocess: record.accountSubprocess || other.accountSubprocess || '',
      startDate: record.startDate || other.startDate || ''
    },
    medicalInformation: {
      dateOfIssuance: record.dateOfIssuance || medical.dateOfIssuance || '',
      medicalExamDate: record.medicalExamDate || medical.medicalExamDate || '',
      role: record.role || record.position || medical.role || '',
      requestedPackage: record.requestedPackage || medical.requestedPackage || ''
    }
  };
}

function initializeSentEmailHistory() {
  portalFirebaseAuthReady.then(() => portalFirestore.collection('sentHistory').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
    sentEmailHistoryRecords = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })).filter((record) => record.source !== 'applicant-details-survey');
    renderSentEmailHistory();
    renderHistoryTrendGraph();
  }, () => {
    document.querySelector('#sentEmailHistoryBody').innerHTML = '<tr><td colspan="13">History unavailable. Check Firebase Authentication and Firestore rules.</td></tr>';
  })).catch(() => {
    document.querySelector('#sentEmailHistoryBody').innerHTML = '<tr><td colspan="13">History unavailable. Enable Firebase anonymous sign-in.</td></tr>';
  });
}

let applicantDetailsRecords = [];
let applicantDetailsListener = null;
const applicantDeletePassword = 'Sagility_1';

function renderApplicantDetails() {
  const body = document.querySelector('#applicantDetailsBody');
  if (!body) return;
  const search = document.querySelector('#applicantDetailsSearch')?.value.trim().toLowerCase() || '';
  const records = applicantDetailsRecords.filter((record) => `${record.completeName || ''} ${record.personalEmail || ''} ${record.tin || ''} ${record.sss || ''}`.toLowerCase().includes(search));
  body.innerHTML = records.length ? records.map((record, index) => `<tr>
    <td><input class="applicant-delete-checkbox" type="checkbox" data-record-id="${escapeHistoryHtml(record.id)}" aria-label="Delete applicant details record"></td>
    <td>${index + 1}</td>
    <td>${escapeHistoryHtml(record.submittedAt ? new Date(record.submittedAt).toLocaleString() : '')}</td>
    <td>${escapeHistoryHtml(normalizeProperCaseText(record.completeName))}</td>
    <td>${escapeHistoryHtml(formatApplicantDate(record.dateOfBirth))}</td>
    <td>${escapeHistoryHtml(calculateApplicantAge(record.dateOfBirth))}</td>
    <td>${escapeHistoryHtml(normalizeProperCaseText(record.homeAddress))}</td>
    <td>${escapeHistoryHtml(record.personalEmail)}</td>
    <td>${escapeHistoryHtml(formatApplicantMobile(record.mobileNumber))}</td>
    <td>${escapeHistoryHtml(formatApplicantIdentifier(record.tin))}</td>
    <td>${escapeHistoryHtml(formatApplicantIdentifier(record.sss))}</td>
    <td>${escapeHistoryHtml(normalizeProperCaseText(record.motherLastName || record.mothersMaidenName))}</td>
    <td>${escapeHistoryHtml(normalizeProperCaseText(record.motherFirstName))}</td>
    <td>${escapeHistoryHtml(normalizeProperCaseText(record.motherMiddleName))}</td>
    <td>${escapeHistoryHtml(normalizeProperCaseText(record.motherSuffix))}</td>
    <td>${record.privacyConsent ? 'Consented' : 'Not recorded'}</td>
  </tr>`).join('') : '<tr><td colspan="16">No applicant details found.</td></tr>';
  body.querySelectorAll('.applicant-delete-checkbox').forEach((checkbox) => checkbox.addEventListener('change', updateApplicantDetailsActions));
  updateApplicantDetailsActions();
}

function formatApplicantDate(value) {
  const match = String(value || '').match(/^(\d{4})-(\d{2})-(\d{2})$/);
  return match ? `${match[2]}/${match[3]}/${match[1]}` : String(value || '');
}

function formatApplicantIdentifier(value) {
  return String(value || '').replace(/-/g, '');
}

function formatApplicantMobile(value) {
  const normalized = String(value || '').replace(/[\s()-]/g, '');
  return normalized.replace(/^\+63(9\d{9})$/, '0$1');
}

function calculateApplicantAge(value) {
  const match = String(value || '').match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return '';
  const birthDate = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const birthdayHasPassed = today.getMonth() > birthDate.getMonth()
    || (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
  if (!birthdayHasPassed) age -= 1;
  return age >= 0 ? String(age) : '';
}

function updateApplicantDetailsActions() {
  const checkboxes = [...document.querySelectorAll('.applicant-delete-checkbox')];
  const selected = checkboxes.filter((checkbox) => checkbox.checked);
  const selectAllButton = document.querySelector('#selectAllApplicantDetailsBtn');
  const deleteButton = document.querySelector('#deleteSelectedApplicantDetailsBtn');
  if (selectAllButton) selectAllButton.textContent = checkboxes.length && selected.length === checkboxes.length ? 'Clear All' : 'Select All';
  if (deleteButton) deleteButton.disabled = selected.length === 0;
}

function initializeApplicantDetails() {
  const body = document.querySelector('#applicantDetailsBody');
  if (!body) return;
  portalFirebaseAuthReady.then(() => {
    if (applicantDetailsListener) applicantDetailsListener();
    applicantDetailsListener = portalFirestore.collection('sentHistory').where('source', '==', 'applicant-details-survey').onSnapshot((snapshot) => {
      applicantDetailsRecords = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })).sort((first, second) => String(second.submittedAt || '').localeCompare(String(first.submittedAt || '')));
      renderApplicantDetails();
      document.querySelector('#applicantDetailsStatus').textContent = `${applicantDetailsRecords.length} applicant record${applicantDetailsRecords.length === 1 ? '' : 's'} loaded.`;
    }, () => {
      body.innerHTML = '<tr><td colspan="16">Applicant details unavailable. Check Firebase Firestore rules.</td></tr>';
    });
  }).catch(() => { body.innerHTML = '<tr><td colspan="16">Applicant details unavailable. Enable Firebase anonymous sign-in.</td></tr>'; });
}

function exportApplicantDetails() {
  const headers = ['Submitted', 'Complete Name', 'Date of Birth', 'Age', 'Home Address', 'Personal Email', 'Mobile Number', 'TIN', 'SSS', "Mother's Maiden Last Name", "Mother's Maiden First Name", "Mother's Maiden Middle Name", "Mother's Maiden Suffix", 'Privacy Consent'];
  const from = document.querySelector('#applicantExportStart')?.value || '';
  const end = document.querySelector('#applicantExportEnd')?.value || '';
  if (from && end && from > end) {
    document.querySelector('#applicantDetailsStatus').textContent = 'The From date must be before the End date.';
    return;
  }
  const records = applicantDetailsRecords.filter((record) => {
    const dateKey = String(record.submittedAt || '').slice(0, 10);
    return (!from || dateKey >= from) && (!end || dateKey <= end);
  });
  const rows = records.map((record) => [record.submittedAt ? new Date(record.submittedAt).toLocaleString() : '', normalizeProperCaseText(record.completeName), formatApplicantDate(record.dateOfBirth), calculateApplicantAge(record.dateOfBirth), normalizeProperCaseText(record.homeAddress), record.personalEmail, formatApplicantMobile(record.mobileNumber), formatApplicantIdentifier(record.tin), formatApplicantIdentifier(record.sss), normalizeProperCaseText(record.motherLastName || record.mothersMaidenName), normalizeProperCaseText(record.motherFirstName), normalizeProperCaseText(record.motherMiddleName), normalizeProperCaseText(record.motherSuffix), record.privacyConsent ? 'Consented' : 'Not recorded']);
  const csv = [headers, ...rows].map((row) => row.map((value) => `"${String(value || '').replaceAll('"', '""')}"`).join(',')).join('\n');
  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  link.download = 'applicant-details.csv';
  link.click();
  URL.revokeObjectURL(link.href);
  document.querySelector('#applicantDetailsStatus').textContent = `${rows.length} applicant record${rows.length === 1 ? '' : 's'} exported.`;
}

function buildPackageColumns(entries) {
  const visibleEntries = entries.filter((entry) => {
    const name = String(entry.name || '').trim();
    return name && !/^Package \d+$/i.test(name);
  });
  return Array.from({ length: 3 }, (_, columnIndex) => {
    const start = columnIndex * 5;
    const items = visibleEntries.slice(start, start + 5).map((entry) =>
      `<label class="package-item"><input type="checkbox" class="package-checkbox" data-package="${entry.name}" data-link="Packages/?pdf=${encodeURIComponent(entry.file)}"><div class="package-checkbox-visual"></div><div class="package-info"><span class="package-name">${entry.name}</span></div></label>`
    ).join('');
    if (!items) return '';
    return `<div class="packages-category package-column"><h3 class="category-title">Pre-Employment Packages ${start + 1}-${start + 5}</h3><div class="packages-list">${items}</div></div>`;
  }).join('');
}

function refreshCheckboxCollections() {
  checkboxes = [...document.querySelectorAll('.package-checkbox')];
  preEmploymentCheckboxes = checkboxes.filter((checkbox) => checkbox.dataset.prefill !== 'medical');
  medicalCheckboxes = checkboxes.filter((checkbox) => checkbox.dataset.prefill === 'medical');
}

function savePortalState() {
  const inputs = [
    document.querySelector('#candidateNameInput'),
    document.querySelector('#emailInput'),
    contactNumberInput,
    candidateBirthdayInput,
    candidateAgeInput,
    candidateAddressInput,
    locationInput,
    recruiterInput,
    accountInput,
    startDateInput,
    accountSubprocessInput,
    dateOfIssuanceInput,
    medicalExamDateInput,
    roleInput,
    requestedPackageInput
  ].filter(Boolean);

  const state = {
    inputs: Object.fromEntries(inputs.map((input) => [input.id, input.value])),
    packages: checkboxes.map((checkbox) => ({
      package: checkbox.dataset.package,
      checked: checkbox.checked
    }))
  };

  localStorage.setItem(portalStateStorageKey, JSON.stringify(state));
}

function restorePortalState() {
  isRestoringPortalState = true;
  try {
    const storedPortalState = JSON.parse(localStorage.getItem(portalStateStorageKey) || 'null');
    const savedState = storedPortalState && typeof storedPortalState === 'object' ? storedPortalState : {};

    let otherInformationState = {};
    try {
      otherInformationState = JSON.parse(localStorage.getItem(otherInformationStorageKey) || '{}');
    } catch (error) {
      otherInformationState = {};
    }
    if (!Object.keys(savedState).length && !Object.keys(otherInformationState).length) return;
    const savedInputs = { ...savedState.inputs };
    Object.entries(otherInformationState).forEach(([inputId, value]) => {
      if (!String(savedInputs[inputId] || '').trim() && String(value || '').trim()) {
        savedInputs[inputId] = value;
      }
    });

    if (savedInputs.accountInput && accountInput) {
      accountInput.value = savedInputs.accountInput;
      accountInput.dispatchEvent(new Event('change'));

      if (savedInputs.accountSubprocessInput && accountSubprocessInput) {
        const subprocessOptions = [...accountSubprocessInput.options].map((option) => option.value);
        if (subprocessOptions.includes(savedInputs.accountSubprocessInput)) {
          accountSubprocessInput.value = savedInputs.accountSubprocessInput;
        }
      }
    }

    const restoreInputs = [
      document.querySelector('#candidateNameInput'),
      document.querySelector('#emailInput'),
      contactNumberInput,
      candidateBirthdayInput,
      candidateAgeInput,
      candidateAddressInput,
      locationInput,
      recruiterInput,
      startDateInput,
      accountSubprocessInput,
      dateOfIssuanceInput,
      medicalExamDateInput,
      roleInput,
      requestedPackageInput
    ].filter(Boolean);

    restoreInputs.forEach((input) => {
      const savedValue = savedInputs[input.id];
      if (savedValue === undefined) return;
      if (input.tagName === 'SELECT' && ![...input.options].some((option) => option.value === savedValue)) return;
      input.value = savedValue;
    });

    if (savedInputs.accountInput && accountInput) {
      accountInput.value = savedInputs.accountInput;
      accountInput.dispatchEvent(new Event('change', { bubbles: true }));
      if (savedInputs.accountSubprocessInput && accountSubprocessInput) {
        accountSubprocessInput.value = savedInputs.accountSubprocessInput;
        accountSubprocessInput.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }

    if (savedInputs.candidateBirthdayInput && candidateBirthdayInput) {
      candidateBirthdayInput.value = savedInputs.candidateBirthdayInput;
      updateCandidateAge();
    }

    const storedPackages = JSON.parse(localStorage.getItem(selectedPackagesStorageKey) || 'null');
    const packageState = Array.isArray(storedPackages)
      ? storedPackages.map((packageName) => ({ package: packageName, checked: true }))
      : savedState.packages;
    if (Array.isArray(packageState)) {
      const checkedPackages = new Map(packageState.map((entry) => [entry.package, entry.checked]));
      checkboxes.forEach((checkbox) => {
        checkbox.checked = Boolean(checkedPackages.get(checkbox.dataset.package));
      });
      const selectedMedicalPackage = medicalCheckboxes.find((checkbox) => checkbox.checked);
      medicalCheckboxes.forEach((checkbox) => {
        checkbox.checked = checkbox === selectedMedicalPackage;
      });
      saveSelectedPackageState();
      if (!Array.isArray(storedPackages)) {
        localStorage.setItem(
          selectedPackagesStorageKey,
          JSON.stringify(packageState.filter((entry) => entry.checked).map((entry) => entry.package))
        );
      }
    }

    updateSelectedPackages();
    updateRequiredFieldState();
  } catch (error) {
    console.warn('Portal state could not be restored.', error);
    localStorage.removeItem(portalStateStorageKey);
  } finally {
    isRestoringPortalState = false;
  }
}

async function loadPackageForms() {
  let definitions = fallbackPackageDefinitions.map((name) => ({ name, file: `${name}.pdf` }));

  try {
    const response = await fetch('Packages/package-forms.json', { cache: 'no-store' });
    if (response.ok) {
      const forms = await response.json();
      if (Array.isArray(forms) && forms.length > 0) {
        const validForms = [];

        for (const form of forms) {
          if (!form || !form.name || !form.file) continue;

          try {
            const fileResponse = await fetch(`Packages/${encodeURIComponent(form.file)}`, { cache: 'no-store' });
            if (fileResponse.ok) {
              validForms.push({ name: form.name, file: form.file });
            }
          } catch (error) {
            console.warn(`Skipping package ${form.name} because its PDF was not found.`, error);
          }
        }

        if (validForms.length > 0) {
          definitions = validForms;
        }
      }
    }
  } catch (error) {
    console.warn('Package forms registry could not be loaded, using fallback list.', error);
  }

  packageDefinitions = definitions;
  if (packageGrid) packageGrid.innerHTML = buildPackageColumns(packageDefinitions);
  refreshCheckboxCollections();
  updateSelectedPackages();
  updateRequiredFieldState();
  restorePortalState();
}

refreshCheckboxCollections();
const preEmploymentEmailEndpoint = 'https://script.google.com/macros/s/AKfycbwY-ASlmGJWQMtPcABtsoXuRCwFED3TiwQh05j2XFpX6o1ebs-bTqm6l_jirmE4G14/exec';
const additionalPreEmploymentEmailEndpoint = 'https://script.google.com/macros/s/AKfycbxnRDA410e-LJHUaOF0d1LOIfLFyLDltaZnbISd-rKRhZkiwkp4vY10N_k5V6-eTUGmqw/exec';
const medicalEmailEndpoint = 'https://script.google.com/macros/s/AKfycby0GuvNfqRGmJCHKvj9Xq7ch6pRDiQNrwQU4kzGkjA5fLVy1muvetx_8KoApOxkhOxH/exec';
const publicPortalBaseUrl = 'https://phsagility.github.io/Recruiter-and-Admin-Portal';
const deployedPortalBaseUrl = window.location.protocol === 'http:' || window.location.protocol === 'https:'
  ? new URL('./', window.location.href).href.replace(/\/$/, '')
  : publicPortalBaseUrl;
const portalBaseUrl = (window.portalBaseUrl || deployedPortalBaseUrl).replace(/\/$/, '');
const notesCacheStorageKey = 'sagility-notes-cache';
const selectedContainer = document.querySelector('#selectedPackagesContainer');
const clearButton = document.querySelector('#clearButton');
const clearDataButton = document.querySelector('#clearDataBtn');
const candidateBirthdayInput = document.querySelector('#candidateBirthdayInput');
const candidateAgeInput = document.querySelector('#candidateAgeInput');
const candidateAddressInput = document.querySelector('#candidateAddressInput');
const contactNumberInput = document.querySelector('#contactNumberInput');
const locationInput = document.querySelector('#locationInput');
const recruiterInput = document.querySelector('#recruiterInput');
const accountInput = document.querySelector('#accountInput');
const startDateInput = document.querySelector('#startDateInput');
const accountSubprocessInput = document.querySelector('#accountSubprocessInput');
const dateOfIssuanceInput = document.querySelector('#dateOfIssuanceInput');
const medicalExamDateInput = document.querySelector('#medicalExamDateInput');
const roleInput = document.querySelector('#roleInput');
const requestedPackageInput = document.querySelector('#requestedPackageInput');
const sendEmailButton = document.querySelector('#sendEmailBtn');
const emailStatus = document.querySelector('#emailStatus');
const preEmploymentRequirementsCheckbox = document.querySelector('#preEmploymentRequirementsCheckbox');
const esignModal = document.querySelector('#esignModal');
const esignFrame = document.querySelector('#esignFrame');
const closeEsignButton = document.querySelector('#closeEsign');

function getPersistedPortalInputs() {
  return [
    document.querySelector('#candidateNameInput'),
    document.querySelector('#emailInput'),
    candidateBirthdayInput,
    candidateAgeInput,
    candidateAddressInput,
    contactNumberInput,
    locationInput,
    recruiterInput,
    accountInput,
    startDateInput,
    accountSubprocessInput,
    dateOfIssuanceInput,
    medicalExamDateInput,
    roleInput,
    requestedPackageInput
  ].filter(Boolean);
}

function setSelectOptions(select, placeholder, values) {
  select.innerHTML = `<option value="" disabled selected hidden>${placeholder}</option>`;
  [...new Set(values)].forEach((value) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function addSearchableSelectBehavior(select) {
  const container = select.parentElement;
  const searchInput = document.createElement('input');
  const optionsPopup = document.createElement('div');
  let options = [];
  searchInput.type = 'search';
  searchInput.className = 'select-search-input';
  searchInput.placeholder = select.options[0]?.textContent || 'Search';
  searchInput.setAttribute('aria-label', searchInput.placeholder);
  searchInput.setAttribute('autocomplete', 'off');
  optionsPopup.className = 'select-search-options';
  optionsPopup.hidden = true;
  select.hidden = true;
  container.classList.add('select-search-container');
  container.insertBefore(searchInput, select);
  container.appendChild(optionsPopup);
  const normalizeSearchText = (value) => String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');

  const closePopup = () => { optionsPopup.hidden = true; };
  const refreshOptions = () => {
    options = [...select.options].filter((option) => option.value);
    searchInput.disabled = select.disabled;
    searchInput.value = select.value || '';
  };
  const renderOptions = () => {
    const query = normalizeSearchText(searchInput.value);
    const matches = options.filter((option) => !query || normalizeSearchText(option.textContent).includes(query));
    optionsPopup.innerHTML = '';
    matches.forEach((option) => {
      const optionButton = document.createElement('button');
      optionButton.type = 'button';
      optionButton.className = 'select-search-option';
      optionButton.textContent = option.textContent;
      optionButton.addEventListener('mousedown', (event) => event.preventDefault());
      optionButton.addEventListener('click', () => {
        select.value = option.value;
        searchInput.value = option.textContent;
        closePopup();
        select.dispatchEvent(new Event('change', { bubbles: true }));
      });
      optionsPopup.appendChild(optionButton);
    });
    optionsPopup.hidden = matches.length === 0;
  };

  searchInput.addEventListener('focus', renderOptions);
  searchInput.addEventListener('input', renderOptions);
  select.addEventListener('change', () => {
    searchInput.value = select.options[select.selectedIndex]?.textContent || '';
    refreshOptions();
  });
  document.addEventListener('click', (event) => {
    if (!container.contains(event.target)) closePopup();
  });
  refreshOptions();
  return refreshOptions;
}

const recruitersByLocation = {
  iloilo: [
    'Chariz Ebido',
    'Feye S. Miado',
    'Ciarra Mae Imbang',
    'Louie Nila Tabares',
    'Zaila Dexymae Adricula',
    'Donah Grace Zulla',
    'Ellaine Sumagaysay',
    'Ivy Buenaventura',
    'Shaine Maigue',
    'Richiel Caña',
    'Christian Moncerate',
    'Gener Hiponia',
    'Jason Dumalag',
    'Angela Nicole Deocampo',
    'Rhyne Adrielle Roxas',
    'Vanessa Leumes Samsona',
    'Gian Paula Bilbao',
    'Chyd Emanah Salvacion Furio'
  ],
  bohol: [
    'Chariz Ebido',
    'LeofilaJane Cabanig',
    'Louie Nila Tabares',
    'Divine Grace Alturas',
    'Ivy Mae Cagadas',
    'Micah Dela Cerna',
    'Vangie M. Luong',
    'Ellaine Sumagaysay',
    'Ivy Mae Cagadas',
    'Gener Hiponia',
    'Jason Dumalag',
    'Richiel Caña'
  ]
};

function updateRecruiterOptions() {
  const location = locationInput.value.toLowerCase();
  const locationKey = location.includes('iloilo') ? 'iloilo' : location.includes('bohol') ? 'bohol' : '';
  const currentRecruiter = recruiterInput.value;
  const recruiters = recruitersByLocation[locationKey] || [];
  setSelectOptions(recruiterInput, 'Select Recruiter', recruiters);
  if (recruiters.includes(currentRecruiter)) recruiterInput.value = currentRecruiter;
  recruiterInput.disabled = recruiters.length === 0;
}

setSelectOptions(accountInput, 'Select Account', accountNames);
setSelectOptions(accountSubprocessInput, 'Select Account Subprocess', []);
accountSubprocessInput.disabled = true;
const refreshAccountSearch = addSearchableSelectBehavior(accountInput);
const refreshSubprocessSearch = addSearchableSelectBehavior(accountSubprocessInput);
accountInput.addEventListener('change', () => {
  const options = accountSubprocesses[accountInput.value] || [];
  setSelectOptions(accountSubprocessInput, 'Select Account Subprocess', options);
  accountSubprocessInput.disabled = options.length === 0;
  refreshSubprocessSearch();
});
locationInput.addEventListener('change', () => {
  updateRecruiterOptions();
  updateMedicalFormsByLocation();
});
updateRecruiterOptions();

const otherInformationStorageKey = 'sagility-other-information';
const otherInformationInputs = [accountInput, startDateInput, accountSubprocessInput, medicalExamDateInput, roleInput, requestedPackageInput];

dateOfIssuanceInput.value = new Date().toISOString().slice(0, 10);

function saveOtherInformation() {
  if (isRestoringPortalState) return;
  const values = Object.fromEntries(otherInformationInputs.map((input) => [input.id, input.value]));
  localStorage.setItem(otherInformationStorageKey, JSON.stringify(values));
  savePortalState();
}

function restoreOtherInformation() {
  try {
    const values = JSON.parse(localStorage.getItem(otherInformationStorageKey) || '{}');
    if (values.accountInput) {
      accountInput.value = values.accountInput;
      accountInput.dispatchEvent(new Event('change'));
    }
    otherInformationInputs.slice(1).forEach((input) => {
      if (!values[input.id]) return;
      if (input.tagName === 'SELECT' && ![...input.options].some((option) => option.value === values[input.id])) return;
      input.value = values[input.id];
    });
  } catch (error) {
    localStorage.removeItem(otherInformationStorageKey);
  }
}

otherInformationInputs.forEach((input) => {
  input.addEventListener('input', saveOtherInformation);
  input.addEventListener('change', saveOtherInformation);
});
getPersistedPortalInputs().forEach((input) => {
  input.addEventListener('change', savePortalState);
});
window.addEventListener('beforeunload', savePortalState);
window.addEventListener('pagehide', savePortalState);

const candidateSelectionStorageKey = 'sagility-candidate-selections';
const candidateSelectionInputs = [locationInput, recruiterInput];

function saveCandidateSelections() {
  const values = Object.fromEntries(candidateSelectionInputs.map((input) => [input.id, input.value]));
  localStorage.setItem(candidateSelectionStorageKey, JSON.stringify(values));
  savePortalState();
}

function restoreCandidateSelections() {
  try {
    const values = JSON.parse(localStorage.getItem(candidateSelectionStorageKey) || '{}');
    if (values.locationInput && [...locationInput.options].some((option) => option.value === values.locationInput)) {
      locationInput.value = values.locationInput;
      updateRecruiterOptions();
    }
    if (values.recruiterInput && [...recruiterInput.options].some((option) => option.value === values.recruiterInput)) {
      recruiterInput.value = values.recruiterInput;
    }
  } catch (error) {
    localStorage.removeItem(candidateSelectionStorageKey);
  }
}

candidateSelectionInputs.forEach((input) => input.addEventListener('change', saveCandidateSelections));
restoreCandidateSelections();

function openEsignForm(fileName) {
  esignFrame.src = `esign.html?pdf=${encodeURIComponent(fileName)}`;
  esignModal.hidden = false;
}

function closeEsignForm() {
  esignModal.hidden = true;
  esignFrame.src = 'about:blank';
}

function updatePackageItemUI(checkbox) {
  checkbox.closest('.package-item')?.classList.toggle('checked', checkbox.checked);
}

function normalizeDateInputValue(value) {
  if (!value) return '';

  const trimmed = String(value).trim();
  if (!trimmed) return '';

  const dateMatch = trimmed.match(/^\s*(\d{1,2})\s*[/\-\s]\s*(\d{1,2})\s*[/\-\s]\s*(\d{2,4})\s*$/);
  if (dateMatch) {
    const [, monthPart, dayPart, yearPart] = dateMatch;
    const month = Number(monthPart);
    const day = Number(dayPart);
    const year = Number(yearPart);
    const normalizedYear = year < 100 ? 2000 + year : year;
    const normalizedDate = new Date(normalizedYear, month - 1, day);
    if (!Number.isNaN(normalizedDate.getTime())) {
      const yyyy = normalizedDate.getFullYear();
      const mm = String(normalizedDate.getMonth() + 1).padStart(2, '0');
      const dd = String(normalizedDate.getDate()).padStart(2, '0');
      return `${yyyy}-${mm}-${dd}`;
    }
  }

  const parsedDate = new Date(trimmed);
  if (Number.isNaN(parsedDate.getTime())) return '';

  const yyyy = parsedDate.getFullYear();
  const mm = String(parsedDate.getMonth() + 1).padStart(2, '0');
  const dd = String(parsedDate.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function formatBirthdayInput(value) {
  const digits = String(value || '').replace(/\D/g, '').slice(0, 8);
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
}

function calculateAge(dateString) {
  if (!dateString) return '';
  const birthDate = new Date(dateString);
  if (Number.isNaN(birthDate.getTime())) return '';

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age -= 1;
  }

  return String(age);
}

function updateCandidateAge() {
  const normalizedValue = normalizeDateInputValue(candidateBirthdayInput.value);
  candidateAgeInput.value = normalizedValue ? calculateAge(normalizedValue) : '';
}

function normalizeProperCaseText(value) {
  if (value === null || value === undefined) return '';

  const rawValue = String(value);
  const hasTrailingSpace = /\s$/.test(rawValue);
  const trimmed = rawValue.trim();
  if (!trimmed) return '';

  const normalized = trimmed
    .toLowerCase()
    .replace(/(^|\s|[-/])([a-z0-9])/g, (match, prefix, char) => prefix + char.toUpperCase());
  return hasTrailingSpace ? `${normalized} ` : normalized;
}

function applyProperCaseToInput(input) {
  if (!input) return;

  const formatted = normalizeProperCaseText(input.value);
  if (formatted !== input.value) {
    input.value = formatted;
  }
}

function updateSelectedPackages() {
  const selected = checkboxes.filter((checkbox) => checkbox.checked);
  const selectedItems = [
    ...(preEmploymentRequirementsCheckbox?.checked ? [{ requirements: true, name: 'Pre Employment Requirements' }] : []),
    ...selected.map((checkbox) => ({ checkbox, name: checkbox.dataset.package }))
  ];
  selectedContainer.innerHTML = selectedItems.length
    ? selectedItems.map((item) => item.requirements
      ? `
      <div class="pkg requirements-pink">
        <div class="pkg-name"><span class="pkg-check" aria-hidden="true">✓</span><span class="pkg-link">${item.name}</span></div>
        <button class="pkg-remove" type="button" data-requirements="true" aria-label="Remove ${item.name}">✕</button>
      </div>
    `
      : `
      <div class="pkg ${item.checkbox.dataset.prefill === 'medical' ? `medical-${item.checkbox.dataset.medicalColumn || 'purple'}` : 'blue'}">
        <div class="pkg-name"><span class="pkg-check" aria-hidden="true">✓</span><span class="pkg-link">${item.name}</span></div>
        <button class="pkg-remove" type="button" data-package="${item.name}" aria-label="Remove ${item.name}">✕</button>
      </div>
    `).join('')
    : '<p class="no-packages">No packages selected</p>';
  if (clearButton) clearButton.disabled = selected.length === 0 && !preEmploymentRequirementsCheckbox?.checked;
  sendEmailButton.disabled = selected.length === 0 && !preEmploymentRequirementsCheckbox?.checked;
  checkboxes.forEach(updatePackageItemUI);
  preEmploymentRequirementsCheckbox?.closest('.package-item')?.classList.toggle('checked', preEmploymentRequirementsCheckbox.checked);
}

function saveSelectedPackageState() {
  localStorage.setItem(
    selectedPackagesStorageKey,
    JSON.stringify(checkboxes.filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.dataset.package))
  );
}

async function loadMedicalForms() {
  const medicalFormsList = document.querySelector('.medical-forms-list');
  if (!medicalFormsList) return;
  try {
    const response = await fetch('Medical Forms/medical-forms.json', { cache: 'no-store' });
    if (!response.ok) return;
    const forms = await response.json();
    [
      { key: 'iloilo', title: 'ILOILO', forms: forms.filter((form, index) => index % 3 === 0) },
      { key: 'bohol', title: 'BOHOL', forms: forms.filter((form, index) => index % 3 === 1) }
    ].forEach((group) => {
      const validForms = group.forms.filter((form) => {
        const name = String(form.name || '').trim();
        return name && form.file && !/^Medical Package \d+$/i.test(name) && !checkboxes.some((checkbox) => checkbox.dataset.package === name);
      });
      if (!validForms.length) return;
      const heading = document.createElement('h3');
      heading.className = `medical-group-heading medical-group-${group.key}`;
      heading.textContent = group.title;
      medicalFormsList.appendChild(heading);
      validForms.forEach((form) => {
        const displayName = String(form.name).trim();
        const label = document.createElement('label');
        label.className = `package-item medical-${group.key}`;
        label.innerHTML = `<input type="checkbox" class="package-checkbox" data-package="${displayName}" data-link="Packages/?pdf=../Medical%20Forms/${encodeURIComponent(form.file)}" data-medical-file="${form.file}" data-prefill="medical" data-medical-column="${group.key}"><div class="package-checkbox-visual"></div><div class="package-info"><span class="package-name">${displayName}</span></div>`;
        medicalFormsList.appendChild(label);
        const checkbox = label.querySelector('.package-checkbox');
        checkboxes.push(checkbox);
        medicalCheckboxes.push(checkbox);
        checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
            medicalCheckboxes.forEach((medicalCheckbox) => {
              if (medicalCheckbox !== checkbox) medicalCheckbox.checked = false;
            });
          }
          updateSelectedPackages();
          updateRequiredFieldState();
          saveSelectedPackageState();
          savePortalState();
        });
      });
    });
    restorePortalState();
    updateMedicalFormsByLocation();
  } catch (error) {
    console.warn('Medical forms registry could not be loaded.', error);
  }
}

function updateMedicalFormsByLocation() {
  const location = String(locationInput.value || '').toLowerCase();
  const selectedGroup = location.startsWith('iloilo')
    ? 'iloilo'
    : location.startsWith('bohol')
      ? 'bohol'
      : null;
  let removedSelection = false;

  document.querySelectorAll('.medical-group-heading').forEach((heading) => {
    heading.hidden = Boolean(selectedGroup && !heading.classList.contains(`medical-group-${selectedGroup}`));
  });
  document.querySelectorAll('.medical-forms-list .package-item').forEach((item) => {
    const visible = !selectedGroup || item.classList.contains(`medical-${selectedGroup}`);
    if (!visible && item.querySelector('.package-checkbox')?.checked) {
      item.querySelector('.package-checkbox').checked = false;
      removedSelection = true;
    }
    item.hidden = !visible;
  });

  if (removedSelection) {
    updateSelectedPackages();
    saveSelectedPackageState();
    savePortalState();
  }
}

const baseRequiredPortalInputs = [
  document.querySelector('#candidateNameInput'),
  document.querySelector('#emailInput'),
  locationInput,
  accountInput,
  accountSubprocessInput,
  recruiterInput
];
const medicalRequiredPortalInputs = [
  contactNumberInput,
  dateOfIssuanceInput,
  medicalExamDateInput,
  roleInput,
  requestedPackageInput
];

function updateRequiredFieldState() {
  const medicalFieldsRequired = medicalCheckboxes.some((checkbox) => checkbox.checked);
  const requiredPortalInputs = medicalFieldsRequired
    ? [...baseRequiredPortalInputs, ...medicalRequiredPortalInputs]
    : baseRequiredPortalInputs;
  [...baseRequiredPortalInputs, ...medicalRequiredPortalInputs].forEach((input) => {
    input.closest('.form-group')?.classList.toggle(
      'field-invalid',
      requiredPortalInputs.includes(input) && !input.value.trim()
    );
  });
  document.querySelector('.selected-packages-card')?.classList.toggle(
    'field-invalid',
    !checkboxes.some((checkbox) => checkbox.checked) && !preEmploymentRequirementsCheckbox?.checked
  );
}

 [...baseRequiredPortalInputs, ...medicalRequiredPortalInputs].forEach((input) => {
  input.addEventListener('input', updateRequiredFieldState);
  input.addEventListener('change', updateRequiredFieldState);
});

candidateBirthdayInput?.addEventListener('input', (event) => {
  const input = event.target;
  const formattedValue = formatBirthdayInput(input.value);
  if (formattedValue !== input.value) input.value = formattedValue;
  updateCandidateAge();
  savePortalState();
});
candidateBirthdayInput?.addEventListener('paste', (event) => {
  const pastedText = (event.clipboardData || window.clipboardData)?.getData('text') || '';
  const normalized = normalizeDateInputValue(pastedText);
  if (!normalized) return;

  event.preventDefault();
  candidateBirthdayInput.value = normalized;
  updateCandidateAge();
  savePortalState();
});

const candidateNameInput = document.querySelector('#candidateNameInput');
const candidateAddressInputForFormatting = candidateAddressInput;

candidateNameInput?.addEventListener('input', (event) => {
  applyProperCaseToInput(event.target);
  savePortalState();
});
candidateAddressInputForFormatting?.addEventListener('input', (event) => {
  applyProperCaseToInput(event.target);
  savePortalState();
});
document.addEventListener('change', (event) => {
  const checkbox = event.target.closest('.package-checkbox');
  if (!checkbox) return;
  updateSelectedPackages();
  updateRequiredFieldState();
  saveSelectedPackageState();
  savePortalState();
});
preEmploymentRequirementsCheckbox?.addEventListener('change', () => {
  updateSelectedPackages();
  updateRequiredFieldState();
  savePortalState();
});
selectedContainer?.addEventListener('click', (event) => {
  const removeButton = event.target.closest('.pkg-remove');
  if (!removeButton) return;
  if (removeButton.dataset.requirements) {
    if (preEmploymentRequirementsCheckbox) preEmploymentRequirementsCheckbox.checked = false;
    updateSelectedPackages();
    updateRequiredFieldState();
    savePortalState();
    return;
  }
  const checkbox = checkboxes.find((item) => item.dataset.package === removeButton.dataset.package);
  if (checkbox) checkbox.checked = false;
  updateSelectedPackages();
  saveSelectedPackageState();
  updateRequiredFieldState();
  savePortalState();
});
clearButton?.addEventListener('click', () => {
  checkboxes.forEach((checkbox) => { checkbox.checked = false; });
  if (preEmploymentRequirementsCheckbox) preEmploymentRequirementsCheckbox.checked = false;
  updateSelectedPackages();
  saveSelectedPackageState();
  savePortalState();
});

function resetCandidateForm() {
  [
    document.querySelector('#candidateNameInput'),
    document.querySelector('#emailInput'),
    contactNumberInput,
    candidateBirthdayInput,
    candidateAgeInput,
    candidateAddressInput
  ].filter(Boolean).forEach((input) => { input.value = ''; });
  updateRequiredFieldState();
  savePortalState();
}

clearDataButton?.addEventListener('click', () => {
  resetCandidateForm();
  emailStatus.textContent = '';
  emailStatus.className = 'email-status';
});

sendEmailButton?.addEventListener('click', async () => {
  const name = document.querySelector('#candidateNameInput').value.trim();
  const email = document.querySelector('#emailInput').value.trim();
  const contactNumber = contactNumberInput.value.trim();
  const birthday = candidateBirthdayInput.value;
  const age = candidateAgeInput.value.trim();
  const address = candidateAddressInput.value.trim();
  const location = locationInput.value;
  const account = accountInput.value.trim();
  const startDate = startDateInput.value;
  const accountSubprocess = accountSubprocessInput.value.trim();
  const dateOfIssuance = dateOfIssuanceInput.value;
  const medicalExamDate = medicalExamDateInput.value;
  const role = roleInput.selectedOptions[0]?.textContent.trim() || roleInput.value;
  const requestedPackage = requestedPackageInput.value;
  const recruiter = recruiterInput.value;
  const sendPreEmploymentRequirements = Boolean(preEmploymentRequirementsCheckbox?.checked);
  const selectedPreEmploymentCheckboxes = preEmploymentCheckboxes.filter((checkbox) => checkbox.checked);
  const selectedMedicalCheckboxes = medicalCheckboxes.filter((checkbox) => checkbox.checked);
  const buildPortalLink = (relativeLink) => new URL(relativeLink, `${portalBaseUrl}/`);
  const packages = selectedPreEmploymentCheckboxes.map((checkbox) => ({
    name: checkbox.dataset.package,
    link: (() => {
    const link = buildPortalLink(checkbox.dataset.link);
      if (checkbox.dataset.prefill === 'medical') {
        link.searchParams.set('prefill', 'medical');
        link.searchParams.set('name', name);
        link.searchParams.set('contactNumber', contactNumber);
        link.searchParams.set('birthday', birthday);
        link.searchParams.set('dateOfIssuance', dateOfIssuance);
        link.searchParams.set('medicalExamDate', medicalExamDate);
        link.searchParams.set('requestedPackage', requestedPackage);
      }
      return link.href;
    })()
  }));
  const medicalFieldsRequired = selectedMedicalCheckboxes.length > 0;
  const missingCommonFields = !name || !email || !location || !account || !accountSubprocess || !recruiter;
  const missingMedicalFields = medicalFieldsRequired && (!contactNumber || !dateOfIssuance || !medicalExamDate || !role || !requestedPackage);
  if (missingCommonFields || missingMedicalFields || (!packages.length && !selectedMedicalCheckboxes.length && !sendPreEmploymentRequirements)) {
    updateRequiredFieldState();
    emailStatus.textContent = medicalFieldsRequired
      ? 'Complete name, email, contact number, location, recruiter, account, account subprocess, date of issuance, medical examination date, role, requested package, and package selection.'
      : 'Complete name, email, location, recruiter, account, account subprocess, and package selection.';
    emailStatus.className = 'email-status error';
    return;
  }
  updateRequiredFieldState();
  emailStatus.textContent = 'Sending email...';
  emailStatus.className = 'email-status sending';
  sendEmailButton.disabled = true;
    const historyPackages = [
      ...selectedPreEmploymentCheckboxes.map((checkbox) => ({
        name: checkbox.dataset.package,
        link: checkbox.dataset.link || '',
        prefill: checkbox.dataset.prefill || '',
        medicalFile: checkbox.dataset.medicalFile || ''
      })),
      ...selectedMedicalCheckboxes.map((checkbox) => ({
        name: checkbox.dataset.package,
        link: checkbox.dataset.link || '',
        prefill: checkbox.dataset.prefill || '',
        medicalFile: checkbox.dataset.medicalFile || ''
      }))
    ];
    const historyDetails = {
      account,
      accountSubprocess,
      startDate,
      position: role,
      contactNumber,
      birthday,
      age,
      address,
      dateOfIssuance,
      medicalExamDate,
      role,
      requestedPackage,
      recruiter,
      candidateInformation: {
        name,
        email,
        contactNumber,
        birthday,
        age,
        address,
        location,
        recruiter
      },
      otherInformation: {
        account,
        accountSubprocess,
        startDate
      },
      medicalInformation: {
        dateOfIssuance,
        medicalExamDate,
        role,
        requestedPackage
      }
    };
    const queueTypes = [
      packages.length ? 'Forms' : '',
      sendPreEmploymentRequirements ? 'Sending Requirements' : '',
      selectedMedicalCheckboxes.length ? 'Medical' : ''
    ].filter(Boolean).join(', ');
    enqueueEmailJob(async () => {
      const sendErrors = [];
      if (packages.length) {
        try {
          await sendPreEmploymentEmail({ name, email, contactNumber, birthday, age, address, location, account, startDate, accountSubprocess, medicalExamDate, role, requestedPackage, recruiter, packages });
        } catch (error) {
          sendErrors.push('pre-employment forms');
        }
      }
      if (sendPreEmploymentRequirements) {
        try {
          await sendAdditionalPreEmploymentEmail({ name, email, location, recruiter }, packages);
        } catch (error) {
          sendErrors.push('pre-employment requirements');
        }
      }
      if (selectedMedicalCheckboxes.length) {
        try {
          await sendMedicalFormEmail({ name, email, contactNumber, birthday, age, address, dateOfIssuance, medicalExamDate, requestedPackage, role, location, recruiter, account, startDate, accountSubprocess }, selectedMedicalCheckboxes);
        } catch (error) {
          console.error('Medical email request failed', error);
          sendErrors.push('medical');
        }
      }
      saveSentEmailHistory(name, email, location, historyPackages, false, historyDetails)
        .catch((historyError) => console.error('Could not save sent email history', historyError));
      if (sendErrors.length) console.error(`Queued email errors: ${sendErrors.join(', ')}`);
    }, { name, types: queueTypes });
    emailStatus.textContent = 'Queued for sending. Ready for the next candidate.';
    emailStatus.className = 'email-status success';
    window.setTimeout(() => {
      resetCandidateForm();
      emailStatus.textContent = 'Queued for sending. Ready for the next candidate.';
      emailStatus.className = 'email-status success';
      sendEmailButton.disabled = false;
    }, 2000);
});

function readCachedNotes() {
  try {
    const cachedNotes = JSON.parse(localStorage.getItem(notesCacheStorageKey) || '[]');
    return Array.isArray(cachedNotes) ? cachedNotes : [];
  } catch (error) {
    return [];
  }
}

function normalizeMedicalNoteKey(value) {
  return String(value || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

async function getMedicalNoteDetails(packageName) {
  const cachedNotes = readCachedNotes();
  let notes = cachedNotes;

  try {
    await portalFirebaseAuthReady;
    const snapshot = await portalFirestore.collection('sagiNotes').get();
    notes = snapshot.docs.map((document) => ({ id: document.id, ...document.data() }));
  } catch (error) {
    console.warn('Could not load medical notes from Firestore; using cached notes.', error);
  }

  const packageKey = normalizeMedicalNoteKey(packageName);
  const preferredNote = notes.find((note) => {
    const titleKey = normalizeMedicalNoteKey(note.title);
    const subjectKey = normalizeMedicalNoteKey(note.subject);
    return packageKey && (packageKey === titleKey || packageKey === subjectKey || titleKey === packageKey.replace('medical', ''));
  }) || {};

  return {
    noteTitle: String(preferredNote.title || '').trim(),
    noteSubject: String(preferredNote.subject || '').trim(),
    noteLocation: String(preferredNote.location || '').trim(),
    noteLink: String(preferredNote.link || '').trim()
  };
}

async function sendMedicalFormEmail(details, selectedMedicalCheckboxes) {
  if (medicalEmailEndpoint === 'PASTE_MEDICAL_WEB_APP_URL_HERE') {
    throw new Error('Medical email endpoint is not configured. Deploy Medical-Code.gs and add its web app URL to script.js.');
  }
  const pdfLib = await import('./vendor/pdf-lib.mjs');
  for (const checkbox of selectedMedicalCheckboxes) {
    const noteDetails = await getMedicalNoteDetails(checkbox.dataset.package);
    const medicalFile = checkbox.dataset.medicalFile;
    const response = await fetch(`./Medical Forms/${encodeURIComponent(medicalFile)}`, { cache: 'no-store' });
    if (!response.ok) throw new Error(`${checkbox.dataset.package} PDF could not be loaded.`);
    const pdfDocument = await pdfLib.PDFDocument.load(await response.arrayBuffer());
    const pdfForm = pdfDocument.getForm();
    const directValues = {
      fullname: details.name,
      patientname: details.name,
      name: details.name,
      email: details.email,
      emailaddress: details.email,
      contactnumber: details.contactNumber,
      birthday: formatMedicalDate(details.birthday),
      dateofbirth: formatMedicalDate(details.birthday),
      age: details.age,
      address: details.address,
      dateofissuance: formatMedicalDate(details.dateOfIssuance),
      dateofexaminationrequested: formatMedicalDate(details.medicalExamDate),
      dateofmedicalexamination: formatMedicalDate(details.medicalExamDate),
      dateofappointment: formatMedicalDate(details.medicalExamDate),
      appointmentdate: formatMedicalDate(details.medicalExamDate),
      medicalexamdate: formatMedicalDate(details.medicalExamDate),
      requestedpackage: details.requestedPackage,
      package: details.requestedPackage,
      role: details.role,
      position: details.role,
      location: details.location,
      account: details.account,
      accountsubprocess: details.accountSubprocess,
      subprocess: details.accountSubprocess,
      startdate: formatMedicalDate(details.startDate),
      recruiter: details.recruiter
    };
    const fallbackValues = [
      ['fullname', details.name],
      ['patientname', details.name],
      ['name', details.name],
      ['email', details.email],
      ['emailaddress', details.email],
      ['contactnumber', details.contactNumber],
      ['birthday', formatMedicalDate(details.birthday)],
      ['dateofbirth', formatMedicalDate(details.birthday)],
      ['age', details.age],
      ['address', details.address],
      ['dateofissuance', formatMedicalDate(details.dateOfIssuance)],
      ['dateofexaminationrequested', formatMedicalDate(details.medicalExamDate)],
      ['dateofmedicalexamination', formatMedicalDate(details.medicalExamDate)],
      ['dateofappointment', formatMedicalDate(details.medicalExamDate)],
      ['appointmentdate', formatMedicalDate(details.medicalExamDate)],
      ['medicalexamdate', formatMedicalDate(details.medicalExamDate)],
      ['requestedpackage', details.requestedPackage],
      ['package', details.requestedPackage],
      ['role', details.role],
      ['position', details.role],
      ['location', details.location],
      ['account', details.account],
      ['accountsubprocess', details.accountSubprocess],
      ['subprocess', details.accountSubprocess],
      ['startdate', formatMedicalDate(details.startDate)],
      ['recruiter', details.recruiter]
    ];

    const setMedicalTextField = (fieldNames, value) => {
      if (!value) return;
      for (const fieldName of fieldNames) {
        try {
          pdfForm.getTextField(fieldName).setText(value);
          return;
        } catch (error) {
        }
      }
    };

    setMedicalTextField(['Birthday', 'Date of Birth', 'Birth Date'], formatMedicalDate(details.birthday));
    setMedicalTextField(['Email', 'Email Address', 'EmailAddress'], details.email);
    setMedicalTextField(['Date of Medical Examination', 'Date of Appointment'], formatMedicalDate(details.medicalExamDate));
    setMedicalTextField(['Date of Issuance', 'Date of Issue'], formatMedicalDate(details.dateOfIssuance));
    setMedicalTextField(['Full Name', 'Name of Candidate', 'Patient Name'], details.name);
    setMedicalTextField(['Contact Number', 'Contact No.'], details.contactNumber);

    pdfForm.getFields().forEach((field) => {
      const fieldKey = field.getName().toLowerCase().replace(/[^a-z0-9]/g, '');
      const directValue = directValues[fieldKey];
      const fallbackValue = directValue
        ? null
        : fallbackValues.find(([key]) => fieldKey === key || fieldKey.includes(key))?.[1];
      const value = directValue ?? fallbackValue;
      if (value && typeof field.setText === 'function') field.setText(value);
    });
    pdfForm.updateFieldAppearances();
    pdfForm.flatten();
    const bytes = await pdfDocument.save();
    let binary = '';
    for (const byte of bytes) binary += String.fromCharCode(byte);
    const safeName = details.name.replace(/[\\/:*?"<>|]/g, '').trim() || 'Candidate';
    const filename = `${checkbox.dataset.package}_${safeName}.pdf`;
    const payload = {
      ...details,
      filename,
      pdfBase64: btoa(binary),
      noteTitle: noteDetails.noteTitle,
      noteSubject: noteDetails.noteSubject,
      noteLocation: noteDetails.noteLocation,
      noteLink: noteDetails.noteLink
    };
    await fetch(medicalEmailEndpoint, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    });
  }
}

function sendPreEmploymentEmail(payload) {
  return fetch(preEmploymentEmailEndpoint, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload)
  }).catch((error) => {
    console.error('Pre-employment email request failed after submission', error);
    throw error;
  });
}

function sendAdditionalPreEmploymentEmail(details, packages) {
  if (additionalPreEmploymentEmailEndpoint === 'PASTE_ADDITIONAL_PREEMPLOYMENT_WEB_APP_URL_HERE') {
    throw new Error('Additional pre-employment email endpoint is not configured.');
  }

  return fetch(additionalPreEmploymentEmailEndpoint, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ ...details, packages })
  }).catch((error) => {
    console.error('Additional pre-employment email request failed after submission', error);
    throw error;
  });
}

function isHistoryMedicalPackage(item) {
  return item.prefill === 'medical' || item.medicalFile || String(item.link || '').includes('Medical%20Forms') || String(item.link || '').includes('Medical Forms');
}

async function sendPreEmploymentPackageEmails(record) {
  const packages = (record.packages || []).filter((item) => !isHistoryMedicalPackage(item));
  const candidate = record.candidateInformation || {};
  const other = record.otherInformation || {};
  const medical = record.medicalInformation || {};
  const name = record.name || candidate.name || '';
  const email = record.email || candidate.email || '';
  const location = record.location || candidate.location || '';
  const recruiter = record.recruiter || candidate.recruiter || '';
  const payload = {
    name,
    email,
    location,
    contactNumber: record.contactNumber || candidate.contactNumber || '',
    birthday: record.birthday || candidate.birthday || '',
    age: record.age || candidate.age || '',
    address: record.address || candidate.address || '',
    account: record.account || other.account || '',
    startDate: record.startDate || other.startDate || '',
    accountSubprocess: record.accountSubprocess || other.accountSubprocess || '',
    medicalExamDate: record.medicalExamDate || medical.medicalExamDate || '',
    role: record.role || record.position || medical.role || '',
    requestedPackage: record.requestedPackage || medical.requestedPackage || '',
    recruiter,
    packages
  };
  if (!packages.length) return;
  await Promise.all([
    sendPreEmploymentEmail({ ...payload, isFollowUp: true }),
    sendAdditionalPreEmploymentEmail(
      { name: record.name, email: record.email, location: record.location, recruiter: record.recruiter || '' },
      packages
    )
  ]);
}

async function sendHistoryRecordEmails(record) {
  const candidate = record.candidateInformation || {};
  const other = record.otherInformation || {};
  const medical = record.medicalInformation || {};
  const medicalPackages = (record.packages || [])
    .filter(isHistoryMedicalPackage)
    .map((item) => ({
      dataset: {
        package: item.name,
        medicalFile: item.medicalFile || decodeURIComponent(new URL(item.link, window.location.href).searchParams.get('pdf') || '').replace('../Medical Forms/', ''),
        prefill: 'medical'
      }
    }));
  const errors = [];
  try {
    await sendPreEmploymentPackageEmails(record);
  } catch (error) {
    console.error('Could not resend pre-employment requirement email', error);
    errors.push('pre-employment requirements');
  }
  if (medicalPackages.length) {
    try {
      await sendMedicalFormEmail({
        name: record.name || candidate.name || '',
        email: record.email || candidate.email || '',
        contactNumber: record.contactNumber || candidate.contactNumber || '',
        birthday: record.birthday || candidate.birthday || '',
        age: record.age || candidate.age || '',
        address: record.address || candidate.address || '',
        dateOfIssuance: record.dateOfIssuance || medical.dateOfIssuance || '',
        medicalExamDate: record.medicalExamDate || medical.medicalExamDate || '',
        requestedPackage: record.requestedPackage || medical.requestedPackage || '',
        role: record.role || record.position || medical.role || '',
        location: record.location || candidate.location || '',
        recruiter: record.recruiter || candidate.recruiter || '',
        account: record.account || other.account || '',
        startDate: record.startDate || other.startDate || '',
        accountSubprocess: record.accountSubprocess || other.accountSubprocess || ''
      }, medicalPackages);
    } catch (error) {
      console.error('Could not resend medical email', error);
      errors.push('medical');
    }
  }
  if (errors.length) {
    throw new Error(`Could not resend ${errors.join(' and ')} email${errors.length > 1 ? 's' : ''}.`);
  }
}

document.querySelector('#historySearchInput')?.addEventListener('input', renderSentEmailHistory);
document.querySelector('#historyLocationFilter')?.addEventListener('input', renderSentEmailHistory);
document.querySelector('#historyAccountFilter')?.addEventListener('input', renderSentEmailHistory);
document.querySelector('#historyRecruiterFilter')?.addEventListener('input', renderSentEmailHistory);
document.querySelector('#historyStartDateFilter')?.addEventListener('change', renderSentEmailHistory);
document.querySelector('#historyExportStart')?.addEventListener('change', renderSentEmailHistory);
document.querySelector('#historyExportEnd')?.addEventListener('change', renderSentEmailHistory);
document.addEventListener('change', (event) => {
  if (!event.target.matches('.history-delete-checkbox')) return;
  const checkboxes = [...document.querySelectorAll('.history-delete-checkbox')];
  const selectAllButton = document.querySelector('#selectAllHistoryBtn');
  if (selectAllButton) {
    selectAllButton.textContent = checkboxes.length && checkboxes.every((checkbox) => checkbox.checked) ? 'Clear All' : 'Select All';
  }
  const deleteButton = document.querySelector('#deleteSelectedHistoryBtn');
  if (deleteButton) deleteButton.disabled = !document.querySelector('.history-delete-checkbox:checked');
});
document.querySelector('#selectAllHistoryBtn')?.addEventListener('click', (event) => {
  const checkboxes = [...document.querySelectorAll('#sentEmailHistoryBody .history-delete-checkbox')];
  const shouldSelect = checkboxes.some((checkbox) => !checkbox.checked);
  checkboxes.forEach((checkbox) => { checkbox.checked = shouldSelect; });
  event.currentTarget.textContent = shouldSelect ? 'Clear All' : 'Select All';
  const deleteButton = document.querySelector('#deleteSelectedHistoryBtn');
  if (deleteButton) deleteButton.disabled = !shouldSelect;
});
document.querySelector('#deleteSelectedHistoryBtn')?.addEventListener('click', async (event) => {
  const button = event.currentTarget;
  const status = document.querySelector('#historyDeleteStatus');
  const ids = [...document.querySelectorAll('.history-delete-checkbox:checked')].map((checkbox) => checkbox.dataset.recordId);
  if (!ids.length) return;
  if (!confirm(`Delete ${ids.length} selected history record${ids.length === 1 ? '' : 's'}?`)) return;
  button.disabled = true;
  status.textContent = 'Deleting selected records...';
  status.className = 'history-delete-status deleting';
  try {
    await portalFirebaseAuthReady;
    const batch = portalFirestore.batch();
    ids.forEach((id) => batch.delete(portalFirestore.collection('sentHistory').doc(id)));
    await batch.commit();
    status.textContent = `${ids.length} record${ids.length === 1 ? '' : 's'} deleted successfully.`;
    status.className = 'history-delete-status success';
  } catch (error) {
    console.error('Could not delete selected history records', error);
    status.textContent = error.code === 'permission-denied'
      ? 'Delete denied by Firestore rules. Allow delete for signed-in users.'
      : 'Could not delete selected records.';
    status.className = 'history-delete-status error';
  } finally {
    button.disabled = false;
  }
});
document.querySelector('#historyExportBtn')?.addEventListener('click', () => {
  const records = getFilteredHistoryRecords();
  if (!records.length) {
    document.querySelector('#historyExportStatus').textContent = 'No records found.';
    return;
  }
  const rows = [
    ['#', 'Name', 'Email', 'Contact Number', 'Account', 'Account Subprocess', 'Recruiter', 'Start Date', 'Position', 'Location', 'Date and Time', 'Packages'],
    ...records.map((record, index) => [
      index + 1,
      record.name,
      record.email,
      record.contactNumber || record.candidateInformation?.contactNumber,
      record.account,
      record.accountSubprocess,
      record.recruiter || record.candidateInformation?.recruiter,
      formatHistoryDate(record.startDate),
      formatHistoryPosition(record.position || record.role),
      record.location,
      record.date,
      (record.packages || []).map((item) => item.name).join(' | ')
    ])
  ];
  const csv = rows.map((row) => row.map((value) => `"${String(value || '').replaceAll('"', '""')}"`).join(',')).join('\n');
  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  link.download = 'sent-email-history.csv';
  link.click();
  URL.revokeObjectURL(link.href);
  document.querySelector('#historyExportStatus').textContent = `${records.length} record(s) exported.`;
});
document.querySelector('#applicantDetailsSearch')?.addEventListener('input', renderApplicantDetails);
document.querySelector('#refreshApplicantDetailsBtn')?.addEventListener('click', initializeApplicantDetails);
document.querySelector('#exportApplicantDetailsBtn')?.addEventListener('click', exportApplicantDetails);
document.querySelector('#selectAllApplicantDetailsBtn')?.addEventListener('click', () => {
  const checkboxes = [...document.querySelectorAll('.applicant-delete-checkbox')];
  const shouldSelect = checkboxes.some((checkbox) => !checkbox.checked);
  checkboxes.forEach((checkbox) => { checkbox.checked = shouldSelect; });
  updateApplicantDetailsActions();
});
document.querySelector('#deleteSelectedApplicantDetailsBtn')?.addEventListener('click', async (event) => {
  const button = event.currentTarget;
  const ids = [...document.querySelectorAll('.applicant-delete-checkbox:checked')].map((checkbox) => checkbox.dataset.recordId);
  if (!ids.length) return;
  const password = prompt('Enter the password to delete selected applicant records:');
  if (password !== applicantDeletePassword) {
    document.querySelector('#applicantDetailsStatus').textContent = 'Incorrect password. No records were deleted.';
    return;
  }
  if (!confirm(`Delete ${ids.length} selected applicant record${ids.length === 1 ? '' : 's'}?`)) return;
  button.disabled = true;
  try {
    await portalFirebaseAuthReady;
    const batch = portalFirestore.batch();
    ids.forEach((id) => batch.delete(portalFirestore.collection('sentHistory').doc(id)));
    await batch.commit();
  } catch (error) {
    console.error('Could not delete selected applicant details', error);
    document.querySelector('#applicantDetailsStatus').textContent = 'Could not delete selected records.';
    button.disabled = false;
  }
});

function formatMedicalDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value || '');
  return `${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}/${date.getFullYear()}`;
}

function syncMobileQueueHeight() {
  const selectedCard = document.querySelector('.selected-packages-card');
  const queuePanel = document.querySelector('.email-queue-panel');
  if (!selectedCard || !queuePanel) return;
  if (window.matchMedia('(max-width: 720px)').matches) {
    queuePanel.style.minHeight = `${selectedCard.getBoundingClientRect().height}px`;
  } else {
    queuePanel.style.removeProperty('min-height');
  }
}

const selectedCardResizeObserver = typeof ResizeObserver === 'undefined'
  ? null
  : new ResizeObserver(syncMobileQueueHeight);
selectedCardResizeObserver?.observe(document.querySelector('.selected-packages-card'));
window.addEventListener('resize', syncMobileQueueHeight);
syncMobileQueueHeight();

closeEsignButton?.addEventListener('click', closeEsignForm);
esignModal?.addEventListener('click', (event) => {
  if (event.target === esignModal) closeEsignForm();
});

loadPackageForms();
updateSelectedPackages();
loadMedicalForms();
initializeSentEmailHistory();
initializeApplicantDetails();
initializeHistoryTrendToggle();
const historyTrendMonthInput = document.querySelector('#historyTrendMonthInput');
if (historyTrendMonthInput) {
  historyTrendMonthInput.value = historyDateKey(Date.now()).slice(0, 7);
  historyTrendMonthInput.addEventListener('change', renderHistoryTrendGraph);
}
