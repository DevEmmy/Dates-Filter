// This Enum acts as a filter for the various options that a client can select
enum FilterType {
    EVERYDAY = "EVERYDAY",
    MON_FRI = "MON_FRI",
    WEEKEND = "WEEKEND",
}

// This function performs the whole logic and returns the array of dates specified by the filter type 
const getDateArray = (startDate: Date, endDate: Date, type: FilterType)=>
{
    let dateArray:Array<Date> = []; // create an empty array which will contain the filtered dates
    let difference = endDate.getDate() - startDate.getDate(); // get the difference between the date specified by the filter type
    filter(difference, dateArray, type); // filter the dates
    
    return dateArray; // returns the filtered dates
}

// this function loops through all possible dates and filters them
const filter = (difference: Number, dateArray: Array<Date>, type: FilterType) => 
{   
    for(let i = 0; i <= difference; i++) // 
    {
        let date = new Date();
        date.setDate(date.getDate() + i); // get possible date under the difference
        if(type == FilterType.EVERYDAY)
        {
            dateArray.push(date); // appends the date to empty array created above if filter type is everyday
        }
        else if(type == FilterType.MON_FRI && (date.getDay() > 0 && date.getDay() < 6))
        {
            dateArray.push(date);// appends the date to empty array created above if filter type is monday - friday
        }
        else if(type == FilterType.WEEKEND && (date.getDay() == 6 || date.getDay() == 0))
        {
            dateArray.push(date); // appends the date to empty array created above if filter type is weekend
        }
    }
}
