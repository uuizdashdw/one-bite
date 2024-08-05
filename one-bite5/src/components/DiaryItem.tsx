// Utils
import { getEmotionImages } from "../utils/get-emotion-images";

// Component
import Button from "./Button";

// Css
import './../css/diaryItem.css';

// Type
import { Diary } from "../types";

// Navigate Hook
import { useNavigate } from "react-router-dom";

const DiaryItem = ({id, emotionId, createdDate, content}: Diary): JSX.Element => {

    const navigation = useNavigate();

    return (
        <div className="DiaryItem">
            <div className={`img_section img_section_${emotionId}`} 
                 onClick={() => navigation(`/diary/${id}`)}>
                <img src={getEmotionImages(emotionId)} alt="emotion" />
            </div>
            <div className="info_section"
                 onClick={() => navigation(`/diary/${id}`)}>
                <div className="created_date">
                    {new Date(createdDate).toLocaleDateString()}
                </div>
                <div className="content">
                    {content}
                </div>
            </div>
            <div className="btn_section">
                <Button text="수정하기" 
                        type=""
                        onClick={() => navigation(`/edit/${id}`)} />
            </div>
        </div>
    )
}

export default DiaryItem;