module.exports = {
  apps: [
    {
      name: "testing",
      script: "./src/index.js",
      env: {
        PORT: 3991,
      },
      time: true,
    },
  ],
};
