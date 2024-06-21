// Types
import { CountProp } from "../../CountTypes";


const CountView = ({count}: CountProp): JSX.Element => {
    return (
        <div>
            <div>현재 카운트 :</div>
            <h1>{count}</h1>
        </div>
    )
}

export default CountView;