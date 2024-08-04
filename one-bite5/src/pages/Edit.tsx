import { useParams, useNavigate } from "react-router-dom";

// Components
import Header from "../components/common/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

// Contexts & Hooks
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

// Customized Hook
import useDiary from "../hooks/useDiary";

// Type
import { Diary } from "../types";

const Edit = (): JSX.Element => {

    const params = useParams();
    const navigation = useNavigate();

    const { onDeletetheDiary, onUpdateDiary } = useContext(DiaryDispatchContext);
    
    const currentDiary = useDiary(params.id as string);
    

    // Remove the Diary
    const onDeleteTheDiary = (): void => {
        if(confirm("일기를 정말 삭제하시겠습니까? 다시 복구되지 않습니다")) {
            onDeletetheDiary(Number(params.id));
            navigation('/', { replace: true });
        }
    }

    // 수정하기 페이지 작성 완료 이벤트 핸들러
    const onSubmit = (input: Omit<Diary, 'id'>) => {
        if(confirm('일기를 수정하시겠습니까?')){
            onUpdateDiary(
                Number(params.id),
                input.createdDate,
                input.emotionId,
                input.content, 
            );

            navigation('/', { replace: true });
        }
    }

    return (
        <div>
            <Header title="일기 수정하기" 
                    leftChild={<Button text="< 뒤로가기" type="" onClick={() => navigation(-1)} />}
                    rightChild={<Button text="> 삭제하기" type="NEGATIVE" onClick={onDeleteTheDiary}/>} />
        
            <Editor initData={currentDiary} 
                    onSubmit={onSubmit} />
        </div>
    )
}

export default Edit;