=======================
# Stack101 JS Starter #
=======================

Directory Structure:
=======================
├── app/          // Your code here !
├── assets/       // All your static stuff goes here !
│   ├── css         // CSS assets pre-compile, pre-minify
│   ├── img         // Imgs pre-minified
│   └── js          // JS pre-compiled, pre-uglify
├── bin/            // http server startup + scripts
├── data/         // For text dbs or the like, contents ignored by Git
├── gulp/         // Gulp stuff
│   ├── tasks/      // Gulp tasks
│   └── index.js    // Gulp entry point
├── lib/          // Reusable/3rd party libs
├── node_modules  // Ignored by git
├── public/       // Build dirs
│   ├── css         // Gulp output dir for compiled and minified CSS
│   ├── img         // Gulp output dir for minified Imgs
│   └── js          // Gulp output dir for compiled and uglified JS
├── routes/       // Routes/Controllers
│   ├── ctrls/      // Throw your routes/controllers here. One file per site func recommended.
│   └── index.js    // Routes entry point
├── src/          // Pre-compiled JS
├── test/         // Tests
├── views/        // Templates and views
├── README.md
├── LICENSE
├── app.js        // App entry point
├── package.json
├── .gitignore    // Don't forget to customize this
└── .travis.yml   // Don't forget to customize this

Packages:
=======================
+ APP
  + express
  + express-session
+ TEMPLATES
  + ejs
+ SERVER / SEC
  + compression ??
  + helmet
+ UTIL
  + lodash
  + moment
  + q
  + request
  + saffy
  + validator
+ DEV / PROD
  + babel
  + browserify
  + browsersync
  + gulp
  + uglify-js
  + minify-css
  + webpack
+ TESTS
  + jshint
    + jshint-stylish
  + karma
  + mocha
  + chai
  + sinon
  + travis (just the .travis.yml file)
  + istanbul


