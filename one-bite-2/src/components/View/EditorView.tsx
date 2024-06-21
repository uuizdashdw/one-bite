import '../../css/EditorView.css';

const EditorView = (): JSX.Element => {
    return (
        <div className="Editor">
            <input type="text" 
                   placeholder="새로운 TODO..." />
            <button className="addBtn">
                추가
            </button>
        </div>
    )
}

export default EditorView;