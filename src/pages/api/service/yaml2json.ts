import { readFileSync } from "fs";
import yaml from "js-yaml";
import { IResponse } from "../../../shared/types/Response";

const readFileAsync = (path: string) => {
  return new Promise<IResponse["data"]>((resolve, reject) => {
    try {
      const json = yaml.load(readFileSync(path, "utf-8")) as IResponse["data"];
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
