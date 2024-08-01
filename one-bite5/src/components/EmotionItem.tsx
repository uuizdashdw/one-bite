import './../css/emotionItem.css';

// Type
import { EmotionItemType } from '../types';

// Emotion Images
import { getEmotionImages } from '../utils/get-emotion-images';

const EmotionItem = ({ emotionId, emotionName }: EmotionItemType ): JSX.Element => {
    return (
        <div className='EmotionItem'>
            <img className='emotion_img' src={getEmotionImages(emotionId)} alt="emotion" />
            <div className='emotion_name'>
                {emotionName}
            </div>
        </div>
    )
}

export default EmotionItem;