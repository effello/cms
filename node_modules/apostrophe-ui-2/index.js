var extend = require('extend');

module.exports = ui2;

function ui2(options, callback) {
  return new ui2.Ui2(options, callback);
}

ui2.Ui2 = function(options, callback) {
  var self = this;
  self._apos = options.apos;
  // Mix in the ability to serve assets and templates
  self._apos.mixinModuleAssets(self, 'ui-2', __dirname, options);

  // Not until we actually have one
  // self.pushAsset('stylesheet', 'editor', { when: 'user' });
  self.pushAsset('stylesheet', 'content', { when: 'always' });
  self.pushAsset('script', 'ui-2', { when: 'always' });

  return process.nextTick(function() {
    return callback(null);
  });
};

