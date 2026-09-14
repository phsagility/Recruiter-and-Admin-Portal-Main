(() => {
  const loginForm = document.querySelector('#portalLoginForm');
  const loginView = document.querySelector('#portalLoginView');
  const loginMessage = document.querySelector('#portalLoginMessage');
  const loginButton = loginForm.querySelector('button');
  const resetPasswordButton = document.querySelector('#portalResetPassword');
  const logoutButton = document.querySelector('#portalLogoutBtn');
  const portalSessionKey = 'sagility-portal-authenticated';
  const portalSessionStartedKey = 'sagility-portal-session-started';
  const portalSessionDuration = 5 * 60 * 60 * 1000;
  const firebaseConfig = {
    apiKey: 'AIzaSyBAy6P6iU18RjMfamovnptmO0gMRMNhJTc',
    authDomain: 'sagility-notes.firebaseapp.com',
    projectId: 'sagility-notes',
    storageBucket: 'sagility-notes.firebasestorage.app',
    messagingSenderId: '1028959325040',
    appId: '1:1028959325040:web:a35d6206c77c4087fc5db5',
    measurementId: 'G-J8FTL3YZFD'
  };

  const loginApp = firebase.initializeApp(firebaseConfig, 'portal-login');
  const auth = loginApp.auth();

  function clearPortalSession() {
    sessionStorage.removeItem(portalSessionKey);
    sessionStorage.removeItem(portalSessionStartedKey);
  }

  function scheduleSessionExpiry() {
    const startedAt = Number(sessionStorage.getItem(portalSessionStartedKey));
    const remaining = portalSessionDuration - (Date.now() - startedAt);
    if (!Number.isFinite(startedAt) || remaining <= 0) {
      clearPortalSession();
      auth.signOut();
      window.location.reload();
      return;
    }
    window.setTimeout(async () => {
      clearPortalSession();
      await auth.signOut();
      window.location.reload();
    }, remaining);
  }

  function unlockPortal() {
    document.documentElement.classList.remove('portal-login-locked');
    document.body.classList.remove('portal-locked');
    loginView.remove();
    scheduleSessionExpiry();
  }

  if (sessionStorage.getItem(portalSessionKey) === 'true') {
    const startedAt = Number(sessionStorage.getItem(portalSessionStartedKey));
    const sessionIsValid = Number.isFinite(startedAt) && Date.now() - startedAt < portalSessionDuration;
    if (sessionIsValid) unlockPortal();
    else clearPortalSession();
  }

  logoutButton.addEventListener('click', async () => {
    clearPortalSession();
    await auth.signOut();
    window.location.reload();
  });

  resetPasswordButton.addEventListener('click', async () => {
    const email = document.querySelector('#portalLoginEmail').value.trim().toLowerCase();
    if (!email) {
      loginMessage.textContent = 'Enter your company email first.';
      return;
    }
    resetPasswordButton.disabled = true;
    loginMessage.textContent = 'Sending reset email...';
    try {
      await auth.sendPasswordResetEmail(email);
      loginMessage.classList.add('is-success');
      loginMessage.textContent = 'Password reset email sent. Check your inbox.';
    } catch (error) {
      loginMessage.classList.remove('is-success');
      loginMessage.textContent = 'Unable to send the reset email. Check the email address.';
    } finally {
      resetPasswordButton.disabled = false;
    }
  });

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.querySelector('#portalLoginEmail').value.trim().toLowerCase();
    const password = document.querySelector('#portalLoginPassword').value;
    loginMessage.textContent = '';
    loginButton.disabled = true;
    loginButton.firstChild.textContent = 'Signing in... ';

    try {
      await auth.signInWithEmailAndPassword(email, password);
      sessionStorage.setItem(portalSessionKey, 'true');
      sessionStorage.setItem(portalSessionStartedKey, String(Date.now()));
      unlockPortal();
    } catch (error) {
      loginMessage.textContent = 'Incorrect email or password.';
      loginButton.disabled = false;
      loginButton.firstChild.textContent = 'Log in ';
    }
  });
})();