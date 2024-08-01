// Components
import Header from "../components/common/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

// Navigate Hook
import { useNavigate } from "react-router-dom";

const New = (): JSX.Element => {

    const navigation = useNavigate();

    return (
        <div>
            <Header title="새 일기 쓰기" 
                    leftChild={<Button text="< 뒤로 가기" 
                                       type="" 
                                       onClick={() => navigation(-1)} />} />
            <Editor />
        </div>
    )
}

export default New;