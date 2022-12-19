# DatesFilter

This package is a filter that allows filtering of dates based on preferences from a list of options, which happens is represented by the enum FilterType:

```
enum FilterType {
    EVERYDAY = "EVERYDAY",
    MON_FRI = "MON_FRI",
    WEEKEND = "WEEKEND",
}
```

This package allows users to pass a start date and end date as arguments into the function as well as the filter type and returns an array of filtered dates.

## Example
```
    let filteredDates = getDateArray(date1, date2, FilterType.EVERYDAY)
    console.log(filteredDates)
```
