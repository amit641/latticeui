# latticeui-core

Framework-agnostic core for **LatticeUI**: lightweight state machines, anatomy contracts (stable `data-scope`/`data-part` attributes), and DOM utilities. Zero dependencies.

- **Documentation:** https://amit641.github.io/latticeui
- **Repository:** https://github.com/amit641/latticeui
- **License:** MIT

Most apps should install [`latticeui-react`](https://www.npmjs.com/package/latticeui-react) instead. Use this package directly only if you are building your own framework adapter.

## Install

```bash
npm install latticeui-core
```

## Usage

```ts
import { buttonAnatomy, createDisclosureMachine } from "latticeui-core";

const machine = createDisclosureMachine();
machine.send("OPEN");
```

See the [full documentation](https://amit641.github.io/latticeui) for the anatomy contracts and machine APIs.
