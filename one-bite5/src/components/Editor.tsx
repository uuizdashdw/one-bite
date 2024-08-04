// CSS
import './../css/editor.css'

// State Hook
import { ChangeEvent, useState, useEffect } from 'react';

// Navigate Hook
import { useNavigate } from 'react-router-dom';

// Types
import { EmotionItemType, EmotionItemClickType, onSubmitDiary } from '../types';

// Components
import EmotionItem from './EmotionItem';
import Button from './Button';

// Basic Emotions
import { emotionList } from '../utils/constants';

const Editor = ({ initData, onSubmit }: onSubmitDiary): JSX.Element => {

    // initial Input Datas
    const [input, setInput] = useState({
        createdDate: new Date(),
        emotionId: 3,
        content: "",
    });

    // Navigation
    const navigation = useNavigate();

    useEffect(() => {

        if(initData){

            setInput({ 
                ...initData, 
                createdDate: new Date(initData.createdDate),
            });
        }
    }, [initData])

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
    const onChangeEmotionData = (target: EmotionItemClickType): void => {
        const name = target.name;
        const value = target.value;

        setInput({
            ...input,
            [name]: value,
        })
    }

    // Submit the Data
    const onSubmitData = (): void => {
        const newInput = {
            createdDate: input.createdDate.getTime(),
            emotionId: input.emotionId,
            content: input.content,
        }
        onSubmit(newInput);
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
                <Button text='취소하기' 
                        type='' 
                        onClick={() => navigation(-1)} />
                <Button text='작성완료' 
                        type='POSITIVE' 
                        onClick={onSubmitData} />
            </section>
        </div>
    )
}

export default Editor;