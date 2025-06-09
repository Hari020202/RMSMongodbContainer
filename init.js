db = db.getSiblingDB('rmsdb');  // Switch to rmsdb
db.createUser({
  user: "rms",
  pwd: "rms",
  roles: [
    { role: "readWrite", db: "rmsdb" }
  ]
});
