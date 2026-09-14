# Native ECMAScript Parser Benchmark

Benchmarks for ECMAScript parsers compiled to native binaries (Zig, Rust), measuring raw parsing speed without any JavaScript runtime overhead.

## System

| Property | Value |
|----------|-------|
| OS | macOS 25.6.0 (arm64) |
| CPU | Apple M3 |
| Cores | 8 |
| Memory | 16 GB |

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

### [typescript.js](https://raw.githubusercontent.com/yuku-toolchain/parser-benchmark-files/refs/heads/main/typescript.js)

**File size:** 7.83 MB

![Bar chart comparing native parser speeds for typescript.js](charts/typescript.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku | 20.30 ms | 20.16 ms | 20.87 ms | 1.00× |
| Oxc | 24.37 ms | 23.89 ms | 25.94 ms | 1.20× |
| SWC | 42.37 ms | 41.59 ms | 45.22 ms | 2.09× |

### [checker.ts](https://raw.githubusercontent.com/yuku-toolchain/parser-benchmark-files/refs/heads/main/checker.ts)

**File size:** 2.95 MB

![Bar chart comparing native parser speeds for checker.ts](charts/checker.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku | 6.74 ms | 6.70 ms | 6.99 ms | 1.00× |
| Oxc | 7.84 ms | 7.74 ms | 8.25 ms | 1.16× |
| SWC | 13.71 ms | 13.39 ms | 14.87 ms | 2.03× |

### [lib.dom.d.ts](https://raw.githubusercontent.com/yuku-toolchain/parser-benchmark-files/refs/heads/main/lib.dom.d.ts)

**File size:** 2.24 MB

![Bar chart comparing native parser speeds for lib.dom.d.ts](charts/lib_dom.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Oxc | 2.32 ms | 2.31 ms | 2.42 ms | 1.00× |
| Yuku | 2.37 ms | 2.36 ms | 2.42 ms | 1.02× |
| SWC | 4.90 ms | 4.77 ms | 5.17 ms | 2.11× |

### [react.js](https://raw.githubusercontent.com/yuku-toolchain/parser-benchmark-files/refs/heads/main/react.js)

**File size:** 0.07 MB

![Bar chart comparing native parser speeds for react.js](charts/react.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku | 0.12 ms | 0.12 ms | 0.14 ms | 1.00× |
| Oxc | 0.16 ms | 0.16 ms | 0.18 ms | 1.34× |
| SWC | 0.28 ms | 0.27 ms | 0.38 ms | 2.37× |

## Semantic

The ECMAScript specification defines a set of early errors that conformant implementations must report before execution. Some of these are detectable during parsing from local context alone, like `return` outside a function, `yield` outside a generator, invalid destructuring, etc. Others require knowledge of the program's scope structure and bindings, such as redeclarations, unresolved exports, private fields used outside their class, etc.

Parsers handle this differently: SWC checks some scope-dependent errors during parsing itself, while Yuku and Oxc defer them entirely to a separate semantic analysis pass. This keeps parsing fast and lets each consumer opt in only to the work it actually needs. A formatter, for example, only needs the AST and should not pay the cost of scope resolution.

The benchmarks below measure parsing followed by this additional pass, which builds a scope tree and symbol table, resolves identifier references to their declarations, and reports the remaining early errors. Together, parsing and semantic analysis cover the full set of early errors required by the specification.

### [typescript.js](https://raw.githubusercontent.com/yuku-toolchain/parser-benchmark-files/refs/heads/main/typescript.js)

![Bar chart comparing parser speeds with semantic analysis for typescript.js](charts/typescript_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku + Semantic | 44.97 ms | 44.13 ms | 53.25 ms | 1.00× |
| Oxc + Semantic | 55.77 ms | 54.24 ms | 67.82 ms | 1.24× |

### [checker.ts](https://raw.githubusercontent.com/yuku-toolchain/parser-benchmark-files/refs/heads/main/checker.ts)

![Bar chart comparing parser speeds with semantic analysis for checker.ts](charts/checker_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku + Semantic | 15.61 ms | 15.44 ms | 16.29 ms | 1.00× |
| Oxc + Semantic | 18.30 ms | 18.14 ms | 19.12 ms | 1.17× |

### [lib.dom.d.ts](https://raw.githubusercontent.com/yuku-toolchain/parser-benchmark-files/refs/heads/main/lib.dom.d.ts)

![Bar chart comparing parser speeds with semantic analysis for lib.dom.d.ts](charts/lib_dom_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku + Semantic | 4.39 ms | 4.36 ms | 4.50 ms | 1.00× |
| Oxc + Semantic | 4.69 ms | 4.59 ms | 7.54 ms | 1.07× |

### [react.js](https://raw.githubusercontent.com/yuku-toolchain/parser-benchmark-files/refs/heads/main/react.js)

![Bar chart comparing parser speeds with semantic analysis for react.js](charts/react_semantic.png)

| Parser | Median | Min | p99 | Relative |
|--------|--------|-----|-----|----------|
| Yuku + Semantic | 0.27 ms | 0.27 ms | 0.28 ms | 1.00× |
| Oxc + Semantic | 0.35 ms | 0.34 ms | 0.46 ms | 1.29× |

## Run Benchmarks

### Prerequisites

- [Bun](https://bun.sh/) - JavaScript runtime and package manager
- [Rust](https://www.rust-lang.org/tools/install) - For building Rust-based parsers
- [Zig](https://ziglang.org/download/) - For building Zig-based parsers (requires nightly/development version)

### Steps

1. Clone the repository:

```bash
git clone https://github.com/yuku-toolchain/ecmascript-parser-benchmark-native.git
cd ecmascript-parser-benchmark-native
```

2. Install dependencies:

```bash
bun install
```

3. Download the benchmark files:

```bash
bun load-files
```

4. Build the parsers:

```bash
bun run build
```

5. Run benchmarks:

```bash
bun bench
```

This will run benchmarks on all test files. Results are saved to the `result/` directory.

## Methodology

Parsing is timed in-process to isolate it from process startup, dynamic linking, file I/O, and memory teardown, which would otherwise dominate the measurement on smaller files.

The source is read once, then each parser runs 50 warmup iterations followed by 300 timed iterations. A monotonic clock wraps only the parse call (plus the semantic pass for the semantic variants); allocation and teardown happen outside the timed region, and the result passes through an optimization barrier so the work cannot be elided. Reported figures are the median, minimum, and 99th percentile of the timed runs.

Binaries are built with release optimizations: Rust with `cargo build --release` (LTO, single codegen unit, symbol stripping) and Zig with `zig build --release=fast`. Each uses a fast general-purpose allocator (Rust `mimalloc`, Zig `smp_allocator`).