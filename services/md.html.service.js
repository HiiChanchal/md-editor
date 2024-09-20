const { marked } = require("marked")

exports.htmlTextConversion = (userText) => {
    return marked(userText);
}