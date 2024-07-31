// Utils
import { getEmotionImages } from "../utils/get-emotion-images";

// Component
import Button from "./Button";

// Css
import './../css/diaryItem.css';

const DiaryItem = (): JSX.Element => {

    const emotionId: number = 1;

    return (
        <div className="DiaryItem">
            <div className={`img_section img_section_${emotionId}`}>
                <img src={getEmotionImages(1)} alt="emotion" />
            </div>
            <div className="info_section">
                <div className="created_date">
                    {new Date().toLocaleDateString()}
                </div>
                <div className="content">
                    일기 컨텐츠
                </div>
            </div>
            <div className="btn_section">
                <Button text="수정하기" 
                        type=""
                        onClick={() => console.log('')} />
            </div>
        </div>
    )
}

export default DiaryItem;