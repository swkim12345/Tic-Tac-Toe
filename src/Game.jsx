/**
 * Tic Tac Toe
 * @author yeseong31
 */

// React는 컴포넌트에서 호출하여 무언가를 '기억'할 수 있는 useState()를 제공함
import { useState } from 'react';

function Square() {

    // value는 값을 저장하고, setValue는 값을 변경하는 데 사용한다.
    // useState()에 전달된 null은 value의 초깃값으로 사용된다.
    const [value, setValue] = useState(null);

    function handleClick() {
        setValue('X');  // value의 값 변경
    }

    return <button
        className="square"
        onClick={handleClick}
    >
        {value}
    </button>;
}

export default function Board() {
    return <>
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
    </>
}