// Hooks & Contexts
import { useContext, useState, useEffect } from "react"
import { DiaryStateContext } from "../App"

// Types
import { Diary } from "../types";

// Navigation
import { useNavigate } from "react-router-dom";

const useDiary = (id: string): Diary => {
    const data = useContext(DiaryStateContext);
    const [currentDiary, setCurrentDiary] = useState<Diary>({
        id: 0,
        emotionId: 0,
        createdDate: 0,
        content: ''
    });

    const navigation = useNavigate();

    // params.id 와 일치하는 일기 data 를 찾는 로직
    useEffect(() => {
        const currentDiaryItem = data.find((item: Diary) => item.id === Number(id));
        
        if(!currentDiaryItem) {
            alert("유효하지 않은 일기입니다");
            navigation("/", { replace: true });
        } else {
            setCurrentDiary(currentDiaryItem);
        }

    }, [id, data, navigation]);

    return currentDiary;
}

export default useDiary;