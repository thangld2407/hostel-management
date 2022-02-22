import Cookies from "js-cookie";

export function getToken(TokenKey) {
  return Cookies.get(TokenKey);
}

export function setToken(token, TokenKey) {
  return Cookies.set(TokenKey, token);
}

export function removeToken(TokenKey) {
  return Cookies.remove(TokenKey);
}

export function clearCookie() {
  return Object.keys(Cookies.get()).forEach((tokenName) =>
    Cookies.remove(tokenName)
  );
}
