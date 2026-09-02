<div align="center">
  <img src="icon.png" width="96" alt="Keyboard Cleaner icon">
  <h1>Keyboard Cleaner</h1>
  <p>A tiny Chrome extension that gives you a safer place to wipe down your keyboard without accidentally triggering a dozen shortcuts.</p>

  <a href="https://chromewebstore.google.com/detail/keyboard-cleaner/chbkmgjlbjajobmccbbobhbeinffmbph"><img src="https://img.shields.io/badge/Chrome_Web_Store-Install-4285F4?logo=googlechrome&logoColor=white" alt="Install from Chrome Web Store"></a>
  <img src="https://img.shields.io/badge/Manifest-V3-34A853" alt="Manifest V3">
</div>

## What it does

Clicking the extension opens a dedicated cleaning tab. Inside that page, Keyboard Cleaner blocks most common modifier-key shortcuts, disables the context menu, and warns before the tab is closed.

It is intentionally small and slightly silly — the goal is just to reduce accidental input while cleaning a keyboard without shutting the computer down.

## Features

- Opens a dedicated extension-owned cleaning page from the toolbar icon.
- Blocks most `Ctrl`, `Cmd`, and `Alt` shortcut combinations inside that page.
- Prevents common refresh/developer-key presses such as `F5` and `F12`.
- Disables right-click while cleaning.
- Warns before leaving the cleaning tab.
- Attempts to enter fullscreen for a less distracting cleaning surface when the browser allows it.

## Limitations

Browsers intentionally do **not** let extensions intercept every system-level key. OS-reserved keys and some browser shortcuts can still escape the page, so this is a convenience tool rather than a true hardware keyboard lock.

## Tech

`JavaScript` · `Manifest V3` · `Background Service Worker` · `Extension Pages` · `Keyboard Events`

## Install locally

1. Clone this repository.
2. Open `chrome://extensions`.
3. Enable **Developer mode**.
4. Choose **Load unpacked** and select the repository folder.
5. Click the Keyboard Cleaner toolbar icon.

Or install the published version from the [Chrome Web Store](https://chromewebstore.google.com/detail/keyboard-cleaner/chbkmgjlbjajobmccbbobhbeinffmbph).

---

Part of [**Daniel's QOL**](https://github.com/denialguo/Daniel-s-QOL), a collection of 9 published Chrome extensions.