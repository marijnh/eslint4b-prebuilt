# eslint4b-prebuilt

[ESLint](https://eslint.org/) itself is written for node.js, and the developers do not support running it in the browser.

[eslint4b](https://github.com/mysticatea/eslint4b) is a package that prepares ESLint for browser use. This still references a number of built-in node packages and includes modern JavaScript.

This package sets up a build process on top of eslint4b to produce a single UMD file that can be loaded in the browser, including IE11, without further complication.

This file is huge (over a megabyte) and likely to contain polyfills and packages that you're also loading in another way. As such, see it as a kludge to easily pull in ESLint without complicating your own build process, rather than a good, solid solution.

