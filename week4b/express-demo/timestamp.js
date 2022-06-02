const date_obj = new Date();

// day of month
const day = (`0${date_obj.getDate()}`).slice(-2);
 
const month = (`0${date_obj.getMonth() + 1}`).slice(-2);
 
const year = date_obj.getFullYear();
 
const hours = (`0${date_obj.getHours()}`).slice(-2);

const minutes = (`0${date_obj.getMinutes()}`).slice(-2);
 
const seconds = (`0${date_obj.getSeconds()}`).slice(-2);
 

// YYYY-MM-DD HH:MM:SS format

module.exports.ts_format = ()=>`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;