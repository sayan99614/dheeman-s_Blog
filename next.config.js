const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      swcMinify: true,
      env: {
        dataurl: "mongodb://localhost:27017",
      },
    };
  }
  return {
    env: {
      dataurl:
        "mongodb+srv://dheemanpati99:thisisdheemanpati@cluster0.vlegqyc.mongodb.net/?retryWrites=true&w=majority",
    },
  };
};
