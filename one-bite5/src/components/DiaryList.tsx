// Component
import Button from "./Button";
import DiaryItem from "./DiaryItem";

// Types
import { Diary } from "../types";
import type { DiaryList } from "../types";

// Hooks
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

// Css
import '../css/diaryList.css';

const DiaryList = ({ diaryList }: DiaryList): JSX.Element => {

    // Navigate Hook
    const navigation = useNavigate();

    // Sort 기준
    const [sortType, setSortType] = useState("latest");

    // Change the Sort 기준
    const onChangeSortType = (e: ChangeEvent<HTMLSelectElement>): void => {
        setSortType(e.target.value);
    }

    // Sort 기준 Sorting
    const getSortedData = (): Diary[] => {
        return [...diaryList].sort((a, b): number => {
            if(sortType === "oldest") {
                return a.createdDate - b.createdDate;
            } else {
                return b.createdDate - a.createdDate;
            }
        })
    }

    const sortedData = getSortedData();

    return (
        <div className="DiaryList">
            <div className="menu_bar">
                <select onChange={(e) => onChangeSortType(e)}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button text={"새로운 일기 쓰기"} 
                        type={"POSITIVE"}
                        onClick={() => navigation('/new')} />
            </div>
            <div className="list_wrapper">
                {sortedData.map((item: Diary) => <DiaryItem key={item.id} {...item} />)}
            </div>
        </div>
    )
}

export default DiaryList;