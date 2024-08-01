// Components
import Header from "../components/common/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

const New = (): JSX.Element => {
    return (
        <div>
            <Header title="새 일기 쓰기" 
                    leftChild={<Button text="< 뒤로 가기" type="" onClick={() => console.log()} />} />
            <Editor />
        </div>
    )
}

export default New;