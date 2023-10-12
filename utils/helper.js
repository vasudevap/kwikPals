const moment = require('moment'); 

// Function to format the date and return
const formattedDate = function (createdAt) {
    return moment(createdAt).format('MMMM Do YYYY, h:mm a'); // October 12th 2023, 4:30 pm
}

module.exports = formattedDate;