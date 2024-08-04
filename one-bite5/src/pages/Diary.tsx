import { useParams } from "react-router-dom";

// Components
import Header from "../components/common/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";

const Diary = (): JSX.Element => {

    const params = useParams();
    
    return (
        <div>
            <Header title={"yyyy-mm-dd 기록"}
                    leftChild={<Button text="< 뒤로가기" type="" onClick={console.log} />}
                    rightChild={<Button text="수정하기" type="" onClick={console.log} />} 
            />
            <Viewer />
        </div>
    )
}

export default Diary;