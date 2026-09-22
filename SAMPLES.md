# Native ECMAScript Parser Benchmark — Extended Samples

Benchmarks on the extended sample set from [hax/parser-benchmark-files](https://github.com/hax/parser-benchmark-files) `expanded-samples` branch. Same parsers, same methodology as the main benchmark — see [README.md](README.md) for details.

## System

| Property | Value |
|----------|-------|
| OS | macOS 24.6.0 (arm64) |
| CPU | Apple M3 Pro |
| Cores | 12 |
| Memory | 36 GB |

## Parsers

### [Yuku](https://github.com/yuku-toolchain/yuku)

**Language:** Zig

A high-performance & spec-compliant JavaScript/TypeScript compiler toolchain written in Zig.

### [Oxc](https://github.com/oxc-project/oxc)

**Language:** Rust

A high-performance JavaScript and TypeScript parser written in Rust.

### [SWC](https://github.com/swc-project/swc)

**Language:** Rust

An extensible Rust-based platform for compiling and bundling JavaScript and TypeScript.

## Benchmarks

### [angular-all.mjs](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/angular-all.mjs)

**File size:** 1.98 MB

![Bar chart comparing native parser speeds for angular-all.mjs](charts/angular_all_mjs.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku | 4.55 ms | 4.52 ms | 4.63 ms | 1.00× |
| Oxc | 5.38 ms | 5.35 ms | 5.67 ms | 1.18× |
| SWC | 9.54 ms | 9.26 ms | 9.87 ms | 2.10× |

### [antd-components.tsx](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/antd-components.tsx)

**File size:** 0.22 MB

![Bar chart comparing native parser speeds for antd-components.tsx](charts/antd_components_tsx.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku | 0.66 ms | 0.65 ms | 0.67 ms | 1.00× |
| Oxc | 0.78 ms | 0.77 ms | 0.82 ms | 1.18× |
| SWC | 1.43 ms | 1.39 ms | 1.56 ms | 2.18× |

### [checker516.ts](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/checker516.ts)

**File size:** 2.72 MB

![Bar chart comparing native parser speeds for checker516.ts](charts/checker516.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku | 6.12 ms | 6.09 ms | 6.17 ms | 1.00× |
| Oxc | 7.01 ms | 6.97 ms | 7.43 ms | 1.15× |
| SWC | 12.54 ms | 12.26 ms | 13.57 ms | 2.05× |

### [class-dense.js](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/class-dense.js)

**File size:** 5.51 MB

![Bar chart comparing native parser speeds for class-dense.js](charts/class_dense.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku | 19.75 ms | 19.45 ms | 22.16 ms | 1.00× |
| Oxc | 19.78 ms | 19.58 ms | 21.58 ms | 1.00× |
| SWC | 35.32 ms | 34.89 ms | 51.39 ms | 1.79× |

### [core-js.js](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/core-js.js)

**File size:** 0.85 MB

![Bar chart comparing native parser speeds for core-js.js](charts/core_js.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku | 2.36 ms | 2.35 ms | 2.77 ms | 1.00× |
| Oxc | 2.88 ms | 2.87 ms | 2.94 ms | 1.22× |
| SWC | 5.27 ms | 5.14 ms | 5.54 ms | 2.23× |

### [d3-src.js](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/d3-src.js)

**File size:** 0.22 MB

![Bar chart comparing native parser speeds for d3-src.js](charts/d3_src.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku | 0.85 ms | 0.84 ms | 0.87 ms | 1.00× |
| Oxc | 1.22 ms | 1.21 ms | 1.28 ms | 1.44× |
| SWC | 1.81 ms | 1.77 ms | 1.91 ms | 2.13× |

### [effect-src.ts](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/effect-src.ts)

**File size:** 1.53 MB

![Bar chart comparing native parser speeds for effect-src.ts](charts/effect_src.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku | 3.27 ms | 3.25 ms | 3.63 ms | 1.00× |
| Oxc | 3.48 ms | 3.45 ms | 4.15 ms | 1.06× |
| SWC | 6.21 ms | 6.11 ms | 6.33 ms | 1.90× |

### [express.js](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/express.js)

**File size:** 0.06 MB

![Bar chart comparing native parser speeds for express.js](charts/express.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku | 0.11 ms | 0.11 ms | 0.12 ms | 1.00× |
| Oxc | 0.15 ms | 0.14 ms | 0.16 ms | 1.35× |
| SWC | 0.26 ms | 0.25 ms | 0.28 ms | 2.36× |

### [formatjs-icu.ts](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/formatjs-icu.ts)

**File size:** 0.08 MB

![Bar chart comparing native parser speeds for formatjs-icu.ts](charts/formatjs_icu.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku | 0.22 ms | 0.22 ms | 0.23 ms | 1.00× |
| Oxc | 0.28 ms | 0.28 ms | 0.29 ms | 1.27× |
| SWC | 0.44 ms | 0.44 ms | 0.46 ms | 2.03× |

### [ghost-server.js](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/ghost-server.js)

**File size:** 1.49 MB

![Bar chart comparing native parser speeds for ghost-server.js](charts/ghost_server.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku | 3.80 ms | 3.77 ms | 3.83 ms | 1.00× |
| Oxc | 4.56 ms | 4.54 ms | 5.16 ms | 1.20× |
| SWC | 8.12 ms | 7.91 ms | 8.61 ms | 2.14× |

### [highlightjs-languages.js](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/highlightjs-languages.js)

**File size:** 0.96 MB

![Bar chart comparing native parser speeds for highlightjs-languages.js](charts/highlightjs_languages.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku | 1.30 ms | 1.29 ms | 1.33 ms | 1.00× |
| Oxc | 2.01 ms | 1.99 ms | 2.08 ms | 1.54× |
| SWC | 3.83 ms | 3.62 ms | 4.65 ms | 2.94× |

### [i18next-src.js](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/i18next-src.js)

**File size:** 0.10 MB

![Bar chart comparing native parser speeds for i18next-src.js](charts/i18next_src.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku | 0.25 ms | 0.25 ms | 0.27 ms | 1.00× |
| Oxc | 0.36 ms | 0.36 ms | 0.38 ms | 1.42× |
| SWC | 0.59 ms | 0.58 ms | 0.62 ms | 2.32× |

### [libdom516.d.ts](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/libdom516.d.ts)

**File size:** 1.24 MB

![Bar chart comparing native parser speeds for libdom516.d.ts](charts/libdom516.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Oxc | 1.94 ms | 1.93 ms | 1.96 ms | 1.00× |
| Yuku | 2.03 ms | 2.02 ms | 2.15 ms | 1.05× |
| SWC | 3.75 ms | 3.68 ms | 3.91 ms | 1.93× |

### [lodash-es.js](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/lodash-es.js)

**File size:** 0.60 MB

![Bar chart comparing native parser speeds for lodash-es.js](charts/lodash_es.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku | 0.92 ms | 0.92 ms | 0.95 ms | 1.00× |
| Oxc | 1.20 ms | 1.19 ms | 1.23 ms | 1.29× |
| SWC | 2.06 ms | 2.00 ms | 2.16 ms | 2.23× |

### [nest-core.ts](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/nest-core.ts)

**File size:** 0.49 MB

![Bar chart comparing native parser speeds for nest-core.ts](charts/nest_core.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku | 1.39 ms | 1.38 ms | 1.41 ms | 1.00× |
| Oxc | 1.59 ms | 1.58 ms | 1.61 ms | 1.14× |
| SWC | Failed to parse | - | - | - |

### [opencode.ts](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/opencode.ts)

**File size:** 0.96 MB

![Bar chart comparing native parser speeds for opencode.ts](charts/opencode.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku | 3.68 ms | 3.66 ms | 3.72 ms | 1.00× |
| Oxc | 4.45 ms | 4.38 ms | 5.26 ms | 1.21× |
| SWC | 7.45 ms | 7.23 ms | 8.37 ms | 2.03× |

### [pd-dense.ts](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/pd-dense.ts)

**File size:** 4.59 MB

![Bar chart comparing native parser speeds for pd-dense.ts](charts/pd_dense.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Oxc | 17.57 ms | 17.27 ms | 19.96 ms | 1.00× |
| Yuku | 18.24 ms | 18.17 ms | 18.68 ms | 1.04× |
| SWC | Failed to parse | - | - | - |

### [react-dom.production.min.js](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/react-dom.production.min.js)

**File size:** 0.13 MB

![Bar chart comparing native parser speeds for react-dom.production.min.js](charts/react_dom_production_min.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku | 0.74 ms | 0.73 ms | 0.75 ms | 1.00× |
| Oxc | 1.07 ms | 1.07 ms | 1.10 ms | 1.46× |
| SWC | 1.67 ms | 1.63 ms | 1.88 ms | 2.27× |

### [react1702.js](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/react1702.js)

**File size:** 0.10 MB

![Bar chart comparing native parser speeds for react1702.js](charts/react1702.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku | 0.17 ms | 0.17 ms | 0.19 ms | 1.00× |
| Oxc | 0.24 ms | 0.23 ms | 0.26 ms | 1.36× |
| SWC | 0.39 ms | 0.39 ms | 0.42 ms | 2.26× |

### [ref-acorn.js](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/ref-acorn.js)

**File size:** 0.21 MB

![Bar chart comparing native parser speeds for ref-acorn.js](charts/ref_acorn.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku | 0.56 ms | 0.56 ms | 0.57 ms | 1.00× |
| Oxc | 0.71 ms | 0.71 ms | 0.73 ms | 1.27× |
| SWC | 1.23 ms | 1.18 ms | 1.91 ms | 2.19× |

### [ref-assemblyscript.ts](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/ref-assemblyscript.ts)

**File size:** 1.57 MB

![Bar chart comparing native parser speeds for ref-assemblyscript.ts](charts/ref_assemblyscript.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku | 4.28 ms | 4.26 ms | 4.32 ms | 1.00× |
| Oxc | 5.16 ms | 5.13 ms | 6.05 ms | 1.21× |
| SWC | 9.10 ms | 8.88 ms | 9.48 ms | 2.13× |

### [ref-babel.ts](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/ref-babel.ts)

**File size:** 0.97 MB

![Bar chart comparing native parser speeds for ref-babel.ts](charts/ref_babel.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku | 2.87 ms | 2.84 ms | 2.94 ms | 1.00× |
| Oxc | 3.26 ms | 3.23 ms | 3.45 ms | 1.14× |
| SWC | Failed to parse | - | - | - |

### [ts-pattern.ts](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/ts-pattern.ts)

**File size:** 0.12 MB

![Bar chart comparing native parser speeds for ts-pattern.ts](charts/ts_pattern.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku | 0.32 ms | 0.32 ms | 0.34 ms | 1.00× |
| Oxc | 0.34 ms | 0.34 ms | 0.36 ms | 1.07× |
| SWC | 0.57 ms | 0.56 ms | 0.60 ms | 1.76× |

### [vue-src.ts](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/vue-src.ts)

**File size:** 0.85 MB

![Bar chart comparing native parser speeds for vue-src.ts](charts/vue_src.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku | 2.70 ms | 2.68 ms | 3.27 ms | 1.00× |
| Oxc | 3.47 ms | 3.44 ms | 3.56 ms | 1.29× |
| SWC | 5.52 ms | 5.39 ms | 5.82 ms | 2.05× |

### [zod-src.ts](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/zod-src.ts)

**File size:** 1.30 MB

![Bar chart comparing native parser speeds for zod-src.ts](charts/zod_src.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku | 4.05 ms | 4.03 ms | 4.17 ms | 1.00× |
| Oxc | 4.94 ms | 4.90 ms | 6.34 ms | 1.22× |
| SWC | 8.46 ms | 8.23 ms | 9.60 ms | 2.09× |

## Semantic

The ECMAScript specification defines a set of early errors that conformant implementations must report before execution. Some of these are detectable during parsing from local context alone, like `return` outside a function, `yield` outside a generator, invalid destructuring, etc. Others require knowledge of the program's scope structure and bindings, such as redeclarations, unresolved exports, private fields used outside their class, etc.

Parsers handle this differently: SWC checks some scope-dependent errors during parsing itself, while Yuku and Oxc defer them entirely to a separate semantic analysis pass. This keeps parsing fast and lets each consumer opt in only to the work it actually needs. A formatter, for example, only needs the AST and should not pay the cost of scope resolution.

The benchmarks below measure parsing followed by this additional pass, which builds a scope tree and symbol table, resolves identifier references to their declarations, and reports the remaining early errors. Together, parsing and semantic analysis cover the full set of early errors required by the specification.

### [angular-all.mjs](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/angular-all.mjs)

![Bar chart comparing parser speeds with semantic analysis for angular-all.mjs](charts/angular_all_mjs_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku + Semantic | 9.60 ms | 9.56 ms | 9.89 ms | 1.00× |
| Oxc + Semantic | 15.33 ms | 11.04 ms | 18.08 ms | 1.60× |

### [antd-components.tsx](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/antd-components.tsx)

![Bar chart comparing parser speeds with semantic analysis for antd-components.tsx](charts/antd_components_tsx_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku + Semantic | 1.45 ms | 1.44 ms | 1.47 ms | 1.00× |
| Oxc + Semantic | 1.62 ms | 1.60 ms | 1.73 ms | 1.12× |

### [checker516.ts](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/checker516.ts)

![Bar chart comparing parser speeds with semantic analysis for checker516.ts](charts/checker516_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku + Semantic | 14.17 ms | 14.11 ms | 16.19 ms | 1.00× |
| Oxc + Semantic | 16.58 ms | 16.45 ms | 26.38 ms | 1.17× |

### [class-dense.js](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/class-dense.js)

![Bar chart comparing parser speeds with semantic analysis for class-dense.js](charts/class_dense_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Oxc + Semantic | 35.22 ms | 34.78 ms | 54.84 ms | 1.00× |
| Yuku + Semantic | 42.29 ms | 41.78 ms | 49.05 ms | 1.20× |

### [core-js.js](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/core-js.js)

![Bar chart comparing parser speeds with semantic analysis for core-js.js](charts/core_js_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku + Semantic | 5.44 ms | 5.40 ms | 5.76 ms | 1.00× |
| Oxc + Semantic | 6.37 ms | 6.33 ms | 6.65 ms | 1.17× |

### [d3-src.js](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/d3-src.js)

![Bar chart comparing parser speeds with semantic analysis for d3-src.js](charts/d3_src_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku + Semantic | 2.12 ms | 2.09 ms | 2.37 ms | 1.00× |
| Oxc + Semantic | 2.72 ms | 2.57 ms | 2.92 ms | 1.28× |

### [effect-src.ts](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/effect-src.ts)

![Bar chart comparing parser speeds with semantic analysis for effect-src.ts](charts/effect_src_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku + Semantic | 7.61 ms | 7.55 ms | 7.96 ms | 1.00× |
| Oxc + Semantic | 8.22 ms | 8.16 ms | 9.09 ms | 1.08× |

### [express.js](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/express.js)

![Bar chart comparing parser speeds with semantic analysis for express.js](charts/express_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku + Semantic | 0.24 ms | 0.24 ms | 0.26 ms | 1.00× |
| Oxc + Semantic | 0.30 ms | 0.29 ms | 0.31 ms | 1.21× |

### [formatjs-icu.ts](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/formatjs-icu.ts)

![Bar chart comparing parser speeds with semantic analysis for formatjs-icu.ts](charts/formatjs_icu_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku + Semantic | 0.45 ms | 0.45 ms | 0.46 ms | 1.00× |
| Oxc + Semantic | 0.53 ms | 0.52 ms | 0.54 ms | 1.17× |

### [ghost-server.js](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/ghost-server.js)

![Bar chart comparing parser speeds with semantic analysis for ghost-server.js](charts/ghost_server_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku + Semantic | 7.96 ms | 7.93 ms | 8.34 ms | 1.00× |
| Oxc + Semantic | 8.79 ms | 8.73 ms | 9.77 ms | 1.10× |

### [highlightjs-languages.js](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/highlightjs-languages.js)

![Bar chart comparing parser speeds with semantic analysis for highlightjs-languages.js](charts/highlightjs_languages_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku + Semantic | 2.52 ms | 2.50 ms | 2.58 ms | 1.00× |
| Oxc + Semantic | 3.37 ms | 3.36 ms | 3.41 ms | 1.34× |

### [i18next-src.js](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/i18next-src.js)

![Bar chart comparing parser speeds with semantic analysis for i18next-src.js](charts/i18next_src_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku + Semantic | 0.58 ms | 0.57 ms | 0.73 ms | 1.00× |
| Oxc + Semantic | 0.69 ms | 0.69 ms | 0.71 ms | 1.20× |

### [libdom516.d.ts](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/libdom516.d.ts)

![Bar chart comparing parser speeds with semantic analysis for libdom516.d.ts](charts/libdom516_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku + Semantic | 3.70 ms | 3.69 ms | 3.89 ms | 1.00× |
| Oxc + Semantic | 3.79 ms | 3.77 ms | 3.84 ms | 1.02× |

### [lodash-es.js](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/lodash-es.js)

![Bar chart comparing parser speeds with semantic analysis for lodash-es.js](charts/lodash_es_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku + Semantic | 2.23 ms | 2.22 ms | 2.26 ms | 1.00× |
| Oxc + Semantic | 2.61 ms | 2.58 ms | 2.66 ms | 1.17× |

### [nest-core.ts](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/nest-core.ts)

![Bar chart comparing parser speeds with semantic analysis for nest-core.ts](charts/nest_core_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku + Semantic | 2.92 ms | 2.89 ms | 3.04 ms | 1.00× |
| Oxc + Semantic | 3.30 ms | 3.27 ms | 5.78 ms | 1.13× |

### [opencode.ts](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/opencode.ts)

![Bar chart comparing parser speeds with semantic analysis for opencode.ts](charts/opencode_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku + Semantic | 7.90 ms | 7.83 ms | 8.22 ms | 1.00× |
| Oxc + Semantic | 9.06 ms | 8.97 ms | 12.41 ms | 1.15× |

### [pd-dense.ts](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/pd-dense.ts)

![Bar chart comparing parser speeds with semantic analysis for pd-dense.ts](charts/pd_dense_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Oxc + Semantic | 33.10 ms | 32.63 ms | 35.69 ms | 1.00× |
| Yuku + Semantic | 37.19 ms | 36.91 ms | 39.59 ms | 1.12× |

### [react-dom.production.min.js](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/react-dom.production.min.js)

![Bar chart comparing parser speeds with semantic analysis for react-dom.production.min.js](charts/react_dom_production_min_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku + Semantic | 1.81 ms | 1.80 ms | 1.92 ms | 1.00× |
| Oxc + Semantic | 2.29 ms | 2.28 ms | 2.32 ms | 1.27× |

### [react1702.js](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/react1702.js)

![Bar chart comparing parser speeds with semantic analysis for react1702.js](charts/react1702_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku + Semantic | 0.40 ms | 0.40 ms | 0.41 ms | 1.00× |
| Oxc + Semantic | 0.50 ms | 0.49 ms | 0.52 ms | 1.24× |

### [ref-acorn.js](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/ref-acorn.js)

![Bar chart comparing parser speeds with semantic analysis for ref-acorn.js](charts/ref_acorn_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku + Semantic | 1.19 ms | 1.19 ms | 1.23 ms | 1.00× |
| Oxc + Semantic | 1.33 ms | 1.32 ms | 1.35 ms | 1.11× |

### [ref-assemblyscript.ts](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/ref-assemblyscript.ts)

![Bar chart comparing parser speeds with semantic analysis for ref-assemblyscript.ts](charts/ref_assemblyscript_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku + Semantic | 9.30 ms | 9.25 ms | 9.81 ms | 1.00× |
| Oxc + Semantic | 10.75 ms | 10.70 ms | 11.90 ms | 1.16× |

### [ref-babel.ts](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/ref-babel.ts)

![Bar chart comparing parser speeds with semantic analysis for ref-babel.ts](charts/ref_babel_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku + Semantic | 5.91 ms | 5.88 ms | 6.00 ms | 1.00× |
| Oxc + Semantic | 6.57 ms | 6.53 ms | 7.05 ms | 1.11× |

### [ts-pattern.ts](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/ts-pattern.ts)

![Bar chart comparing parser speeds with semantic analysis for ts-pattern.ts](charts/ts_pattern_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku + Semantic | 0.67 ms | 0.67 ms | 0.69 ms | 1.00× |
| Oxc + Semantic | 0.71 ms | 0.70 ms | 0.73 ms | 1.05× |

### [vue-src.ts](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/vue-src.ts)

![Bar chart comparing parser speeds with semantic analysis for vue-src.ts](charts/vue_src_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku + Semantic | 6.04 ms | 6.00 ms | 6.32 ms | 1.00× |
| Oxc + Semantic | 7.38 ms | 7.32 ms | 7.81 ms | 1.22× |

### [zod-src.ts](https://raw.githubusercontent.com/hax/parser-benchmark-files/refs/heads/expanded-samples/samples/zod-src.ts)

![Bar chart comparing parser speeds with semantic analysis for zod-src.ts](charts/zod_src_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku + Semantic | 8.75 ms | 8.71 ms | 9.16 ms | 1.00× |
| Oxc + Semantic | 9.82 ms | 9.76 ms | 10.87 ms | 1.12× |


## Methodology

Parsing is timed in-process to isolate it from process startup, dynamic linking, file I/O, and memory teardown, which would otherwise dominate the measurement on smaller files.

The source is read once, then each parser runs 50 warmup iterations followed by 300 timed iterations. A monotonic clock wraps only the parse call (plus the semantic pass for the semantic variants); allocation and teardown happen outside the timed region, and the result passes through an optimization barrier so the work cannot be elided. Reported figures are the median, minimum, and 99th percentile of the timed runs.

Binaries are built with release optimizations: Rust with `cargo build --release` (LTO, single codegen unit, symbol stripping) and Zig with `zig build --release=fast`. Each uses a fast general-purpose allocator (Rust `mimalloc`, Zig `smp_allocator`).