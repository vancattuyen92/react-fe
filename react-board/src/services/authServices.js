class AuthService {
  setStorage(key, value) {
    window.sessionStorage.setItem(key, value)
  }

  getStorage(key) {
    const value = window.sessionStorage.getItem(key) || null;
    return value;
  }
}

const authService = new AuthService();

export default authService;