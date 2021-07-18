import React, { useEffect, useRef, useState } from 'react';

const SimpleHabit = (props) => {

    const [count, setCount] = useState(0); // count와 업데이트 가능한 setcount를 정의하고 usestate호출하고 초기값 적어주면됨
    const spanRef = useRef(); //한번 만들고 메모리에 저장하고 재사용

    const handleIncrement = () => {
        setCount(count +1);
    };

    useEffect(() => { //didmount, will mount
        console.log('mounted & updated' + count);
    }, []);

    return (
        <li className="habit">
            <span ref={spanRef} className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
};

export default SimpleHabit;