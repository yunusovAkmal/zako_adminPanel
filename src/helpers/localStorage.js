export const SetItem = (token) => {
  localStorage.setItem("token", token);
};

export const GetItem = () => {
  return localStorage.getItem("token");
};

export const RemoveItem = () => {
  localStorage.removeItem("token");
};
