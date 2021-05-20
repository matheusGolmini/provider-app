class UtilsDate {
    getTheAcronymOfTheMonth(month: number): string {
        const isValidMonth = month < 12 || month >= 0;
        return acronymOfTheMonth[isValidMonth ? month : 0];
    }
}


const acronymOfTheMonth = [
    'jan',
    'fev',
    'mar',
    'abr',
    'maio',
    'jun',
    'jul',
    'ago',
    'set',
    'out',
    'nov',
    'dez',
];

export default new UtilsDate();