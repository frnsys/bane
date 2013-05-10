(function() {
  require.config({
    deps: ["../vendor/jam/require.config", "../app/main"],
    paths: {
      "lodash": "../vendor/jam/lodash/dist/lodash.underscore",
      "jade": "../vendor/jam/jade-runtime/jade.runtime"
    },
    map: {
      "*": {
        "underscore": "lodash"
      }
    },
    shim: {}
  });

}).call(this);
