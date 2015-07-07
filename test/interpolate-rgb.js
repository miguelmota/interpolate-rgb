var test = require('tape');
var interpolateRGB = require('../interpolate-rgb');

test('interpolateRGB', function (t) {
  'use strict';

  t.plan(27);

  // invalid params
  t.deepEqual(interpolateRGB('foo',5,{}), [0,0,0]);
  t.deepEqual(interpolateRGB(234, [0,45,5],45), [0,45,5]);
  t.deepEqual(interpolateRGB({}, [], 'af'), [0,0,0]);
  t.deepEqual(interpolateRGB({}, [])(5), [0,0,0]);

  t.deepEqual(interpolateRGB([-1,-1,-1], [255,255,255], 0), [0,0,0]);
  t.deepEqual(interpolateRGB([-1,-1,-1], [300,300,300], 0), [0,0,0]);
  t.deepEqual(interpolateRGB([-1,-1,-1], [300,300,300], 1), [255,255,255]);
  t.deepEqual(interpolateRGB([-1,-1,-1], [300,300,300], 0.5), [127.5,127.5,127.5]);
  t.deepEqual(interpolateRGB([0,0,0], [255,255,255], 0), [0,0,0]);
  t.deepEqual(interpolateRGB([0,0,0], [255,255,255], 1), [255,255,255]);
  t.deepEqual(interpolateRGB([0,0,0], [255,255,255], -1), [0,0,0]);
  t.deepEqual(interpolateRGB([0,0,0], [255,255,255], 2), [255,255,255]);
  t.deepEqual(interpolateRGB([0,0,0], [255,255,255], 0.5), [127.5,127.5,127.5]);
  t.deepEqual(interpolateRGB([255,0,0], [255,255,0], 0.6), [255,153,0]);
  t.deepEqual(interpolateRGB([255,0,0], [255,255,0], 0.5), [255,127.5,0]);

  // with alpha values
  t.deepEqual(interpolateRGB([255,0,0,1], [255,255,0,0], 0.5), [255,127.5,0,0.5]);
  t.deepEqual(interpolateRGB([0,0,0,0], [255,255,255,1], 0.5), [127.5,127.5,127.5,0.5]);

  // partial application
  t.deepEqual(interpolateRGB([-1, -1, -1], [255,255,255])(0), [0,0,0]);
  t.deepEqual(interpolateRGB([-1, -1, -1], [300,300,300])(0), [0,0,0]);
  t.deepEqual(interpolateRGB([-1, -1, -1], [300,300,300])(1), [255,255,255]);
  t.deepEqual(interpolateRGB([-1, -1, -1], [300,300,300])(0.5), [127.5,127.5,127.5]);
  t.deepEqual(interpolateRGB([0,0,0], [255,255,255])(0), [0,0,0]);
  t.deepEqual(interpolateRGB([0,0,0], [255,255,255])(1), [255,255,255]);
  t.deepEqual(interpolateRGB([0,0,0], [255,255,255])(-1), [0,0,0]);
  t.deepEqual(interpolateRGB([0,0,0], [255,255,255])(2), [255,255,255]);
  t.deepEqual(interpolateRGB([0,0,0], [255,255,255])(0.5), [127.5,127.5,127.5]);
  t.deepEqual(interpolateRGB([255,0,0], [255,255,0])(0.6), [255,153,0]);
});
