# Tic-Tac-Toe

A two-player grid game with the original turn rules and win detection.

## Run in your browser (no setup)

**Open [`run-in-browser.html`](run-in-browser.html)** or double-click [`docs/index.html`](docs/index.html) after extracting the repository. You can also deploy the `docs/` folder to any static host.

> The browser playground is an independently written **JavaScript adaptation** of this repository's original C++ logic. It is not a C++ interpreter or WebAssembly binary. Original C++ sources are retained unchanged, and the HTML, CSS and JS demo is immediately usable offline.

### Static GitHub Pages

Go to **Settings → Pages → Build and deployment → Deploy from a branch**; choose `main` and `/docs`, then Save. Your site's intended address is `https://sharanyapal.github.io/cpp-tic-tac-toe/` after GitHub confirms a successful deployment.

The previous WebAssembly GitHub Actions workflow is not required for this standalone browser build. The included bulk upload script removes just that previous demo workflow and the superseded `web/` adapter from the **eight named repositories**, without deleting other project files.

### Original C++ source

- [tic-tac-toe-visual-cplusplus.cpp](tic-tac-toe-visual-cplusplus.cpp)
- All other historical C++, data and document files are kept unchanged.

### Browser features

- Interactive terminal-style output with keyboard input, restart, and downloadable transcript
- Games follow the original scoring, turns and rule logic
- Data apps use `localStorage` for records within the same browser, replacing local `.DAT` files; records can be cleared explicitly
- Files: `docs/index.html`, `docs/style.css`, `docs/terminal.js`, `docs/program.js`

### Note

This repository contains archived, third-party classroom-style C++ examples from a previously supplied collection. Review attribution and redistribution rights before publishing as your own original work.
