---
assert: major
---

Rename the exported `AssertError` class to `AssertionError`.

This is a breaking API change. Update imports and `instanceof` checks from `AssertError` to `AssertionError`.
