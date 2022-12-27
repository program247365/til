---
title: "See Output of Rust Project's LLVM IR"
date: 2021-03-24
tag: rust llvm
---

- [cargo-llvm-lines — Rust/Cargo add-on // Lib.rs](https://lib.rs/crates/cargo-llvm-lines)

- install `cargo install cargo-llvm-lines`

- usage

```zsh
cargo llvm-lines | head -20

  Lines         Copies       Function name
  -----         ------       -------------
  30737 (100%)  1107 (100%)  (TOTAL)
   1395 (4.5%)    83 (7.5%)  core::ptr::drop_in_place
    760 (2.5%)     2 (0.2%)  alloc::slice::merge_sort
    734 (2.4%)     2 (0.2%)  alloc::raw_vec::RawVec<T,A>::reserve_internal
    666 (2.2%)     1 (0.1%)  cargo_llvm_lines::count_lines
    490 (1.6%)     1 (0.1%)  <std::process::Command as cargo_llvm_lines::PipeTo>::pipe_to
    476 (1.5%)     6 (0.5%)  core::result::Result<T,E>::map
    440 (1.4%)     1 (0.1%)  cargo_llvm_lines::read_llvm_ir
    422 (1.4%)     2 (0.2%)  alloc::slice::merge
    399 (1.3%)     4 (0.4%)  alloc::vec::Vec<T>::extend_desugared
    388 (1.3%)     2 (0.2%)  alloc::slice::insert_head
    366 (1.2%)     5 (0.5%)  core::option::Option<T>::map
    304 (1.0%)     6 (0.5%)  alloc::alloc::box_free
    296 (1.0%)     4 (0.4%)  core::result::Result<T,E>::map_err
    295 (1.0%)     1 (0.1%)  cargo_llvm_lines::wrap_args
    291 (0.9%)     1 (0.1%)  core::char::methods::<impl char>::encode_utf8
    286 (0.9%)     1 (0.1%)  cargo_llvm_lines::run_cargo_rustc
    284 (0.9%)     4 (0.4%)  core::option::Option<T>::ok_or_else

```
