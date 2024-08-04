import { useState, useContext } from "react";

// Components
import Header from "../components/common/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

// Context
import { DiaryStateContext } from "../App";

// Filtering Diaries Util
import { getMonthlyData } from "../utils/get-monthly-data";

const Home = (): JSX.Element => {

    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());

    const monthlyData = getMonthlyData(pivotDate, data);

    // Increase the Month Handler
    const onIncreaseMonth = (): void => {
        const nowMonth = new Date().getMonth() + 1;
        const prevMonth = pivotDate.getMonth() + 1;

        if(prevMonth >= nowMonth) {
            setPivotDate(
                new Date(pivotDate.getFullYear(), prevMonth - 1)
            ); 
        } else {
            setPivotDate(
                new Date(pivotDate.getFullYear(), prevMonth)
            );
        }

        if(prevMonth === nowMonth - 1 || prevMonth === nowMonth) alert('9월은 9월에...');
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
                rightChild={<Button text={">"} type="" onClick={onIncreaseMonth} />} />
                
            <DiaryList diaryList={monthlyData} />
        </div>
    )
}

export default Home;