"use strict";
var FilterType;
(function (FilterType) {
    FilterType["EVERYDAY"] = "EVERYDAY";
    FilterType["MON_FRI"] = "MON_FRI";
    FilterType["WEEKEND"] = "WEEKEND";
})(FilterType || (FilterType = {}));
const getDateArray = (startDate, endDate, type) => {
    let dateArray = [];
    let difference = endDate.getDate() - startDate.getDate();
    loop(difference, dateArray, type);
    return dateArray;
};
const loop = (difference, dateArray, type) => {
    for (let i = 0; i <= difference; i++) {
        let date = new Date();
        date.setDate(date.getDate() + i);
        if (type == FilterType.EVERYDAY) {
            dateArray.push(date);
        }
        else if (type == FilterType.MON_FRI && (date.getDay() > 0 && date.getDay() < 6)) {
            dateArray.push(date);
        }
        else if (type == FilterType.WEEKEND && (date.getDay() == 6 || date.getDay() == 0)) {
            dateArray.push(date);
        }
    }
};
let date1 = new Date();
date1.setDate(date1.getDate() + 9);
console.log(getDateArray(new Date(), date1, FilterType.WEEKEND));
