const mdService = require("../services/md.html.service")
exports.textToConvert=(req,res)=>{
    const userText = req.body;
    if(!userText){
        return res.status(400).json({error : "Invalid text, Please enter text and Try again"});
    }
    const textData = mdService.htmlTextConversion(userText);
    res.json({textData});
}