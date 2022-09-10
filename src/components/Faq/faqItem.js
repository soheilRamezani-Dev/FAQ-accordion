
const FaqItem = ({setActiveIndex,activeIndex,index,question,answer})=>{
    return <li onClick={()=>setActiveIndex(index)} className={(activeIndex===index)?'list-group-item list-group-item-action active':'list-group-item list-group-item-action not-active'}>
                <div className='question p-2'>{question}</div>
                <div className='answer'>{answer}</div>
           </li>
}

export default FaqItem;