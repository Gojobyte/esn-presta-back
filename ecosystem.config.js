module.exports = {
  apps: [
    {
      name: "esn-presta-back",
      script: "index.js",                 // adapte si c'est server.js/app.js
      cwd: "/opt/apps/esn-presta-back",
      env: {
        NODE_ENV: "production",
        PORT: 3001
      }
    }
  ]
}
