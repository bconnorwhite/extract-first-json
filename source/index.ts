import { JSONObject, parseJSONObject, JSONArray, parseJSONArray, JSONValue } from "parse-json-object";
import reduceFirst from "reduce-first";

function extract<T extends JSONValue>(
  text: string,
  startBracket: string,
  endBracket: string,
  parser: (input: string) => T | undefined
): T | undefined {
  return reduceFirst(Array.from(text), (char, startIndex) => {
    if(char === startBracket) {
      let section = text.slice(startIndex);
      while(section.lastIndexOf(endBracket) > 0) {
        section = section.slice(0, section.lastIndexOf(endBracket)+1);
        const result = parser(section);
        if(result !== undefined) {
          return result;
        }
      }
    }
    return undefined;
  });
}

export function extractJSONObject(text: string): JSONObject | undefined {
  return extract(text, "{", "}", parseJSONObject);
}

export function extractJSONArray(text: string): JSONArray | undefined {
  return extract(text, "[", "]", parseJSONArray);
}

export function extractJSON(text: string): JSONObject | JSONArray | undefined {
  return extractJSONObject(text) ?? extractJSONArray(text);
}
