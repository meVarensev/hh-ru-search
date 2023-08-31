export const formatDateString = (inputDateStr: string): string => {
    const dateObj: Date = new Date(inputDateStr);

    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };

    const formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('default', options);

    const formattedDate: string = formatter.format(dateObj);
    return formattedDate.replace(' г.', '');
}
