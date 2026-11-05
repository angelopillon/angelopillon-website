import { build } from "esbuild";
const common = { bundle: true, minify: true, format: "iife", target: ["es2019"], legalComments: "eof", logLevel: "info" };
await build({ ...common, entryPoints: ["motion.src.js"], outfile: "../../assets/js/motion.js" });
await build({ ...common, entryPoints: ["cosmos.src.js"], outfile: "../../assets/js/cosmos.js", loader: { ".json": "json" } });
