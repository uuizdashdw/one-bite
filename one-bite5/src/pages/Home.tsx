import { useState } from "react";

// Components
import Header from "../components/common/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";


const Home = (): JSX.Element => {

    const [pivotDate, setPivotDate] = useState(new Date());

    // Increase the Month
    const onInCreaseMonth = (): void => {
        setPivotDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1)
        );
    };

    // Decrease the Month
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
                
            <DiaryList />
        </div>
    )
}

export default Home;