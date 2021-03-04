import { NextApiRequest, NextApiResponse } from "next";
import { yaml2json } from "../service/yaml2json";
const yaml = require.resolve("../data/response.yml");

// This is a cheap mock
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { result } = await yaml2json(yaml);
  res.status(200).json(result);
};
