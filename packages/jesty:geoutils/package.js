Package.describe({
  summary: "",
  version: "0.1.0",
  name: "jesty:geoutils",
  git: "https://github.com/jesty/geoutils-meteor.git",
});
 


Package.on_use(function(api){
  api.add_files("geoutils.js", "client");
  api.add_files("geoutils.js", "server");
  api.export('geoutils', 'client');
  api.export('geoutils', 'server');
});
