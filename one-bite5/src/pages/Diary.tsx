import { useParams } from "react-router-dom";

const Diary = (): JSX.Element => {

    const params = useParams();
    
    return (
        <div>
            {params.id}번째 Diary
        </div>
    )
}

export default Diary;