import "core-js";
import "regenerator-runtime";
import Auth from "node-jwt-auth";

const ACCESS_SECRET = process.env.ACCESS_SECRET;
const REFRESH_SECRET = process.env.REFRESH_SECRET;

const mapUserToPayload = (user) => {
  return {
    user: {
      id: user._id,
      login: user.login,
    },
  };
};

const mapUserToHashed = (user) => {
  return user.password;
};

const mapPayloadToUser = (payload) => {
  const user = {
    id: payload.user.id,
    login: payload.user.login,
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
