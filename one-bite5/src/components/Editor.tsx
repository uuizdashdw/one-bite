// CSS
import './../css/editor.css'

// Type
import { EmotionItemType } from '../types';

// Component
import EmotionItem from './EmotionItem';

// Basic Emotions
const emotionList: EmotionItemType[] = [
    {
        emotionId: 1,
        emotionName: '완전 좋음'
    },
    {
        emotionId: 2,
        emotionName: '좋음'
    },
    {
        emotionId: 3,
        emotionName: '그럭저럭'
    },
    {
        emotionId: 4,
        emotionName: '나쁨'
    },
    {
        emotionId: 5,
        emotionName: '끔찍함'
    }
]

const Editor = (): JSX.Element => {
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
                        <EmotionItem key={item.emotionId} {...item} />
                        ))}
                </div>
            </section>
            <section className='content_section'></section>
            <section className='btn_section'></section>
        </div>
    )
}

export default Editor;