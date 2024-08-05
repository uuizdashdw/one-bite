// Date Format Changed to YYYY-MM-DD
export const getStringedDate = (targetDate: Date): string => {
    const year = targetDate.getFullYear();
    let month = String(targetDate.getMonth() + 1);
    let date = String(targetDate.getDate());

    if(month.length < 2) month = `0${month}`;
    if(date.length < 2) date = `0${date}`;

    return `${year}-${month}-${date}`;
}