export const validateForm = (user) => {
  let error = "";

  if (!user.password.trim()) {
    error = "Password is required.";
  } else if (user.password.length < 6) {
    error = "Password must be at least 6 characters.";
  }

  if (!user.email.trim()) {
    error = "Email is required.";
  } else if (
    !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(user.email)
  ) {
    error = "Invalid email format.";
  }

  if (!user.login.trim()) {
    error = "Login is required.";
  } else if (user.login.length < 3) {
    error = "Login must be at least 3 characters.";
  }

  return error;
};
