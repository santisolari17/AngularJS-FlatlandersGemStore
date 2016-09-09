System.config({
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "app:*": "app/*",
    "node_modules:*": "node_modules/*"
  },

  map: {
    "gemstoreApp": "app:app",
    "angular": "node_modules:angular/angular.min",
    "traceur": "node_modules:traceur/bin/traceur",
    "traceur-runtime": "node_modules:traceur/bin/traceur-runtime"
  }

});
