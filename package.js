Package.describe({
  name: 'ox2:modals',
  summary: 'Overlay modals',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.export('ooModalOpen');
  api.export('ooModalClose');
  api.export('ooModalScrollOpen');
  api.export('ooModalScrollClose');
  // Core
  api.use([
    'templating'
    ]);
  // 3rd party
  api.use([
    'lauricio:less-autoprefixer@1.0.7','mquandalle:jade@0.4.1'
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
