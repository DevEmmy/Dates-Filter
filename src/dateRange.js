"use strict";
// This Enum acts as a filter for the various options that a client can select
var FilterType;
(function (FilterType) {
    FilterType["EVERYDAY"] = "EVERYDAY";
    FilterType["MON_FRI"] = "MON_FRI";
    FilterType["WEEKEND"] = "WEEKEND";
})(FilterType || (FilterType = {}));
// This function performs the whole logic and returns the array of dates specified by the filter type 
const getDateArray = (startDate, endDate, type) => {
    let dateArray = []; // create an empty array which will contain the filtered dates
    let yearDifference = endDate.getFullYear() - startDate.getFullYear();
    let difference = 0;
    if (yearDifference == 0) {
        let monthsBetween = endDate.getMonth() - startDate.getMonth() - 1;
        for (let i = 1; i <= monthsBetween; ++i) {
            let monthIndex = startDate.getMonth() + i;
            difference += getDaysInMonth(startDate.getFullYear(), monthIndex + 1);
        }
        let startDays = getDaysInMonth(startDate.getFullYear(), startDate.getMonth() + 1);
        difference += (startDays - startDate.getDate());
        difference += endDate.getDate();
    }
    else {
        let monthsLeft = 11 - startDate.getMonth();
        for (let i = 1; i <= monthsLeft; ++i) {
            let monthIndex = startDate.getMonth() + i;
            difference += getDaysInMonth(startDate.getFullYear(), monthIndex + 1);
        }
        let startDays = getDaysInMonth(startDate.getFullYear(), startDate.getMonth() + 1);
        difference += (startDays - startDate.getDate());
        if (yearDifference > 1) {
            for (let i = 1; i < yearDifference; ++i) {
                difference += getDaysInYear(startDate.getFullYear() + i);
            }
        }
        let monthsInNew = endDate.getMonth();
        for (let i = 0; i < monthsInNew; ++i) {
            difference += getDaysInMonth(endDate.getFullYear(), i + 1);
        }
        difference += endDate.getDate();
    }
    filter(difference, dateArray, type);
    return dateArray; // returns the filtered dates
};
// this function loops through all possible dates and filters them
const filter = (difference, dateArray, type) => {
    for (let i = 0; i <= difference; i++) // 
     {
        let date = new Date();
        date.setDate(date.getDate() + i); // get possible date under the difference
        if (type == FilterType.EVERYDAY) {
            dateArray.push(date); // appends the date to empty array created above if filter type is everyday
        }
        else if (type == FilterType.MON_FRI && (date.getDay() > 0 && date.getDay() < 6)) {
            dateArray.push(date); // appends the date to empty array created above if filter type is monday - friday
        }
        else if (type == FilterType.WEEKEND && (date.getDay() == 6 || date.getDay() == 0)) {
            dateArray.push(date); // appends the date to empty array created above if filter type is weekend
        }
    }
};
const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
};
const getDaysInYear = (year) => {
    return ((year % 4 === 0 && year % 100 > 0) || year % 400 == 0) ? 366 : 365;
};
let today = new Date();
let date1 = new Date(2022, 11, 31);
let date2 = new Date(2023, 0, 12);
let date3 = new Date(2023, 1, 28);
// console.log(date1)
console.log(getDateArray(new Date(), date1, FilterType.EVERYDAY));
console.log(getDateArray(new Date(), date2, FilterType.MON_FRI));
console.log(getDateArray(new Date(), date3, FilterType.WEEKEND));
