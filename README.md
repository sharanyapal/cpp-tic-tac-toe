# Tic-Tac-Toe Game

Two-player command-line Tic-Tac-Toe game with historical compiler variants.

This repository contains the original files from a supplied collection, preserved without changing the source code.

## Contents

- `tic-tac-toe-turbo-cplusplus.cpp`
- `tic-tac-toe-visual-cplusplus.cpp`

## Build notes

### Modern compiler variant
The file `tic-tac-toe-visual-cplusplus.cpp` passed a **syntax-only C++17 compiler check** using `g++` in the packaging environment. To compile it with GCC:

```bash
g++ -std=c++17 "tic-tac-toe-visual-cplusplus.cpp" -o app
./app
```

This is a compile check, **not** a functional test. Some programs write relative `.DAT` files; run them in an appropriate working directory.

## Notes

- The `.DAT` files (where present) are historical sample records included with the source, **not** Git LFS requirements. Review their contents before making this repo public.
- `.doc` files (where present) are archived output screenshots/examples, not modern documentation.
- Original author/contributor names and historical metadata may appear in the supplied files. No new ownership or open-source license is claimed. Check redistribution rights before public release.
- Code is provided as-is. No claims of production security or cross-platform compatibility.


## Run original C++ in your browser

[Interactive WebAssembly playground](https://sharanyapal.github.io/cpp-tic-tac-toe/) compiles the original C++ with browser adapters under `web/`. Enable **Settings → Pages → Build and deployment → GitHub Actions** to publish. The original C++ source is unchanged.
