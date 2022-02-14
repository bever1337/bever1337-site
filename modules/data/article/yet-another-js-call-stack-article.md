---
created: 2022-02-14T03:19:31.931Z
updated: 2022-02-14T02:10:34.407Z
title: Yet another JS call stack article
---
## Yet another JS call stack article

### Prerequisites

Better articles from better authors better explain Call Stacks and the JS interpreter:

- [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack) glossary entry
- [Mathias explains JS `async` and vanilla promises can be optimized differently by the engine.](https://mathiasbynens.be/notes/async-stack-traces) (I'm guilty. I've wrongly claimed `await` was nothing more than sugar!)

An important excerpt from the above article:

> The fundamental difference between await and vanilla promises is that await X() suspends execution of the current function, while promise.then(X) continues execution of the current function after adding the X call to the callback chain.

Now that we're Call Stack experts, I'll skip to Rust and WASM. From [the docs](https://rustwasm.github.io/wasm-bindgen/reference/js-promises-and-rust-futures.html#working-with-a-js-promise-and-a-rust-future):

> converting a Promise to Rust creates a `impl Future<Output = Result<JsValue, JsValue>>`. This corresponds to `then` and `catch` in JS where a successful promise becomes `Ok` and an erroneous promise becomes `Err`.

A quick survey of our toolbox suggests Rust developers targeting WASM will use `std` or custom executors for `Future` and `JSPromise` support. Existing code using async frameworks like `tokio` and `async-std` will not immediately compile to WASM:

- [`wasm-bindgen`](https://github.com/rustwasm/wasm-bindgen/issues/146) and [`futures`](https://github.com/rust-lang/futures-rs/issues/60) can compile with `no_std`, but
- tokio [doesn't support WASM](https://github.com/tokio-rs/tokio/issues/1597) [or `no_std`](https://github.com/tokio-rs/mio/issues/21)
- and neither does [`async-std`](https://github.com/async-rs/async-std/issues/220).

