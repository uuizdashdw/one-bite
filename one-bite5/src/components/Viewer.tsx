// CSS
import './../css/viewer.css';

// Emotion Image Util Function
import { getEmotionImages } from '../utils/get-emotion-images';

// Emotion List Module
import { emotionList } from '../utils/constants';

// Types
import { Diary, EmotionItemType } from '../types';

const Viewer = ({ emotionId, content }: Omit<Diary, 'id' | 'createdDate'>): JSX.Element => {

    const getEmotionItem = (): EmotionItemType => {
        const emotionItem = emotionList.find((item: EmotionItemType) => item.emotionId === emotionId);

        if(!emotionItem) {
            return { emotionId: -1, emotionName: '오류', onClick: () => {}, isSelected: false }
        }

        return emotionItem;
    }

    const emotionItem = getEmotionItem();
    
    return (
        <div className='Viewer'>
            <section className='img_section'>
                <h4>오늘의 감정</h4>
                <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
                    <img src={getEmotionImages(emotionId)} 
                         alt="emotion" />
                    <div>{emotionItem.emotionName}</div>
                </div>
            </section>
            <section className='contenet_section'>
                <h4>오늘의 일기</h4>
                <div className='content_wrapper'>
                    <p>{ content }</p>
                </div>
            </section>
        </div>
    )
}

export default Viewer;