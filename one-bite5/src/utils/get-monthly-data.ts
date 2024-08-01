// Type
import { Diary } from "../types";

// Filtering Diaries
export const getMonthlyData = (pivotDate: Date, data: Diary[]) => {
    // Year, Month, Day, Hour, Minute, Seconds
    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();
    const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59 ,59).getTime();

    return data.filter((item: Diary) => beginTime <= item.createdDate && item.createdDate <= endTime)
}