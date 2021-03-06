Package.describe({
  summary: "Some utilities to handle with geo coordinates in Meteor.",
  documentation: "This project is useful to calculate distance between two points, compute heading, and more. To read the full documentation please visit GitHub project."
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
