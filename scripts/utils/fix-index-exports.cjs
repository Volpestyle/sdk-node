const fs = require('fs');
const path = require('path');

const indexJs =
  process.env['DIST_PATH'] ?
    path.resolve(process.env['DIST_PATH'], 'index.js')
  : path.resolve(__dirname, '..', '..', 'dist', 'index.js');

let before = fs.readFileSync(indexJs, 'utf8');

// Instead of overriding all exports, just set the default export
// while preserving named exports like Wallcrawler
let after = before.replace(
  /^\s*exports\.default\s*=\s*(\w+)/m,
  'module.exports = $1;\nmodule.exports.default = $1;\n// Preserve all named exports by copying them back\nfor (const key in exports) {\n  if (key !== "default") {\n    module.exports[key] = exports[key];\n  }\n}',
);

fs.writeFileSync(indexJs, after, 'utf8');
