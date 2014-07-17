// webpack configuration for the angular-seed project using the
//angular-webpack-plugin.
var path = require('path');
var AngularPlugin = require('angular-webpack-plugin');


module.exports = {
  // The entrypoint module is 'myApp' in angular module names, but is in the
  // app/js/app.js file - so we have an alias below.
  entry: 'myApp',
  output: {
    path: 'app',
    filename: 'app.min.js'
  },
  resolve: {
    root: [
      // We want roots to resolve the app code:
      path.resolve('app', 'js'),
      // and the bower components:
      path.resolve('app', 'bower_components')],
    alias: {
      // This one first to match just the entrypoint module.
      // We only need this because the module name doesn't match the file name.
      myApp$: 'myApp/app',
      // This one maps all our modules called 'myApp.something' to the app/js
      // directory
      myApp: path.resolve('app', 'js'),
      // This is also needed because the module name doesn't match the file name
      // but we don't need to locate the file because it is a bower component
      // with a file name the same as the directory (component) name:
      //  bower_components/angular-route/angular-route
      ngRoute$: 'angular-route'
    }
  },
  plugins: [
    // The angular-webpack-plugin will:
    // - make the angular variable available by importing the 'angular' module
    //   whenever it is seen in the code.
    // - treat angular.module() dependencies as requires
    // - try to resolve modules using angular conventions.
    new AngularPlugin()
  ]
};
