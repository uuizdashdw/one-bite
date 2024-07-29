import { useParams } from "react-router-dom";

const Edit = (): JSX.Element => {

    const params = useParams();

    return (
        <div>
            {params.id}번째 Edit 페이지
        </div>
    )
}

export default Edit;