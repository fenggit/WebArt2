const assert = require("nodejs/nodelib/assert");

//assert(条件，信息)
assert(5 > 3, "yes");

assert(5 < 3, "no");

//深度比较，会比较内部成员的
//  ==
//assert.deepEqual(变量,预期值,msg);

// ===
//assert.deepStrictEqual(变量,预期值,msg);

