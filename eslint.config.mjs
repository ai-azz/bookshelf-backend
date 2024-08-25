import globals from "globals";
import pluginJs from "@eslint/js";


export default [
    {
        files: ["**/*.js"], 
        languageOptions: {sourceType: "commonjs"}
    },
    {
        languageOptions: { globals: globals.node }
    },
    pluginJs.configs.recommended,
    {
        rules: {
            "semi": ["error", "always"],  
            "indent": ["error", 4],  
            "no-unused-vars": "error", 
            "quotes": ["error", "double"],
            "space-before-function-paren": ["error", "never"],
        },
    },
];