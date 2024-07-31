// Components
import Header from "../components/common/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";


const Home = (): JSX.Element => {
    return (
        <div>
            <Header 
                title={"2024년 7월"}
                leftChild={<Button text={"<"} type="" />}
                rightChild={<Button text={">"} type="" />} />
                
            <DiaryList />
        </div>
    )
}

export default Home;