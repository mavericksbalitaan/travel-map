module.exports = {
  apps: [
    {
      name: "react-travelmap",
      script: "npx",
      args: "serve -s build -p 5004",
      env: {
	      NODE_ENV: "production"
      },
    },
  ],
};
