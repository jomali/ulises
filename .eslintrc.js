const fs = require("fs");
const path = require("path");

const getAllDirs = (dir) => {
  const directoryPath = path.join(__dirname, dir);
  const files = fs.readdirSync(directoryPath);
  return files.map((value) => value.split(".")[0]);
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["react-app", "plugin:prettier/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "@typescript-eslint/no-unused-expressions": "off",
    "import/no-anonymous-default-export": "off",
    "import/order": [
      "warn",
      {
        alphabetize: { order: "asc", caseInsensitive: true },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            // prints 'dir,dir/**' for each dir
            pattern: `{${getAllDirs("src").join(",")},${getAllDirs("src")
              .map((dir) => `${dir}/**`)
              .join(",")}}`,
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
      },
    ],
    "no-debugger": "error",
    "no-unused-expressions": "off",
    "prefer-const": "error",
    "react/jsx-fragments": "error",
    "react/jsx-no-useless-fragment": "error",
  },
};
