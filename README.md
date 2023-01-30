<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>extract-first-json</h1>
  <a href="https://npmjs.com/package/extract-first-json">
    <img alt="NPM" src="https://img.shields.io/npm/v/extract-first-json.svg">
  </a>
  <a href="https://github.com/bconnorwhite/extract-first-json">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/extract-first-json.svg">
  </a>
</div>

<br />

<blockquote align="center">Extract the first JSON object or array from a string.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/extract-first-json">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/extract-first-json?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

## Installation

```sh
yarn add extract-first-json
```

```sh
npm install extract-first-json
```

```sh
pnpm add extract-first-json
```

<br />

## Usage

```ts
import { extractJSON, extractJSONObject, extractJSONArray } from "extract-first-json";

const string = `Results: { "ok": true }`;

extractJSON(string); // { ok: true }
```

<!--BEGIN FOOTER-->

<br />

<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/extract-first-json?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/extract-first-json.svg"></a></h2>

- [reduce-first](https://www.npmjs.com/package/reduce-first): Return early from reduce
- [types-json](https://www.npmjs.com/package/types-json): Type checking for JSON values


<br />

<h3>Dev Dependencies</h3>

- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.


<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/extract-first-json.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
<!--END FOOTER-->
