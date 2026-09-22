import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { arch, cpus, platform, release, totalmem } from "node:os";
import { join } from "node:path";
import type { ChartConfiguration } from "chart.js";
import { ChartJSNodeCanvas } from "chartjs-node-canvas";

const FILES_SOURCE_URL_PREFIX =
  "https://raw.githubusercontent.com/yuku-toolchain/parser-benchmark-files/refs/heads/main";
const SAMPLES_SOURCE_URL_PREFIX =
  "https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples";

const PARSERS = {
  yuku: {
    name: "Yuku",
    language: "Zig",
    description:
      "A high-performance & spec-compliant JavaScript/TypeScript compiler toolchain written in Zig.",
    url: "https://github.com/yuku-toolchain/yuku",
    semantic: false,
  },
  oxc: {
    name: "Oxc",
    language: "Rust",
    description: "A high-performance JavaScript and TypeScript parser written in Rust.",
    url: "https://github.com/oxc-project/oxc",
    semantic: false,
  },
  swc: {
    name: "SWC",
    language: "Rust",
    description:
      "An extensible Rust-based platform for compiling and bundling JavaScript and TypeScript.",
    url: "https://github.com/swc-project/swc",
    semantic: false,
  },
  yuku_semantic: {
    name: "Yuku + Semantic",
    language: "Zig",
    description: "Yuku parser with semantic analysis.",
    url: "https://github.com/yuku-toolchain/yuku",
    semantic: true,
  },
  oxc_semantic: {
    name: "Oxc + Semantic",
    language: "Rust",
    description: "Oxc parser with semantic analysis.",
    url: "https://github.com/oxc-project/oxc",
    semantic: true,
  },
} as const;

const CHART_COLORS: Record<string, string> = {
  yuku: "#FF6B35",
  oxc: "#F72585",
  swc: "#4CC9F0",
  yuku_semantic: "#E8890C",
  oxc_semantic: "#B5179E",
};

const FILES = {
  typescript: {
    path: "files/typescript.js",
    source_url: `${FILES_SOURCE_URL_PREFIX}/typescript.js`,
  },
  checker: {
    path: "files/checker.ts",
    source_url: `${FILES_SOURCE_URL_PREFIX}/checker.ts`,
  },
  lib_dom: {
    path: "files/lib.dom.d.ts",
    source_url: `${FILES_SOURCE_URL_PREFIX}/lib.dom.d.ts`,
  },
  react: {
    path: "files/react.js",
    source_url: `${FILES_SOURCE_URL_PREFIX}/react.js`,
  },
  angular_all_mjs: {
    path: "files/samples/angular-all.mjs",
    source_url: `${SAMPLES_SOURCE_URL_PREFIX}/angular-all.mjs`,
  },
  antd_components_tsx: {
    path: "files/samples/antd-components.tsx",
    source_url: `${SAMPLES_SOURCE_URL_PREFIX}/antd-components.tsx`,
  },
  checker516: {
    path: "files/samples/checker516.ts",
    source_url: `${SAMPLES_SOURCE_URL_PREFIX}/checker516.ts`,
  },
  class_dense: {
    path: "files/samples/class-dense.js",
    source_url: `${SAMPLES_SOURCE_URL_PREFIX}/class-dense.js`,
  },
  core_js: {
    path: "files/samples/core-js.js",
    source_url: `${SAMPLES_SOURCE_URL_PREFIX}/core-js.js`,
  },
  d3_src: {
    path: "files/samples/d3-src.js",
    source_url: `${SAMPLES_SOURCE_URL_PREFIX}/d3-src.js`,
  },
  effect_src: {
    path: "files/samples/effect-src.ts",
    source_url: `${SAMPLES_SOURCE_URL_PREFIX}/effect-src.ts`,
  },
  express: {
    path: "files/samples/express.js",
    source_url: `${SAMPLES_SOURCE_URL_PREFIX}/express.js`,
  },
  formatjs_icu: {
    path: "files/samples/formatjs-icu.ts",
    source_url: `${SAMPLES_SOURCE_URL_PREFIX}/formatjs-icu.ts`,
  },
  ghost_server: {
    path: "files/samples/ghost-server.js",
    source_url: `${SAMPLES_SOURCE_URL_PREFIX}/ghost-server.js`,
  },
  highlightjs_languages: {
    path: "files/samples/highlightjs-languages.js",
    source_url: `${SAMPLES_SOURCE_URL_PREFIX}/highlightjs-languages.js`,
  },
  i18next_src: {
    path: "files/samples/i18next-src.js",
    source_url: `${SAMPLES_SOURCE_URL_PREFIX}/i18next-src.js`,
  },
  libdom516: {
    path: "files/samples/libdom516.d.ts",
    source_url: `${SAMPLES_SOURCE_URL_PREFIX}/libdom516.d.ts`,
  },
  lodash_es: {
    path: "files/samples/lodash-es.js",
    source_url: `${SAMPLES_SOURCE_URL_PREFIX}/lodash-es.js`,
  },
  nest_core: {
    path: "files/samples/nest-core.ts",
    source_url: `${SAMPLES_SOURCE_URL_PREFIX}/nest-core.ts`,
  },
  opencode: {
    path: "files/samples/opencode.ts",
    source_url: `${SAMPLES_SOURCE_URL_PREFIX}/opencode.ts`,
  },
  pd_dense: {
    path: "files/samples/pd-dense.ts",
    source_url: `${SAMPLES_SOURCE_URL_PREFIX}/pd-dense.ts`,
  },
  react_dom_production_min: {
    path: "files/samples/react-dom.production.min.js",
    source_url: `${SAMPLES_SOURCE_URL_PREFIX}/react-dom.production.min.js`,
  },
  react1702: {
    path: "files/samples/react1702.js",
    source_url: `${SAMPLES_SOURCE_URL_PREFIX}/react1702.js`,
  },
  ref_acorn: {
    path: "files/samples/ref-acorn.js",
    source_url: `${SAMPLES_SOURCE_URL_PREFIX}/ref-acorn.js`,
  },
  ref_assemblyscript: {
    path: "files/samples/ref-assemblyscript.ts",
    source_url: `${SAMPLES_SOURCE_URL_PREFIX}/ref-assemblyscript.ts`,
  },
  ref_babel: {
    path: "files/samples/ref-babel.ts",
    source_url: `${SAMPLES_SOURCE_URL_PREFIX}/ref-babel.ts`,
  },
  ts_pattern: {
    path: "files/samples/ts-pattern.ts",
    source_url: `${SAMPLES_SOURCE_URL_PREFIX}/ts-pattern.ts`,
  },
  vue_src: {
    path: "files/samples/vue-src.ts",
    source_url: `${SAMPLES_SOURCE_URL_PREFIX}/vue-src.ts`,
  },
  zod_src: {
    path: "files/samples/zod-src.ts",
    source_url: `${SAMPLES_SOURCE_URL_PREFIX}/zod-src.ts`,
  },
} as const;

const OFFICIAL_FILE_KEYS = ["typescript", "checker", "lib_dom", "react"] as const;
const SAMPLE_FILE_KEYS = Object.keys(FILES).filter(
  (key): key is FileKey => !(OFFICIAL_FILE_KEYS as readonly string[]).includes(key),
);

type ParserKey = keyof typeof PARSERS;
type FileKey = keyof typeof FILES;

interface BenchmarkResult {
  parser: string;
  median: number;
  min: number;
  p99: number;
}

interface ParserEntry {
  key: string;
  name: string;
  result: BenchmarkResult | null;
}

function formatBytes(bytes: number): string {
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function formatTime(seconds: number): string {
  return `${(seconds * 1000).toFixed(2)} ms`;
}

function formatThroughput(bytes: number, seconds: number): string {
  return `${(bytes / (1024 * 1024) / seconds).toFixed(1)} MB/s`;
}

async function readBenchmarkResults(fileKey: FileKey) {
  const content = await readFile(join(process.cwd(), "result", `${fileKey}.json`), "utf-8");
  return JSON.parse(content) as { results: BenchmarkResult[] };
}

function getParserEntries(data: { results: BenchmarkResult[] }, semantic: boolean): ParserEntry[] {
  const resultsByParser = new Map<string, BenchmarkResult>();
  for (const result of data.results) {
    if (PARSERS[result.parser as ParserKey]) {
      resultsByParser.set(result.parser, result);
    }
  }

  const entries: ParserEntry[] = [];
  for (const [key, parser] of Object.entries(PARSERS)) {
    if (parser.semantic !== semantic) continue;
    entries.push({ key, name: parser.name, result: resultsByParser.get(key) ?? null });
  }

  entries.sort((a, b) => {
    if (a.result && b.result) return a.result.median - b.result.median;
    if (a.result && !b.result) return -1;
    if (!a.result && b.result) return 1;
    return 0;
  });

  return entries;
}

async function generateChart(
  entries: ParserEntry[],
  chartName: string,
  fileSize: number,
): Promise<string> {
  const data = entries.filter((e) => e.result != null);
  if (data.length === 0) return "";

  const labels = data.map((e) => e.name);
  const medianData = data.map((e) => e.result!.median * 1000);
  const colors = data.map((e) => CHART_COLORS[e.key] ?? "#888888");

  const maxTime = Math.max(...medianData);
  const niceSteps = [10, 20, 25, 50, 100, 200, 250, 500];
  const rawStep = maxTime / 4;
  const step = niceSteps.find((s) => s >= rawStep) || Math.ceil(rawStep / 100) * 100;
  const chartMax = Math.ceil(maxTime / step) * step;

  const dpr = 3;
  const chartWidth = 500;
  const chartHeight = data.length * 24 + 28;

  const chartJSNodeCanvas = new ChartJSNodeCanvas({
    width: chartWidth * dpr,
    height: chartHeight * dpr,
  });

  const configuration: ChartConfiguration = {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          data: medianData,
          backgroundColor: colors,
          borderWidth: 0,
          borderRadius: 0,
          barPercentage: 0.75,
          categoryPercentage: 0.92,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: false,
      devicePixelRatio: 1,
      layout: {
        padding: { right: 65 * dpr, top: 2 * dpr, bottom: 0 },
      },
      plugins: {
        legend: { display: false },
        title: { display: false },
      },
      scales: {
        x: { display: false, beginAtZero: true, max: chartMax },
        y: {
          grid: { display: false },
          border: { display: false },
          ticks: {
            color: "#CAC1B0",
            font: { size: 9 * dpr },
            padding: 3 * dpr,
          },
        },
      },
    },
    plugins: [
      {
        id: "value-labels",
        afterDatasetsDraw(chart) {
          const ctx = chart.ctx;
          const meta = chart.getDatasetMeta(0);
          const dataset = chart.data.datasets[0];
          for (let i = 0; i < meta.data.length; i++) {
            const bar = meta.data[i];
            const value = dataset.data[i] as number;
            ctx.save();
            ctx.font = `${9 * dpr}px sans-serif`;
            ctx.textBaseline = "middle";
            ctx.fillStyle = "#CAC1B0";
            ctx.textAlign = "left";
            const msLabel = `${value.toFixed(2)}ms`;
            ctx.fillText(msLabel, bar.x + 8 * dpr, bar.y);
            const throughput = formatThroughput(fileSize, value / 1000);
            const barWidth = bar.x - (bar as unknown as { base: number }).base;
            if (barWidth >= ctx.measureText(throughput).width + 16 * dpr) {
              ctx.font = `${8 * dpr}px sans-serif`;
              ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
              ctx.textAlign = "right";
              ctx.fillText(throughput, bar.x - 8 * dpr, bar.y);
            } else {
              const msWidth = ctx.measureText(msLabel).width;
              ctx.fillText(`· ${throughput}`, bar.x + 8 * dpr + msWidth + 4 * dpr, bar.y);
            }
            ctx.restore();
          }
        },
      },
    ],
  };

  const imageBuffer = await chartJSNodeCanvas.renderToBuffer(configuration);
  const chartPath = join(process.cwd(), "charts", `${chartName}.png`);
  await mkdir(join(process.cwd(), "charts"), { recursive: true });
  await writeFile(chartPath, imageBuffer);

  return `charts/${chartName}.png`;
}

function generateTable(entries: ParserEntry[]): string {
  const lines = [
    "| Parser | Median | Min | p99 | Relative |",
    "|--------|--------|-----|-----|----------|",
  ];

  const fastest = entries.reduce<number | null>(
    (min, e) => (e.result && (min === null || e.result.median < min) ? e.result.median : min),
    null,
  );

  for (const { name, result } of entries) {
    if (!result) {
      lines.push(`| ${name} | Failed to parse | - | - | - |`);
      continue;
    }
    const relative = fastest ? `${(result.median / fastest).toFixed(2)}×` : "-";
    lines.push(
      `| ${name} | ${formatTime(result.median)} | ${formatTime(result.min)} | ${formatTime(result.p99)} | ${relative} |`,
    );
  }

  return lines.join("\n");
}

async function generateBenchmarksSection(fileKeys: readonly FileKey[]): Promise<string> {
  const lines = ["## Benchmarks", ""];

  for (const fileKey of fileKeys) {
    const file = FILES[fileKey];
    const fileName = file.path.split("/").pop()!;
    const fileSize = (await stat(join(process.cwd(), file.path))).size;
    const data = await readBenchmarkResults(fileKey);
    const entries = getParserEntries(data, false);

    lines.push(`### [${fileName}](${file.source_url})`);
    lines.push("");
    lines.push(`**File size:** ${formatBytes(fileSize)}`);
    lines.push("");

    const chartPath = await generateChart(entries, fileKey, fileSize);
    if (chartPath) {
      lines.push(`![Bar chart comparing native parser speeds for ${fileName}](${chartPath})`);
      lines.push("");
    }

    lines.push(generateTable(entries));
    lines.push("");
  }

  return lines.join("\n");
}

async function generateSemanticSection(fileKeys: readonly FileKey[]): Promise<string> {
  const lines: string[] = [];

  lines.push(`## Semantic`);
  lines.push("");
  lines.push(
    `The ECMAScript specification defines a set of early errors that conformant implementations must report before execution. Some of these are detectable during parsing from local context alone, like \`return\` outside a function, \`yield\` outside a generator, invalid destructuring, etc. Others require knowledge of the program's scope structure and bindings, such as redeclarations, unresolved exports, private fields used outside their class, etc.`,
  );
  lines.push("");
  lines.push(
    `Parsers handle this differently: SWC checks some scope-dependent errors during parsing itself, while Yuku and Oxc defer them entirely to a separate semantic analysis pass. This keeps parsing fast and lets each consumer opt in only to the work it actually needs. A formatter, for example, only needs the AST and should not pay the cost of scope resolution.`,
  );
  lines.push("");
  lines.push(
    `The benchmarks below measure parsing followed by this additional pass, which builds a scope tree and symbol table, resolves identifier references to their declarations, and reports the remaining early errors. Together, parsing and semantic analysis cover the full set of early errors required by the specification.`,
  );
  lines.push("");

  for (const fileKey of fileKeys) {
    const file = FILES[fileKey];
    const fileName = file.path.split("/").pop()!;
    const fileSize = (await stat(join(process.cwd(), file.path))).size;
    const data = await readBenchmarkResults(fileKey);
    const entries = getParserEntries(data, true);
    if (entries.every((e) => e.result == null)) continue;

    lines.push(`### [${fileName}](${file.source_url})`);
    lines.push("");

    const chartPath = await generateChart(entries, `${fileKey}_semantic`, fileSize);
    if (chartPath) {
      lines.push(
        `![Bar chart comparing parser speeds with semantic analysis for ${fileName}](${chartPath})`,
      );
      lines.push("");
    }

    lines.push(generateTable(entries));
    lines.push("");
  }

  return lines.join("\n");
}

function generateParsersSection(): string {
  const lines = ["## Parsers", ""];

  for (const [, parser] of Object.entries(PARSERS)) {
    if (parser.semantic) continue;
    lines.push(`### [${parser.name}](${parser.url})`);
    lines.push("");
    lines.push(`**Language:** ${parser.language}`);
    lines.push("");
    lines.push(parser.description);
    lines.push("");
  }

  return lines.join("\n");
}

function getSystemInfo(): string {
  const cpu = cpus()[0];
  const cpuModel = cpu?.model || "Unknown CPU";
  const cpuCores = cpus().length;
  const totalMemoryGB = (totalmem() / (1024 * 1024 * 1024)).toFixed(0);
  const os = platform();
  const osArch = arch();
  const osRelease = release();
  const osName =
    os === "darwin" ? "macOS" : os === "win32" ? "Windows" : os === "linux" ? "Linux" : os;

  return `## System

| Property | Value |
|----------|-------|
| OS | ${osName} ${osRelease} (${osArch}) |
| CPU | ${cpuModel} |
| Cores | ${cpuCores} |
| Memory | ${totalMemoryGB} GB |`;
}

function generateRunSection(): string {
  return `## Run Benchmarks

### Prerequisites

- [Bun](https://bun.sh/) - JavaScript runtime and package manager
- [Rust](https://www.rust-lang.org/tools/install) - For building Rust-based parsers
- [Zig](https://ziglang.org/download/) - For building Zig-based parsers (requires nightly/development version)

### Steps

1. Clone the repository:

\`\`\`bash
git clone https://github.com/yuku-toolchain/ecmascript-parser-benchmark-native.git
cd ecmascript-parser-benchmark-native
\`\`\`

2. Install dependencies:

\`\`\`bash
bun install
\`\`\`

3. Download the benchmark files:

\`\`\`bash
bun load-files
\`\`\`

4. Build the parsers:

\`\`\`bash
bun run build
\`\`\`

5. Run benchmarks:

\`\`\`bash
bun bench
\`\`\`

This will run benchmarks on all test files. Results are saved to the \`result/\` directory.`;
}

function generateMethodologySection(): string {
  return `## Methodology

Parsing is timed in-process to isolate it from process startup, dynamic linking, file I/O, and memory teardown, which would otherwise dominate the measurement on smaller files.

The source is read once, then each parser runs 50 warmup iterations followed by 300 timed iterations. A monotonic clock wraps only the parse call (plus the semantic pass for the semantic variants); allocation and teardown happen outside the timed region, and the result passes through an optimization barrier so the work cannot be elided. Reported figures are the median, minimum, and 99th percentile of the timed runs.

Binaries are built with release optimizations: Rust with \`cargo build --release\` (LTO, single codegen unit, symbol stripping) and Zig with \`zig build --release=fast\`. Each uses a fast general-purpose allocator (Rust \`mimalloc\`, Zig \`smp_allocator\`).`;
}

async function main() {
  const readme = [
    "# Native ECMAScript Parser Benchmark",
    "",
    "Benchmarks for ECMAScript parsers compiled to native binaries (Zig, Rust), measuring raw parsing speed without any JavaScript runtime overhead.",
    "",
    getSystemInfo(),
    "",
    generateParsersSection(),
    await generateBenchmarksSection(OFFICIAL_FILE_KEYS),
    await generateSemanticSection(OFFICIAL_FILE_KEYS),
    generateRunSection(),
    "",
    generateMethodologySection(),
  ].join("\n");

  await writeFile(join(process.cwd(), "README.md"), readme);
  console.log("README.md generated successfully!");

  const samples = [
    "# Native ECMAScript Parser Benchmark — Extended Samples",
    "",
    "Benchmarks on the extended sample set from [hax/parser-benchmark-files](https://github.com/hax/parser-benchmark-files) `expanded-samples` branch. Same parsers, same methodology as the main benchmark — see [README.md](README.md) for details.",
    "",
    getSystemInfo(),
    "",
    generateParsersSection(),
    await generateBenchmarksSection(SAMPLE_FILE_KEYS),
    await generateSemanticSection(SAMPLE_FILE_KEYS),
    "",
    generateMethodologySection(),
  ].join("\n");

  await writeFile(join(process.cwd(), "SAMPLES.md"), samples);
  console.log("SAMPLES.md generated successfully!");
}

main().catch(console.error);
