function PostFind(schema, options) {
    schema.post("find", function(rows, done) {
        if (options.find) {
            options.find.apply(this, [rows, done]);
        }
    });

    schema.post("findOne", function(rows, done) {
        if (options.findOne) {
            options.findOne.apply(this, [rows, done]);
        }
    });
}

module.exports = PostFind;