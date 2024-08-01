// CSS
import './../css/editor.css'

// Type
import { EmotionItemType } from '../types';

// Components
import EmotionItem from './EmotionItem';
import Button from './Button';

// Basic Emotions
const emotionList: EmotionItemType[] = [
    {
        emotionId: 1,
        emotionName: '완전 좋음',
        isSelected: false,
    },
    {
        emotionId: 2,
        emotionName: '좋음',
        isSelected: false,
    },
    {
        emotionId: 3,
        emotionName: '그럭저럭',
        isSelected: false,
    },
    {
        emotionId: 4,
        emotionName: '나쁨',
        isSelected: false,
    },
    {
        emotionId: 5,
        emotionName: '끔찍함',
        isSelected: false,
    }
]

const Editor = (): JSX.Element => {

    // Selected Emotion TMP
    const emotionId = 1;

    return (
        <div className='Editor'>
            <section className='date_section'>
                <h4>오늘의 날짜</h4>
                <input type='date' />
            </section>
            <section className='emotion_section'>
                <h4>오늘의 감정</h4>
                <div className='emotion_list_wrapper'>
                    {emotionList.map((item: EmotionItemType) => (
                        <EmotionItem key={item.emotionId} {...item} 
                                     isSelected={item.emotionId === emotionId} />
                        ))}
                </div>
            </section>
            <section className='content_section'>
                <h4>오늘의 일기</h4>
                <textarea placeholder='오늘 하루는 어땠나요?' />
            </section>
            <section className='btn_section'>
                <Button text='취소하기' type='' onClick={console.log} />
                <Button text='작성하기' type='POSITIVE' onClick={console.log} />
            </section>
        </div>
    )
}

export default Editor;