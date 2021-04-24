import "node-jwt-auth";

const ACCESS_SECRET = "analtoy";
const REFRESH_SECRET = "gayorgy";

const auth = new Auth({
  accessSecret: ACCESS_SECRET,
  refreshSecret: REFRESH_SECRET,
  mapUserToPayload,
  mapUserToHashed,
  mapPayloadToUser,
});

const mapUserToPayload = (user) => {
  return {
    login: user.login,
  };
};

const mapUserToHashed = (user) => {
  return user.password;
};

const mapPayloadToUser = (payload) => {
  const user = {
    login: payload.login,
  };

  return user;
};

module.exports = auth;
