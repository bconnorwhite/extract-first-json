<div align="center">
  <h1>extract-first-json</h1>
  <a href="https://npmjs.com/package/extract-first-json">
    <img alt="npm" src="https://img.shields.io/npm/v/extract-first-json.svg">
  </a>
  <a href="https://github.com/bconnorwhite/extract-first-json">
    <img alt="typescript" src="https://img.shields.io/badge/TypeScript-%F0%9F%91%8D-blue.svg">
  </a>
  <a href="https://github.com/bconnorwhite/extract-first-json">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/extract-first-json?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Extract the first JSON object or array from a string.

## Installation

```bash
yarn add extract-first-json
```

```bash
npm install extract-first-json
```

<br />

## API

```ts
import { extractJSON, extractJSONObject, extractJSONArray } from "extract-first-json";

const string = `Results: { "ok": true }`;

extractJSON(string); // { ok: true }
```

<br />

<h2>Dependencies<img align="right" alt="dependencies" src="https://img.shields.io/david/bconnorwhite/extract-first-json.svg"></h2>

- [parse-json-object](https://www.npmjs.com/package/parse-json-object): Parse a typed JSON object.
- [reduce-first](https://www.npmjs.com/package/reduce-first): Return early from reduce

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/extract-first-json.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/extract-first-json.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)
