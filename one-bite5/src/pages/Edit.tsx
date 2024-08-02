import { useParams, useNavigate } from "react-router-dom";

// Components
import Header from "../components/common/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

// Contexts & Hooks
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

// Type
import { Diary } from "../types";

const Edit = (): JSX.Element => {

    const params = useParams();
    const navigation = useNavigate();

    const { onDeletetheDiary } = useContext(DiaryDispatchContext);
    const data = useContext(DiaryStateContext);

    const [currentDiary, setCurrentDiary] = useState<Diary>({
        id: 0,
        emotionId: 0,
        createdDate: 0,
        content: ''
    });

    // Remove the Diary
    const onDeleteTheDiary = (): void => {
        if(confirm("일기를 정말 삭제하시겠습니까? 다시 복구되지 않습니다")) {
            onDeletetheDiary(Number(params.id));
            navigation('/', { replace: true });
        }
    }

    // params.id 와 일치하는 일기 data 를 찾는 로직
    useEffect(() => {
        const currentDiaryItem = data.find((item: Diary) => item.id === Number(params.id));
        
        if(!currentDiaryItem) {
            alert("유효하지 않은 일기입니다");
            navigation("/", { replace: true });
        } else {
            setCurrentDiary(currentDiaryItem);
        }
        
    }, [params.id, data, navigation]);

    return (
        <div>
            <Header title="일기 수정하기" 
                    leftChild={<Button text="< 뒤로가기" type="" onClick={() => navigation(-1)} />}
                    rightChild={<Button text="> 삭제하기" type="NEGATIVE" onClick={onDeleteTheDiary}/>} />
        
            <Editor initData={currentDiary} 
                    onSubmit={console.log} />
        </div>
    )
}

export default Edit;