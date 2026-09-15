(() => {
  const loginForm = document.querySelector('#portalLoginForm');
  const loginView = document.querySelector('#portalLoginView');
  const loginMessage = document.querySelector('#portalLoginMessage');
  const loginButton = loginForm.querySelector('button');
  const resetPasswordButton = document.querySelector('#portalResetPassword');
  const logoutButton = document.querySelector('#portalLogoutBtn');
  const adminLogoutLink = document.querySelector('#adminLogoutLink');
  const portalSessionKey = 'sagility-portal-authenticated';
  const portalSessionStartedKey = 'sagility-portal-session-started';
  const adminLogoutPassword = 'Sagility_1';
  const globalLogoutDocument = 'portalControl/session';
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
  const firestore = loginApp.firestore();

  function clearPortalSession() {
    sessionStorage.removeItem(portalSessionKey);
    sessionStorage.removeItem(portalSessionStartedKey);
  }

  async function logOutCurrentDevice() {
    clearPortalSession();
    await auth.signOut();
    window.location.reload();
  }

  async function logOutAllDevices() {
    await firestore.doc(globalLogoutDocument).set({
      logoutAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    await logOutCurrentDevice();
  }

  function watchGlobalLogout() {
    firestore.doc(globalLogoutDocument).onSnapshot(snapshot => {
      if (sessionStorage.getItem(portalSessionKey) !== 'true') return;
      const logoutAt = snapshot.data()?.logoutAt;
      const sessionStartedAt = Number(sessionStorage.getItem(portalSessionStartedKey));
      if (logoutAt?.toMillis && logoutAt.toMillis() > sessionStartedAt) {
        logOutCurrentDevice();
      }
    });
  }

  function isSameCalendarDay(firstTimestamp, secondTimestamp) {
    const firstDate = new Date(firstTimestamp);
    const secondDate = new Date(secondTimestamp);
    return firstDate.getFullYear() === secondDate.getFullYear()
      && firstDate.getMonth() === secondDate.getMonth()
      && firstDate.getDate() === secondDate.getDate();
  }

  function getNextDailyLogoutTime() {
    const logoutTime = new Date();
    logoutTime.setHours(23, 59, 0, 0);
    if (logoutTime.getTime() <= Date.now()) {
      logoutTime.setDate(logoutTime.getDate() + 1);
    }
    return logoutTime.getTime();
  }

  function scheduleSessionExpiry() {
    const startedAt = Number(sessionStorage.getItem(portalSessionStartedKey));
    const now = Date.now();
    const remaining = getNextDailyLogoutTime() - now;
    if (!Number.isFinite(startedAt) || !isSameCalendarDay(startedAt, now) || remaining <= 0) {
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
    const sessionIsValid = Number.isFinite(startedAt) && isSameCalendarDay(startedAt, Date.now());
    if (sessionIsValid) {
      unlockPortal();
      watchGlobalLogout();
    }
    else {
      clearPortalSession();
      auth.signOut();
    }
  }

  logoutButton.addEventListener('click', logOutCurrentDevice);

  adminLogoutLink.addEventListener('click', async event => {
    event.preventDefault();
    const password = window.prompt('Enter the admin logout password:');
    if (password === null) return;
    if (password !== adminLogoutPassword) {
      window.alert('Incorrect admin logout password.');
      return;
    }
    try {
      await logOutAllDevices();
    } catch {
      window.alert('Unable to log out all devices. Check the Firebase rules.');
    }
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
      watchGlobalLogout();
    } catch (error) {
      loginMessage.textContent = 'Incorrect email or password.';
      loginButton.disabled = false;
      loginButton.firstChild.textContent = 'Log in ';
    }
  });
})();