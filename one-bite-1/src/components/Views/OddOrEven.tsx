import { CountProp } from "../../CountTypes";

const OddOrEven = ({count} : CountProp): JSX.Element => {
    return (
        <div>
            {count % 2 === 0 ? '짝수입니다' : '홀수입니다'}
        </div>
    )
}

export default OddOrEven;