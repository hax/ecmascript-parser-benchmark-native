import Bun from "bun";
import { rmSync } from "node:fs";

const DEST = "files";
const PARSER_BENCH_FILES_REPO_URL = "https://github.com/hax/parser-benchmark-files";
const PARSER_BENCH_FILES_BRANCH = "expanded-samples";

function git(args: string[], cwd?: string): string {
  const { stdout, exitCode } = Bun.spawnSync({ cmd: ["git", ...args], cwd });
  return exitCode === 0 ? stdout.toString().trim() : "";
}

const upstreamCommit = git(["ls-remote", PARSER_BENCH_FILES_REPO_URL, `refs/heads/${PARSER_BENCH_FILES_BRANCH}`]).split(/\s+/)[0] ?? "";
const localCommit = (await Bun.file(`${DEST}/.git/HEAD`).exists()) ? git(["rev-parse", "HEAD"], DEST) : "";

if (!upstreamCommit) {
  console.log(localCommit ? "\nCould not reach upstream, using existing files\n" : "\nCould not reach upstream and no files present\n");
  process.exit(localCommit ? 0 : 1);
}

if (localCommit === upstreamCommit) {
  process.exit(0);
}

console.log(localCommit ? "\nUpstream changed, redownloading files..." : "\nDownloading files...");

rmSync(DEST, { recursive: true, force: true });

Bun.spawnSync({
  cmd: ["git", "clone", "--quiet", "--no-progress", "--single-branch", "--branch", PARSER_BENCH_FILES_BRANCH, "--depth", "1", PARSER_BENCH_FILES_REPO_URL, DEST],
});

console.log("\nFiles downloaded\n");
