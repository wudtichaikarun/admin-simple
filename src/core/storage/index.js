import jwtDecode from "jwt-decode";

const PREFIX = process.env.REACT_APP_LOCAL_STORAGE_PREFIX;

const tryToParseJSON = str => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return str;
  }
};

const setItem = (key, value, config = {}) => {
  const computeKey = config.isGlobal ? key : `${PREFIX}_${key}`;
  // eslint-disable-next-line no-unused-expressions
  config.isSession
    ? sessionStorage.setItem(
        computeKey,
        typeof value === "object" ? JSON.stringify(value) : value
      )
    : localStorage.setItem(
        computeKey,
        typeof value === "object" ? JSON.stringify(value) : value
      );
};

const getStorageItem = (key, isSession) =>
  isSession ? sessionStorage.getItem(key) : localStorage.getItem(key);

const getItem = (key, config = {}) => {
  let value;
  value =
    !config.isGlobal && getStorageItem(`${PREFIX}_${key}`, config.isSession);

  if (config.isGlobal || !value) {
    value = getStorageItem(key, config.isSession);
  }
  return tryToParseJSON(value);
};

const removeItem = (key, config = {}) => {
  const computeKey = config.isGlobal ? key : `${PREFIX}_${key}`;
  // eslint-disable-next-line no-unused-expressions
  config.isSession
    ? sessionStorage.removeItem(computeKey)
    : localStorage.removeItem(computeKey);
};

type PayloadType = "companyId" | "email" | "permissions" | "userId";

const getTokenPayload = (payloadType: PayloadType) => {
  const [token] = getItem(`${PREFIX}_token`, { isSession: false })
    .split(" ")
    .slice(1);
  const payload = jwtDecode(token);
  const [role] = payload.role;

  const payloads = {
    companyId: payload.companyId,
    email: payload.email,
    permissions: role.permissions,
    userId: payload.userId
  };

  return payloads[payloadType];
};

export default {
  getTokenPayload,
  setItem,
  getItem,
  removeItem
};
