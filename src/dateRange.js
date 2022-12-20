"use strict";
// // This Enum acts as a filter for the various options that a client can select
// enum FilterType {
//     EVERYDAY = "EVERYDAY",
//     MON_FRI = "MON_FRI",
//     WEEKEND = "WEEKEND",
// }
// // This function performs the whole logic and returns the array of dates specified by the filter type 
// const getDateArray = (startDate: Date, endDate: Date, type: FilterType)=>
// {
//     let dateArray:Array<Date> = []; // create an empty array which will contain the filtered dates
//     let difference = endDate.getDate() - startDate.getDate() // get the difference between the date specified by the filter type
//     let monthDiff = endDate.getMonth() - startDate.getMonth(); // get the difference between the month specified by the filter type
//     let yearDiff = endDate.getFullYear() - startDate.getFullYear();
//     if(monthDiff < 0){
//         monthDiff += 12
//     }
//     // console.log(monthDiff)
//     if(monthDiff == 0){
//         filter(difference, dateArray, type); // filter the dates
//     }
//     else if(monthDiff == 1){
//         difference = getDaysInMonth(startDate.getFullYear(), startDate.getMonth()) - startDate.getDate() + endDate.getDate()
//         console.log(difference)
//         filter(difference, dateArray, type);
//     }
//     else{
//         difference = 0;
//         let monthInBetween = endDate.getMonth() - startDate.getMonth() - 1
//         if(monthInBetween < 0){
//             monthInBetween +=12
//         }
//         for (let i=1; i <= monthInBetween; i++){
//             let currentMonth = startDate.getMonth() + i
//             if (currentMonth > 11){
//                 currentMonth = currentMonth % 12
//             }
//             if(startDate.getMonth() < 11){
//                 difference += getDaysInMonth(startDate.getFullYear(), currentMonth+1)
//             }
//             else if(startDate.getMonth() == 11){
//                 difference += getDaysInMonth(startDate.getFullYear() + 1, currentMonth+1)
//             }
//         }
//         difference += getDaysInMonth(startDate.getFullYear(), startDate.getMonth()+1) - startDate.getDate() + endDate.getDate() - 1
//         console.log(difference)
//         filter(difference, dateArray, type)
//     }
//     return dateArray; // returns the filtered dates
// }
// // this function loops through all possible dates and filters them
// const filter = (difference: Number, dateArray: Array<Date>, type: FilterType) => 
// {   
//     for(let i = 0; i <= difference; i++) // 
//     {
//         let date = new Date();
//         date.setDate(date.getDate() + i); // get possible date under the difference
//         if(type == FilterType.EVERYDAY)
//         {
//             dateArray.push(date); // appends the date to empty array created above if filter type is everyday
//         }
//         else if(type == FilterType.MON_FRI && (date.getDay() > 0 && date.getDay() < 6))
//         {
//             dateArray.push(date);// appends the date to empty array created above if filter type is monday - friday
//         }
//         else if(type == FilterType.WEEKEND && (date.getDay() == 6 || date.getDay() == 0))
//         {
//             dateArray.push(date); // appends the date to empty array created above if filter type is weekend
//         }
//     }
// }
// const getDaysInMonth =(year: number , month: number)=> {
//     return new Date(year, month, 0).getDate();
// }
// let date2 = new Date();
// date2.setDate(date2.getDate() + 364); 
// console.log(getDateArray(new Date(), date2, FilterType.EVERYDAY))
