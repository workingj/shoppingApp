const timelogger = (req, res, next) => {
  var date = new Date();
  console.log(date, req.method);
  // console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);
  // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  next();
};

export default timelogger;
