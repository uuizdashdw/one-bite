// Header
import Header from "../components/Header"

// Views
import EditorView from "../components/View/EditorView"
import ToDoList from "../components/View/ToDoList"

const ListLayout = (): JSX.Element => {
    return (
        <>
        <Header />
        <main className="main">
            <section className="section">
                <EditorView />
            </section>
            
            <section className="section">
                <ToDoList />
            </section>
        </main>
        </>
    )
}

export default ListLayout