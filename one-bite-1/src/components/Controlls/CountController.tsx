import { onClickCount } from "../../CountTypes";

import { MouseEvent } from "react";

const CountController = ({onClickCountButton} : onClickCount): JSX.Element => {

    const onClickButton = (event: MouseEvent<HTMLButtonElement>) => {
        const value = (event.target as HTMLButtonElement).value;
        onClickCountButton(Number(value));
    }


    return (
        <div>
            <ul className="controll">
                <li>
                    <button 
                            type="button"
                            onClick={onClickButton}
                            value={-1}>-1</button>
                </li>
                <li>
                    <button type="button"
                            onClick={onClickButton}
                            value={-10}>-10</button>
                </li>
                <li>
                    <button type="button"
                            onClick={onClickButton}
                            value={-100}>-100</button>
                </li>
                <li>
                    <button type="button"
                            onClick={onClickButton}
                            value={+100}>+100</button>
                </li>
                <li>
                    <button type="button"
                            onClick={onClickButton}
                            value={+10}>+10</button>
                </li>
                <li>
                    <button type="button"
                            onClick={onClickButton}
                            value={+1}>+1</button>
                </li>
            </ul>
        </div>
    )
}

export default CountController;