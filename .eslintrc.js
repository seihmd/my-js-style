module.exports = {
  "env": {
    "browser": true,
    "node": true
  },
  "extends": [
    "plugin:vue/recommended",
    "airbnb-base",
    "prettier"
  ],
  "plugins": ["prettier", "filenames"],
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module",
    "allowImportExportEverywhere": true,
    "codeFrame": false
  },
  "rules": {
    "no-unused-vars": ["error", {
      "args": "none"
    }],
    "filenames/match-regex": [2, "^[a-zA-Z0-9]+$", true],
    "filenames/match-exported": [2, [ null, "camel", "pascal" ] ],
    "prettier/prettier": ["error", {
      "singleQuote": true
    }]
  }
}
