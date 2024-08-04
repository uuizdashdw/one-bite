// CSS
import './../css/viewer.css';

// Emotion Image Util Function
import { getEmotionImages } from '../utils/get-emotion-images';

// Emotion List Module
import { emotionList } from '../utils/constants';

// Types
import { EmotionItemType } from '../types';

const Viewer = (): JSX.Element => {

    const emotionIdTmp: number = 1;
    
    const emotionItem = emotionList.find((item: EmotionItemType) => item.emotionId === emotionIdTmp) as EmotionItemType;

    return (
        <div className='Viewer'>
            <section className='img_section'>
                <h4>오늘의 감정</h4>
                <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionIdTmp}`}>
                    <img src={getEmotionImages(emotionIdTmp)} 
                         alt="emotion" />
                    <div>{emotionItem.emotionName}</div>
                </div>
            </section>
            <section className='contenet_section'>
                <h4>오늘의 일기</h4>
                <div className='content_wrapper'>
                    <p>일기 내용</p>
                </div>
            </section>
        </div>
    )
}

export default Viewer;