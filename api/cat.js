const axios = require('axios').default;

module.exports = async (req, res) => {
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    var cat = await axios.get("https://cataas.com/cat", {
        responseType: 'stream'
    })
    
    cat.data.pipe(res);
};