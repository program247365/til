---
title: "Pin Rust Version in Rust Project"
date: 2022-01-03
tag: rust cargo
---

- create a `rust-toolchain.toml` file in your root of your project and add the 'channel' field with the version of Rust you want to pin to

```toml
[toolchain]
channel = "1.57.0"
components = [ "rustfmt", "clippy" ]
```
