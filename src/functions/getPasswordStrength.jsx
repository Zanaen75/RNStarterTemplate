export default function getPasswordStrength(password) {
  if (password.length < 8) {
    return "Weak";
  } else if (
    /\d/.test(password) &&
    /[a-zA-Z]/.test(password) &&
    /[!@#$%^&*]/.test(password)
  ) {
    return "Super Strong";
  } else if (/\d/.test(password) && /[a-zA-Z]/.test(password)) {
    return "Strong";
  } else {
    return "Moderate";
  }
}
