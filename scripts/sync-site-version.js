import fs from "node:fs";

const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
const version = pkg.version;

const sitePath = "src/site/_data/site.json";
const site = JSON.parse(fs.readFileSync(sitePath, "utf8"));

site.version = version;

fs.writeFileSync(sitePath, JSON.stringify(site, null, 2) + "\n", "utf8");
console.log(`site.json updated to ${version}`);
