const firebaseConfig = {
  apiKey: 'AIzaSyBAy6P6iU18RjMfamovnptmO0gMRMNhJTc',
  authDomain: 'sagility-notes.firebaseapp.com',
  projectId: 'sagility-notes',
  storageBucket: 'sagility-notes.firebasestorage.app',
  messagingSenderId: '1028959325040',
  appId: '1:1028959325040:web:a35d6206c77c4087fc5db5',
  measurementId: 'G-J8FTL3YZFD'
};

const form = document.querySelector('#applicantForm');
const message = document.querySelector('#formMessage');
let firestore;
let firebaseReady = false;

function setMessage(text, isError = false) {
  message.textContent = text;
  message.classList.toggle('error', isError);
}

function normalizeProperCaseName(value) {
  if (value === null || value === undefined) return '';
  const raw = String(value).trim();
  if (!raw) return '';
  return raw
    .toLowerCase()
    .replace(/(^|\s|[-/])([a-z0-9])/g, (match, prefix, char) => prefix + char.toUpperCase());
}

function collectApplicant() {
  const data = Object.fromEntries(new FormData(form).entries());
  delete data.privacyConsent;
  const normalizedFields = {
    completeName: normalizeProperCaseName(data.completeName),
    motherLastName: normalizeProperCaseName(data.motherLastName),
    motherFirstName: normalizeProperCaseName(data.motherFirstName),
    motherMiddleName: normalizeProperCaseName(data.motherMiddleName),
    motherSuffix: normalizeProperCaseName(data.motherSuffix)
  };
  return {
    ...data,
    ...normalizedFields,
    source: 'applicant-details-survey',
    privacyConsent: true,
    submittedAt: new Date().toISOString()
  };
}

const properNameFieldNames = ['completeName', 'motherLastName', 'motherFirstName', 'motherMiddleName', 'motherSuffix'];

properNameFieldNames.forEach((fieldName) => {
  const field = form.querySelector(`[name="${fieldName}"]`);
  if (!field) return;
  field.addEventListener('input', () => {
    field.value = normalizeProperCaseName(field.value);
  });
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const submitButton = form.querySelector('.submit-button');
  submitButton.disabled = true;
  submitButton.querySelector('span').textContent = 'Submitting...';
  try {
    if (!firebaseReady) throw new Error('Firebase is not ready');
    await firestore.collection('sentHistory').add(collectApplicant());
    setMessage('Thank you. Your applicant details were submitted securely.');
    form.reset();
  } catch (error) {
    console.error('Unable to save applicant details', error);
    setMessage('We could not submit your details. Please try again.', true);
  } finally {
    submitButton.disabled = false;
    submitButton.querySelector('span').textContent = 'Submit details';
  }
});

document.querySelector('#startOver').addEventListener('click', () => setMessage(''));

function initializeFirebase() {
  const status = document.querySelector('#connectionStatus');
  const dot = document.querySelector('#connectionDot');
  try {
    const app = firebase.initializeApp(firebaseConfig);
    firestore = app.firestore();
    firebase.auth().signInAnonymously().then(() => {
      firebaseReady = true;
      status.textContent = 'Ready for secure submission';
    }).catch(() => {
      status.textContent = 'Unable to connect securely';
      dot.style.background = '#d35849';
    });
  } catch (error) {
    status.textContent = 'Unable to connect securely';
    dot.style.background = '#d35849';
  }
}

initializeFirebase();
