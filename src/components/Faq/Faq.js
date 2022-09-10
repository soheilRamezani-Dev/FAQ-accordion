import './faq.css'
import { useState } from 'react';
import FaqItem from './faqItem';
const Faq = ({questions})=>{

    const [activeIndex,setActiveIndex] = useState(0);

    const setActive =()=>{

    }

    return <div className="main-content container d-flex justify-content-center">
        <div className='faq'>
            <h3 className='h3 d-flex justify-content-center'>Question & Answer</h3>
            <ul className='list-group'>
                {questions.map((val,index)=>{
                   return  <FaqItem 
                                setActiveIndex = {setActiveIndex} 
                                activeIndex ={activeIndex}  
                                index={index}  
                                question={val.question}  
                                answer={val.answer}  />
                        })}
             </ul>
        </div>
    </div>
}

export default Faq;