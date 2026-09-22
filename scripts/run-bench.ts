import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const FILES = [
  { key: "typescript", path: "files/typescript.js" },
  { key: "checker", path: "files/checker.ts" },
  { key: "lib_dom", path: "files/lib.dom.d.ts" },
  { key: "react", path: "files/react.js" },
  { key: "angular_all_mjs", path: "files/samples/angular-all.mjs" },
  { key: "antd_components_tsx", path: "files/samples/antd-components.tsx" },
  { key: "checker516", path: "files/samples/checker516.ts" },
  { key: "class_dense", path: "files/samples/class-dense.js" },
  { key: "core_js", path: "files/samples/core-js.js" },
  { key: "d3_src", path: "files/samples/d3-src.js" },
  { key: "effect_src", path: "files/samples/effect-src.ts" },
  { key: "express", path: "files/samples/express.js" },
  { key: "formatjs_icu", path: "files/samples/formatjs-icu.ts" },
  { key: "ghost_server", path: "files/samples/ghost-server.js" },
  { key: "highlightjs_languages", path: "files/samples/highlightjs-languages.js" },
  { key: "i18next_src", path: "files/samples/i18next-src.js" },
  { key: "libdom516", path: "files/samples/libdom516.d.ts" },
  { key: "lodash_es", path: "files/samples/lodash-es.js" },
  { key: "nest_core", path: "files/samples/nest-core.ts" },
  { key: "opencode", path: "files/samples/opencode.ts" },
  { key: "pd_dense", path: "files/samples/pd-dense.ts" },
  { key: "react_dom_production_min", path: "files/samples/react-dom.production.min.js" },
  { key: "react1702", path: "files/samples/react1702.js" },
  { key: "ref_acorn", path: "files/samples/ref-acorn.js" },
  { key: "ref_assemblyscript", path: "files/samples/ref-assemblyscript.ts" },
  { key: "ref_babel", path: "files/samples/ref-babel.ts" },
  { key: "ts_pattern", path: "files/samples/ts-pattern.ts" },
  { key: "vue_src", path: "files/samples/vue-src.ts" },
  { key: "zod_src", path: "files/samples/zod-src.ts" },
] as const;

const BINS = ["./bin/zig", "./bin/rust"] as const;

interface Result {
  parser: string;
  file: string;
  median: number;
  min: number;
  p99: number;
}

function runBench(bin: string, paths: string[]): Result[] {
  const proc = Bun.spawnSync({ cmd: [bin, ...paths], stdout: "pipe", stderr: "inherit" });
  if (!proc.success) throw new Error(`${bin} exited with code ${proc.exitCode}`);
  return (JSON.parse(proc.stdout.toString()) as { results: Result[] }).results;
}

const ms = (s: number) => `${(s * 1000).toFixed(3)} ms`;
const mbps = (bytes: number, s: number) => `${(bytes / (1024 * 1024) / s).toFixed(1)} MB/s`;

const paths = FILES.map((f) => f.path);
const results = BINS.flatMap((bin) => {
  console.log(`Running ${bin} ...`);
  return runBench(bin, paths);
});

await mkdir(join(process.cwd(), "result"), { recursive: true });

for (const file of FILES) {
  const entries = results
    .filter((r) => r.file === file.path)
    .map(({ parser, median, min, p99 }) => ({ parser, median, min, p99 }));

  await writeFile(
    join(process.cwd(), "result", `${file.key}.json`),
    `${JSON.stringify({ results: entries }, null, 2)}\n`,
  );

  const fileSize = Bun.file(file.path).size;
  console.log(`\n${file.path}`);
  for (const r of [...entries].sort((a, b) => a.median - b.median)) {
    console.log(`  ${r.parser.padEnd(16)} ${ms(r.median).padEnd(12)} ${mbps(fileSize, r.median)}`);
  }
}
