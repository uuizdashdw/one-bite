import { useState, useContext, useEffect} from "react";

// Components
import Header from "../components/common/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

// Context
import { DiaryStateContext } from "../App";

// Types 
import { Diary } from "../types";

// Filtering Diaries
const getMonthlyData = (pivotDate: Date, data: Diary[]) => {
    // Year, Month, Day, Hour, Minute, Seconds
    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();
    const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59 ,59).getTime();

    return data.filter((item: Diary) => beginTime <= item.createdDate && item.createdDate <= endTime)
}

const Home = (): JSX.Element => {

    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());

    const monthlyData = getMonthlyData(pivotDate, data);

    // Increase the Month Handler
    const onInCreaseMonth = (): void => {
        setPivotDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1)
        );
    };

    // Decrease the Month Handler
    const onDecreaseMonth = (): void => {
        setPivotDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1)
        );
    };

    return (
        <div>
            <Header 
                title={`${pivotDate.getFullYear()}년 
                        ${pivotDate.getMonth() + 1}월`}
                leftChild={<Button text={"<"} type="" onClick={onDecreaseMonth} />}
                rightChild={<Button text={">"} type="" onClick={onInCreaseMonth} />} />
                
            <DiaryList diaryList={monthlyData} />
        </div>
    )
}

export default Home;