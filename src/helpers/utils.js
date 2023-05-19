const { data } = require("autoprefixer");

const utils = {};

// handle time array to return json {dayKey: {from: index, to: index}, weekKey (firstday of week): {from:index, to: index}, monthKey {firstday of month in data}: { from: index, to: index}}
utils.handleTimeDataImport = (timeArr) => {
  const result = {};
  const day = {};
  const week = {};
  const month = {};
  timeArr.forEach((time, index) => {
    const dateTemp = `${time[0]} ${time[1]}, ${time[2]} ${time[3]}`;
    const date = new Date(dateTemp);
    const dayKey = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    console.log(dayKey);
    // const weekKey = `${date.getWeek()}/${date.getFullYear()}`;
    // const monthKey = `${date.getMonth()}/${date.getFullYear()}`;
    if (!day[dayKey]) {
      day[dayKey] = {
        from: index,
        to: index,
      };
    } else {
      day[dayKey].to = index;
    }
    // if (!week[weekKey]) {
    //   week[weekKey] = {
    //     from: index,
    //     to: index,
    //   };
    // } else {
    //   week[weekKey].to = index;
    // }
    // if (!month[monthKey]) {
    //   month[monthKey] = {
    //     from: index,
    //     to: index,
    //   };
    // } else {
    //   month[monthKey].to = index;
    // }
  });
  result.day = day;
  // result.week = week;
  // result.month = month;
  return result;
}

module.exports = utils;