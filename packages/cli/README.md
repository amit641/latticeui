# latticeui-cli

The **LatticeUI** CLI. Eject any component's source straight into your repo so you fully own the code — and still pull upstream improvements later via a 3-way merge.

- **Documentation:** https://amit641.github.io/latticeui
- **Repository:** https://github.com/amit641/latticeui
- **License:** MIT

## Usage

No install required — run it with `npx`:

```bash
# list available components
npx latticeui-cli list

# eject a component into your project
npx latticeui-cli add button

# pull upstream changes into ejected components (3-way merge)
npx latticeui-cli update button
```

Or install it as a dev dependency to get the `latticeui` command:

```bash
npm install -D latticeui-cli
```

See the [full documentation](https://amit641.github.io/latticeui/cli) for the eject-and-update workflow.
