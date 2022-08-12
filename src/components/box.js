import { useEffect, useState } from "react";
import Item from "./item";

const Box = ({items,handleDragOver,handleDrop,removeItem,boxtype})=>{
    const [item,setItem] = useState([]);

    useEffect(()=>{
        setItem(()=>{
            return items.filter((item)=> item.status === `${boxtype}`);
        })
    },[items,boxtype])

    return (
        <div className="box" onDrop={(e)=>handleDrop(e,`${boxtype}`)} onDragOver={(e)=>handleDragOver(e)} >
            <h3 style={{textAlign: "center", backgroundColor: "#f1f1f1", textTransform: "uppercase"}}>{boxtype}</h3>
            <div className="boxContainer">
            {item.map((it)=><Item key={it.id} id={it.id} text={it.title} removeItem={removeItem}/>)}
            </div>
        </div>
    )
}
<<<<<<< HEAD:src/components/box.js
export default Box;
=======
export default Inprogress;
>>>>>>> eaccf6822ae54557c2482eb64bdfbf6636f3a64d:src/components/inprogess.js
