const moment =  require('moment')

const getCurrentTimestamp = () => {
    const date = moment().format('YYYY-MM-DD H:mm:ss');
    return date;
}

module.exports = {
    getCurrentTimestamp
}