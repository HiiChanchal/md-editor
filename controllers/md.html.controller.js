const mdService = require("../services/md.html.service")
exports.textToConvert = (req,res) => {
    const { markdown } = req.body;

    if(!markdown){
        return res.status(400).json({error : "Invalid text, Please enter text and Try again"});
    }

    const textData = mdService.htmlTextConversion(markdown);
    return res.json({ textData });
}