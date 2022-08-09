import {useState} from 'react';
import Inprogress from './inprogess';
import Todo from './todo';
import Done from './done';


const Layout = ()=>{
    const [inp, setInput] = useState("");
    const [items,setItem] = useState([{}]);


    const handleText=(e)=>{
        setInput(e.target.value);
    }


    const handleAdd=(inp)=>{
        if(inp.length<=0){
            return false;
        }
        const n= {
            id: new Date().getTime().toLocaleString(),
            text: ""+inp,
            status: "todo"
        };
        setItem((prev)=> [...prev,n]);
        setInput("");
    }


    const handleDragOver=(e)=>{
        e.preventDefault();
        console.log(e);
    }

    const handleDrop = (e,fromWhere)=>{
        e.preventDefault();
        let id =e.dataTransfer.getData("Text");
        // let check = items.find((item)=> item.id===id);
        let val= items.map((item)=> {
            if(item.id===id){
                item.status=fromWhere;
                return item;
            }
            return item;
        } );
        setItem(val);
        console.log(val);
    }

    const removeItem=(id)=>{
        const val = items.filter((item)=> item.id !== id);
        setItem(val);
    }

    return (
        <div className="container">
            <div className="inputBox">
                <input placeholder={"write your task..."} type={"text"} onChange={(e)=> handleText(e)} value={inp}/>
                <button onClick={()=> handleAdd(inp)}>Add</button>
            </div>
            <div className="boxGroup">
                <Todo items={items} handleDragOver={handleDragOver} handleDrop={handleDrop} removeItem={removeItem}/>
                <Inprogress items={items} handleDragOver={handleDragOver} handleDrop={handleDrop} removeItem={removeItem}/>
                <Done items={items} handleDragOver={handleDragOver} handleDrop={handleDrop} removeItem={removeItem}/>
            </div>
        </div>
    )
}

export default Layout;