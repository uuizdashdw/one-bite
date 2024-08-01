// Components
import Header from "../components/common/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

// Navigate Hook
import { useNavigate } from "react-router-dom";

// Contexts
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

// Type
import { Diary } from "../types";

const New = (): JSX.Element => {

    const { onCreateNewDiary } = useContext(DiaryDispatchContext);

    const navigation = useNavigate();

    // Submit the Data Function for Prop
    const onSubmit = (input: Omit<Diary, 'id'>): void => {
        onCreateNewDiary(input.createdDate, input.emotionId, input.content);
    }

    return (
        <div>
            <Header title="새 일기 쓰기" 
                    leftChild={<Button text="< 뒤로 가기" 
                                       type="" 
                                       onClick={() => navigation(-1)} />} />
            <Editor onSubmit={onSubmit} />
        </div>
    )
}

export default New;