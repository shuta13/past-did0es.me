import { readFileSync } from "fs";
import yaml from "js-yaml";

const readFileAsync = (path: string) => {
  return new Promise((resolve, reject) => {
    try {
      const json = yaml.load(readFileSync(path, "utf-8"));
      resolve(json);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

export const yaml2json = async (path: string) => {
  const result = await readFileAsync(path);
  if (result) {
    return { result };
  }
  throw new Error("cannot load file or empty");
};
