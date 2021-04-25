import Auth from "node-jwt-auth";
import credentials from "../credentials.js";

const { ACCESS_SECRET, REFRESH_SECRET } = credentials.auth;

const mapUserToPayload = (user) => {
  return {
    login: user.login,
  };
};

const mapUserToHashed = (user) => {
  return user.password;
};

const mapPayloadToUser = async (payload) => {
  const user = {
    login: payload.login,
  };

  return user;
};

const auth = new Auth.default({
  accessSecret: ACCESS_SECRET,
  refreshSecret: REFRESH_SECRET,
  mapUserToPayload,
  mapUserToHashed,
  mapPayloadToUser,
});

export default auth;
