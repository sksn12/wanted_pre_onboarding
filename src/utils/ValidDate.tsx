export const ValidData = (email: string) => {
  return !!email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.com$/gi);
};
