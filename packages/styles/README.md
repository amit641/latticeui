# latticeui-styles

Zero-runtime CSS recipes for **LatticeUI**. Every component's styles live inside the `@layer latticeui` cascade layer, so your own unlayered CSS always wins — overriding is effortless and there is no runtime cost.

- **Documentation:** https://amit641.github.io/latticeui
- **Repository:** https://github.com/amit641/latticeui
- **License:** MIT

## Install

```bash
npm install latticeui-styles latticeui-tokens
```

## Usage

Import once at your app entry, after the tokens:

```ts
import "latticeui-tokens/tokens.css";
import "latticeui-styles/index.css";
```

Styling hooks onto stable `data-scope` / `data-part` attributes, e.g.:

```css
[data-scope="button"][data-part="root"] {
  /* your overrides */
}
```

See the [full documentation](https://amit641.github.io/latticeui) for the styling contract and theming.
