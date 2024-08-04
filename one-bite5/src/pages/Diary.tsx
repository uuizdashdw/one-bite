import { useParams, useNavigate } from "react-router-dom";

// Components
import Header from "../components/common/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";

// Util Function Module
import { getStringedDate } from "../utils/getStringedDate";

const Diary = (): JSX.Element => {

    const params = useParams();
    const navigation = useNavigate();

    const currentDiary = useDiary(params.id as string);

    if(!currentDiary) return <div>데이터 로딩 중...</div>

    const { createdDate, emotionId, content } = currentDiary;

    const headerTitle = getStringedDate(new Date(createdDate));

    return (
        <div>
            <Header title={`${headerTitle} 기록`}
                    leftChild={<Button text="< 뒤로가기" type="" onClick={() => navigation(-1)} />}
                    rightChild={<Button text="수정하기" type="" onClick={() => navigation(`/edit/${params.id}`)} />}
            />
            <Viewer emotionId={emotionId} 
                    content={content} />
        </div>
    )
}

export default Diary;