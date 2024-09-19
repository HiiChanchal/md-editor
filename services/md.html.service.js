const { marked } = require("marked")

exports.htmlTextConversion = (textDoc) => {
    return marked(textDoc);
}