module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["plugin:cypress/recommended"],
    "plugins": [
        "@typescript-eslint",
        "cypress"
    ], 
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "quotes": ["error", "double"],
        "cypress/no-assigning-return-values": "error",
        "cypress/no-unnecessary-waiting": "error",
        "cypress/assertion-before-screenshot": "warn",
        "cypress/no-force": "warn",
        "no-unused-vars": "warn",
        "require-jsdoc": "warn",
        "max-len": [ "error", { "code": 120 } ]
      },
}
