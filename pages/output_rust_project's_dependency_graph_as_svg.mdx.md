---
title: "Output Rust Project's Dependency Graph as SVG"
date: 2022-01-03
tag: rust svg homebrew
---

- `brew install dot jq graphviz`
- `cargo install cargo-deps`

- simple

```bash
cargo deps | dot -Tsvg > depgraph.svg
```

- complicated filter

```bash
cargo deps --filter $(cargo metadata --format-version 1 | jq '.workspace_members[]' -r | cut -d ' ' -f 1 | tr '\n' ' ') | dot -Tsvg > depgraph.svg
```
