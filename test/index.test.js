const { extractJSON, extractJSONObject, extractJSONArray } = require("../build/index.js");

const string = `yarn run v1.22.4
$ /path/to/node_modules/.bin/cloc source --json

{"header" : {
  "cloc_url"           : "github.com/AlDanial/cloc",
  "cloc_version"       : "1.86",
  "elapsed_seconds"    : 0.00690507888793945,
  "n_files"            : 1,
  "n_lines"            : 22,
  "files_per_second"   : 144.82093778054,
  "lines_per_second"   : 3186.06063117188},
"TypeScript" :{
  "nFiles": 1,
  "blank": 4,
  "comment": 0,
  "code": 18},
"SUM": {
  "blank": 4,
  "comment": 0,
  "code": 18,
  "nFiles": 1} }
✨  Done in 0.23s.
`;

const arrayString = `Some text: [{ "test": 1 }] Done`;

test("extractJSON", () => {
  expect(extractJSON(string).header.cloc_version).toBe("1.86");
});

test("extractJSONObject", () => {
  expect(extractJSONObject(string).header.cloc_version).toBe("1.86");
});

test("extractJSONArray", () => {
  expect(extractJSONArray(arrayString)[0].test).toBe(1);
});
