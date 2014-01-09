describe('Zepto-compatible jQuery `cssDetect` Plugin', function() {
  'use strict';

  var div;

  beforeEach(function() {
    div = document.createElement('div');
    document.body.appendChild(div);
  });
  afterEach(function() {
    document.body.removeChild(div);
  });

  it('detects established properties with no prefixes', function() {
    expect($.cssDetect('display')).toBe(true);
  });

  it('detects camelCase property names', function() {
    expect($.cssDetect('textAlign')).toBe(true);
  });

  it('detects hyphenated property names', function() {
    expect($.cssDetect('text-align')).toBe(true);
  });

  it('correctly returns false for bogus properties', function() {
    expect($.cssDetect('asdfe34-s$')).toBe(false);
  });

  it('detects properties with vendor prefixes', function() {
    var isSupported = (function() {
      var prefixes = ['ms','o','moz','webkit'],
        isSupported = false;

      for (var i = prefixes.length - 1; i >= 0; i -= 1) {

        if (typeof div.style[prefixes[i] + 'Animation'] !== 'undefined') {
          isSupported = true;
        }
      }

      return isSupported;
    })();

    expect($.cssDetect('animation')).toBe(isSupported);
  });
});