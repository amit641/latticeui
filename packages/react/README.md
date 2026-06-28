# latticeui-react

React components for **LatticeUI** — accessible, composable part-based components built on a framework-agnostic core, styled with zero-runtime CSS.

- **Documentation:** https://amit641.github.io/latticeui
- **Repository:** https://github.com/amit641/latticeui
- **License:** MIT

## Install

```bash
npm install latticeui-react latticeui-styles latticeui-tokens
```

## Usage

Import the stylesheets once at your app entry (all library CSS lives inside `@layer latticeui`, so it can never override your own styles):

```ts
import "latticeui-tokens/tokens.css";
import "latticeui-styles/index.css";
```

Then use components anywhere:

```tsx
import { Button, TextField, Dialog } from "latticeui-react";

export function Example() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>Open settings</Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Settings</Dialog.Title>
        <TextField label="Display name" />
        <Button>Save</Button>
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Root>
  );
}
```

Toasts need a provider once at the root:

```tsx
import { ToastProvider } from "latticeui-react";

<ToastProvider>{children}</ToastProvider>;
```

## What's in the family

| Package | Purpose |
| --- | --- |
| `latticeui-react` | React components and hooks (this package) |
| `latticeui-core` | Framework-agnostic state machines, anatomy contracts, DOM utils |
| `latticeui-styles` | Zero-runtime CSS recipes (cascade layers) |
| `latticeui-tokens` | W3C design tokens compiled to CSS variables |
| `latticeui-cli` | Eject component source into your repo with an upgrade path |

See the [full documentation](https://amit641.github.io/latticeui) for every component, variations, theming, and the AI manifest (`llms.txt`).
