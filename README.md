# Mongoose PostFind

A Mongoose plugin that lets you modify the results of a Mongoose Find or FindOne

## Usage

```
postFind = require('mongoose-post-find');

MySchema.plugin(postFind, {
    find: function(results, done) {
        for (result of results) {
            result.newField = "Testing";
        }
        done(null, results);
    },
    findOne: function(result, done) {
        result.newField = "Testing";
        done(null, result);
    }
});
```

## Previous Work

This plugin is based on the now-unmaintained [mongoose-post-find](https://www.npmjs.com/package/mongoose-post-find) and is almost a drop-in replacement. The big difference is that mongoose-post-find allows for an array of functions to be passed in. That isn't necessary for my project, but if you want it, please help contribute by sending a fix in a pull request. While it is based on that plugin, it is a complete rewrite.

## License

### MIT

Copyright 2019 Jason Norwood-Young

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.