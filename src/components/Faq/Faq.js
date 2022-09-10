import './faq.css'
import { useState } from 'react';
const Faq = ({questions})=>{

    const [activeIndex,setActiveIndex] = useState(0);

    const setActive =()=>{

    }

    return <div className="main-content container d-flex justify-content-center">
        <div className='faq'>
            <h3 className='h3 d-flex justify-content-center'>Question & Answer</h3>
            <ul className='list-group'>
                {questions.map((val,index)=>{
                    return <li onClick={()=>setActiveIndex(index)} className={(activeIndex===index)?'list-group-item list-group-item-action active':'list-group-item list-group-item-action not-active'}>
                                <div className='question p-2'>{val.question}</div>
                                <div className='answer'>{val.answer}</div>
                            </li>
                        })}
             </ul>
        </div>
    </div>
}

export default Faq;