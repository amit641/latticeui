# latticeui-tokens

Design tokens for **LatticeUI**, authored in the W3C design-tokens JSON format and compiled to CSS custom properties and TypeScript types. The single source of truth for color, spacing, typography, radii, and more.

- **Documentation:** https://amit641.github.io/latticeui
- **Repository:** https://github.com/amit641/latticeui
- **License:** MIT

## Install

```bash
npm install latticeui-tokens
```

## Usage

Import the generated CSS variables once at your app entry:

```ts
import "latticeui-tokens/tokens.css";
```

Or consume the typed values in JS/TS:

```ts
import { tokens } from "latticeui-tokens";
```

The default theme is dark; switch with `data-theme="light"` on the root element (pure CSS variables, no re-render).

See the [full documentation](https://amit641.github.io/latticeui) for the token reference and theming.
