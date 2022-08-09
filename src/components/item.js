const Item = ({id,text,removeItem})=>{


    const handleDragStart=(e,id)=>{
        console.log(id);
        console.log(e);
        e.dataTransfer.setData("Text",id);
    }

    return (
        <div className="draggable" draggable="true" onDragStart={(e)=> handleDragStart(e,id)}>
            <h3>{text}</h3>
            <button className="btn" onClick={()=> removeItem(id)}>x</button>
        </div>
    );
}

export default Item;