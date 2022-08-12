import { useEffect, useState } from "react";
import Item from "./item";

const Inprogress = ({items,handleDragOver,handleDrop,removeItem})=>{
    const [item,setItem] = useState([]);

    useEffect(()=>{
        setItem(()=>{
            return items.filter((item)=> item.status === "inprogess");
        })
    },[items])

    return (
        <div className="box" onDrop={(e)=>handleDrop(e,"inprogess")} onDragOver={(e)=>handleDragOver(e)} >
            <h3 style={{textAlign: "center", backgroundColor: "#f1f1f1"}}>In Progess</h3>
            <div className="boxContainer">
            {item.map((it)=><Item key={it.id} id={it.id} text={it.text} removeItem={removeItem}/>)}
            </div>
        </div>
    )
}
export default Inprogress;
