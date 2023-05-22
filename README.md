# Learning Bun

# Install
```
curl -fsSL https://bun.sh/install | bash
```

# Use
Use JavaScript or TypeScript - it's all included!
```
bun run runs/fibonacci.ts
bun run runs/index.js
```

# How?
Bun is a drop-in replacement for Node.JS. It extends the [JavaScriptCore engine](https://trac.webkit.org/wiki/JavaScriptCore) which is the JavaScript engine for WebKit (the browser engine for iOS devices). 

Bun is written in [Zig](https://ziglang.org/), which is a low-level programming language - similar to C++ and Rust. Which means it implements its various features from scratch!
- JSX/TypeScript transpiler
- npm client
- bundler
- HTTP client
- and more