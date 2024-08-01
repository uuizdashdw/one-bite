// CSS
import './../css/editor.css'

// State Hook
import { ChangeEvent, useState } from 'react';

// Types
import { EmotionItemType, EmotionItemClickType } from '../types';

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

    const [input, setInput] = useState({
        createdDate: new Date(),
        emotionId: 3,
        content: "",
    });

    // Date Format Changed to YYYY-MM-DD
    const getStringedDate = (targetDate: Date): string => {
        const year = targetDate.getFullYear();
        let month = String(targetDate.getMonth() + 1);
        let date = String(targetDate.getDate());

        if(month.length < 2) month = `0${month}`;
        if(date.length < 2) date = `0${date}`;

        return `${year}-${month}-${date}`;
    }

    // Change Date or TextArea Input Data 
    const onChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        
        const name: string = e.target.name;
        let dateValue: Date = new Date(e.target.value);
        const contentValue: string = e.target.value;

        if(name === 'createdDate') {
            dateValue = new Date(dateValue);
            setInput({
                ...input,
                [name]: dateValue,
            });
            return;
        } 

        setInput({
            ...input,
            [name]: contentValue,
        });
    }

    // Change Emotion Data
    const onChangeEmotionData = (target: EmotionItemClickType) => {
        const name = target.name;
        const value = target.value;

        console.log();
        setInput({
            ...input,
            [name]: value,
        })
    }

    return (
        <div className='Editor'>
            <section className='date_section'>
                <h4>오늘의 날짜</h4>
                <input type='date' 
                       name='createdDate'
                       value={getStringedDate(input.createdDate)}
                       onChange={(e) => onChangeInput(e)} />
            </section>
            <section className='emotion_section'>
                <h4>오늘의 감정</h4>
                <div className='emotion_list_wrapper'>
                    {emotionList.map((item: EmotionItemType) => (
                        <EmotionItem key={item.emotionId} {...item} 
                                     isSelected={item.emotionId === input.emotionId}
                                     onClick={() => onChangeEmotionData({
                                        name: 'emotionId',
                                        value: item.emotionId
                                     })} />
                        ))}
                </div>
            </section>
            <section className='content_section'>
                <h4>오늘의 일기</h4>
                <textarea placeholder='오늘 하루는 어땠나요?'
                          name='content'
                          value={input.content}
                          onChange={(e) => onChangeInput(e)} />
            </section>
            <section className='btn_section'>
                <Button text='취소하기' type='' onClick={console.log} />
                <Button text='작성하기' type='POSITIVE' onClick={console.log} />
            </section>
        </div>
    )
}

export default Editor;