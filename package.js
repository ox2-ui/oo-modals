Package.describe({
  name: 'ox2:modals',
  version: '3.4.0',
  // Brief, one-line summary of the package.
  summary: 'DO NOT USE',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: ''
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.export('ooModalOpen');
  api.export('ooModalClose');
  api.export('ooModalScrollOpen');
  api.export('ooModalScrollClose');
  // Core
  api.use([
    'templating',
    'less'
    ]);
  // 3rd party
  api.use([
    'mquandalle:jade@0.4.9'
    ]);
  api.addFiles('lib/oo-modals.jade', C);
  api.addFiles('lib/oo-modals.js', C);
  api.addFiles('lib/oo-modals.less', C);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:modals');
  api.addFiles('tests/oo-modals-tests.js');
});
