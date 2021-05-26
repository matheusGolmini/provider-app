class UtilsDate {
    getTheAcronymOfTheMonth(month: number): string {
        const isValidMonth = month < 12 || month >= 0;
        return acronymOfTheMonth[isValidMonth ? month : 0];
    };

    addDay(days: number, date = new Date()): Date {
        return new Date(date.setDate(date.getDate() + days));
    }

    removeDays(days: number, date = new Date()): Date {
        return new Date(date.setDate(date.getDate() - days));
    }

    formatDate(date: Date): string {
        let month: number | string = date.getMonth() + 1;
        let day: number | string  = date.getDate();
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;

        return `${day}/${month}/${date.getFullYear()}`;
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