module.exports = {
  apps: [
    {
      name: "react-travelmap",
      script: "npx",
      args: "serve -s build",
      watch: true,
      env: {
        NODE_ENV: "production",
        PORT: 5005,
      },
    },
  ],
};
