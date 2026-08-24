# Clipboard Image Importer

Clipboard Image Importer is an Adobe After Effects ScriptUI tool that saves an image from the system clipboard, imports it as footage, and can place it directly into the active composition.

**Project status: Final Draft**

## Features

- Paste a copied image or supported copied image file into After Effects
- Store imported images beside the saved After Effects project or in a custom fallback folder
- Organize imported footage inside a `Clipboard Images` project folder
- Optionally add the imported image to the active composition
- Place the new layer at the current composition time
- Center the layer in the composition
- Scale the layer using None, Fit, or Fill modes
- Dockable panel and headless quick-import entry points
- Persistent settings and a detailed debug log
- Supported copied-file extensions: PNG, JPG/JPEG, WebP, BMP, GIF, TIFF, and PSD

## Repository Files

- `ScriptUI Panels/ClipboardImageImporter.jsx` — dockable panel entry point
- `ScriptUI Panels/ClipboardImageImporterCore.jsxinc` — core used by the dockable panel
- `ClipboardImageQuickImport.jsx` — quick-import entry point for use from a shortcut or the Scripts menu
- `ClipboardImageImporterCore.jsxinc` — core used by the quick-import script

The two core files are intentionally kept beside their respective entry points.

## Installation

### Dockable Panel

Copy both files from `ScriptUI Panels` into the After Effects `Scripts/ScriptUI Panels` directory.

- Windows: `C:\Program Files\Adobe\Adobe After Effects <version>\Support Files\Scripts\ScriptUI Panels\`
- macOS: `/Applications/Adobe After Effects <version>/Scripts/ScriptUI Panels/`

Restart After Effects, then open **Window > Clipboard Image Importer**.

### Quick Import

Keep `ClipboardImageQuickImport.jsx` and the root `ClipboardImageImporterCore.jsxinc` together, and copy them into the After Effects `Scripts` directory. Run the script from **File > Scripts**, or assign it through your preferred shortcut workflow.

In After Effects preferences, enable **Allow Scripts to Write Files and Access Network** so the tool can save clipboard data and run its platform helper.

## Usage

1. Copy an image or supported image file.
2. Open the panel and configure the storage and placement options under **Settings**.
3. Click **Paste Image**.
4. If an import fails, use **Open Debug Log** and keep the log for troubleshooting.

## Status

**Final Draft.** The current functionality is accepted and no further feature changes are planned before release. The repository remains private until the decision is made to publish it.
