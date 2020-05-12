# todo-mvc-ts
TypeScript MVC App with mocha and webpack

## Quick Start
``` node

# Initialize empty repo
npm init

# Get typescript
npm i typescript --save

# Necessary dev dependencies
npm i webpack webpack-cli assert chai mocha mocha-webpack ts-loader typings --save-dev

# Mandatory to get mocha for testing
typings install dt~mocha --global --save

# Alternative to get type definitions of mocha
npm i @types/mocha

# To test
mocha-webpack --webpack-config webpack.config.test.js
npm i mocha-webpack@next --g 

# Bundle source file using
webpack --config webpack.config.js
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
