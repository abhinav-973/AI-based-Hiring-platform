export const login = (role) => {
  localStorage.setItem("auth", JSON.stringify({ role }));
};

export const logout = () => {
  localStorage.removeItem("auth");
};

export const getAuth = () => {
  const data = localStorage.getItem("auth");
  return data ? JSON.parse(data) : null;
};
