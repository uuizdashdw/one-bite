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