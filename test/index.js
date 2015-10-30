var tape = require("tape"),
    vec2 = require("vec2"),
    aabb2ToAabb2 = require("..");


tape("aabb2ToAabb2(minx1, miny1, maxx1, maxy1, minx2, miny2, maxx2, maxy2)", function(assert) {
    assert.deepEqual(aabb2ToAabb2(
        0, 0, 1, 1,
        0.5, 0.5, 1.5, 1.5
    ), {
        point: vec2.create(0.5, 0.5),
        normal: vec2.create(0.7071067690849304, 0.7071067690849304),
        depth: 0.7071067811865476,
        data: null
    });
    assert.equal(aabb2ToAabb2(
        0, 0, 1, 1,
        1, 1, 2, 2
    ), false);
    assert.end();
});
