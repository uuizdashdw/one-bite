// Component
import Button from "./Button";
import DiaryItem from "./DiaryItem";

// Types
import { Diary } from "../types";
import type { DiaryList } from "../types";

// Css
import '../css/diaryList.css';

const DiaryList = ({ diaryList }: DiaryList): JSX.Element => {

    return (
        <div className="DiaryList">
            <div className="menu_bar">
                <select>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button text={"새로운 일기 쓰기"} 
                        type={"POSITIVE"}
                        onClick={() => console.log('')} />
            </div>
            <div className="list_wrapper">
                {/* <DiaryItem /> */}
                {diaryList.map((item: Diary) => <DiaryItem key={item.id} {...item} />)}
            </div>
        </div>
    )
}

export default DiaryList;