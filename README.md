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

This plugin is based on the now-unmaintained [mongoose-post-find](https://www.npmjs.com/package/mongoose-post-find) and is almost a drop-in replacement. The big difference is that mongoose-post-find allows for an array of functions to be passed in. That isn't necessary for my project, but if you want it, please help contribute by sending a fix in a pull request.