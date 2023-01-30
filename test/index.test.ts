import { test, expect } from "@jest/globals";
import { extractJSON, extractJSONObject, extractJSONArray } from "../source/index.js";

const objectString = `yarn run v1.22.4
$ /path/to/node_modules/.bin/cloc source --json

{"test" : { "a": 1}}
✨  Done in 0.23s.
`;

const objectWithArrayString = "Some text: { \"test\": [1, 2, 3] } Done";

const arrayString = "Some text: [1, 2, 3] Done";

const arrayWithObjectString = "Some text: [{ \"test\": 1 }] Done";

test("extractJSON object", () => {
  const json = extractJSON(objectString);
  expect(json).toEqual({ test: { a: 1 } });
});

test("extractJSON object with array", () => {
  const json = extractJSON(objectWithArrayString);
  expect(json).toEqual({ test: [1, 2, 3] });
});

test("extractJSON array", () => {
  const json = extractJSON(arrayString);
  expect(json).toEqual([1, 2, 3]);
});

test("extractJSON array with object", () => {
  const json = extractJSON(arrayWithObjectString);
  expect(json).toEqual([{ test: 1 }]);
});

test("extractJSONObject", () => {
  const json = extractJSONObject(objectString);
  expect(json).toEqual({ test: { a: 1 } });
});

test("extractJSONArray", () => {
  const json = extractJSONArray(arrayWithObjectString);
  expect(json).toEqual([{ test: 1 }]);
});
