import { useEffect, useState } from "react";
import Item from "./item";
const Todo = ({items,handleDragOver,handleDrop,removeItem})=>{
    const [item,setItem] = useState([]);

    useEffect(()=>{
        setItem(()=>{
            return items.filter((item)=> item.status === "todo");
        })
    },[items])
    return (
        <div className="box" onDrop={(e)=>handleDrop(e,"todo")} onDragOver={(e)=>handleDragOver(e)}>
            <h3 style={{textAlign: "center", backgroundColor: "#f1f1f1"}}>ToDo</h3>
            <div className="boxContainer">
                {item.map((it)=><Item key={it.id} id={it.id} text={it.text} removeItem={removeItem}/>)}
            </div>
        </div>
    )
}
export default Todo;