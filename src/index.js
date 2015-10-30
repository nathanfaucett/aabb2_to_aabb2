var mathf = require("mathf"),
    vec2 = require("vec2"),
    Contact2 = require("contact2");


module.exports = function aabb2ToAabb2(minx1, miny1, maxx1, maxy1, minx2, miny2, maxx2, maxy2) {
    var x, y, dsq, d, invD;

    if (minx2 > minx1) {
        x = minx2 - maxx1;
    } else {
        x = minx1 - maxx2;
    }

    if (miny2 > miny1) {
        y = miny2 - maxy1;
    } else {
        y = miny1 - maxy2;
    }

    if (x < 0.0 && y < 0.0) {
        contact = Contact2.create();

        dsq = vec2.lengthSqValues(x, y);
        d = mathf.sqrt(dsq);
        invD = 1 / d;

        vec2.set(contact.point, maxx1 + x, maxy1 + y);
        vec2.set(contact.normal, x * -invD, y * -invD);
        contact.depth = d;

        return contact;
    } else {
        return false;
    }
};
