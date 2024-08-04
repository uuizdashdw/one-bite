// CSS
import './../css/viewer.css';

// Emotion Image Util Function
import { getEmotionImages } from '../utils/get-emotion-images';

const Viewer = (): JSX.Element => {

    const emotionIdTmp = 1;

    return (
        <div className='Viewer'>
            <section className='img_section'>
                <h4>오늘의 감정</h4>
                <div>
                    <img src={getEmotionImages(emotionIdTmp)} 
                         alt="emotion" />
                </div>
            </section>
            <section className='contenet_section'></section>
        </div>
    )
}

export default Viewer;