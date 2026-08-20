# Field Log Publishing Guide

`log.hsndm.me` reads `notes/index.json` and the Markdown files referenced by that manifest directly from the `main` branch of this repository.

To publish a note, add a Markdown file under `notes/`, create a matching entry in `notes/index.json`, and commit both files to `main`. The archive lists the entry immediately after the GitHub raw-content cache refreshes. Use a lowercase hyphenated `slug`, a concise excerpt, and a public GitHub source URL.
