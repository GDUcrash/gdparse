import gdparse from "../index.js";
import fs from "fs";

const stereomadness = fs.readFileSync("test/StereoMadness.txt").toString();

const decoded = gdparse.parseLevel(stereomadness);
console.log(decoded);
const encoded = gdparse.serializeLevel(decoded);

fs.writeFileSync("test/StereoMoment.txt", encoded);