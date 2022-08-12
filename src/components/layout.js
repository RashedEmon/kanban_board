import {useEffect, useState} from 'react';
// import Inprogress from './inprogess';
// import Todo from './todo';
// import Done from './done';
import Box from './box';


const Layout = ()=>{
    const [inp, setInput] = useState("");
    const [items,setItem] = useState([]);

    const getData=(url,info)=>{
        
        fetch(url,info)
        .then((res)=> res.json())
        .then((data)=> setItem(data))
        .catch((error)=>{
            console.log("error");
        })
        
    }

    const postData=(url,info)=>{
        fetch(url,info)
        .then((res)=> res.json())
        .then((data)=> console.log(data))
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        getData("http://127.0.0.1:8000/api/task/get",{
            method: 'GET',
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"
            },
            // mode: "no-cors"
        });
    },[]);

    useEffect(()=>{
        postData("http://127.0.0.1:8000/api/task/add/",{
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(items),
        })
    },[items])

    const handleText=(e)=>{
        setInput(e.target.value);
    }


    const handleAdd=(inp)=>{
        if(inp.length<=0){
            return false;
        }
        const n= {
            id: new Date().getTime().toString(),
            title: inp,
            status: "todo",
            description: "No"
        };
        setItem((prev)=> [...prev,n]);
        setInput("");
        // console.log(items)
    }


    const handleDragOver=(e)=>{
        e.preventDefault();
        // console.log(e);
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

    }

    const removeItem=(id)=>{
        const val = items.filter((item)=> item.id !== id);
        console.log(id);
        fetch(`http://127.0.0.1:8000/api/task/remove/${id}`,{method:'GET'})
        .then((res)=> res)
        .then((data)=> console.log(data))
        .catch((error)=> console.log(error));
        
        setItem(val);
    }

    return (
        <div className="container">
            <div className="inputBox">
                <input placeholder={"write your task..."} type={"text"} onChange={(e)=> handleText(e)} value={inp}/>
                <button onClick={()=> handleAdd(inp)}>Add</button>
            </div>
            <div className="boxGroup">
                {/* <Todo items={items} handleDragOver={handleDragOver} handleDrop={handleDrop} removeItem={removeItem}/>
                <Inprogress items={items} handleDragOver={handleDragOver} handleDrop={handleDrop} removeItem={removeItem} boxtype={"inprogess"}/>
                <Done items={items} handleDragOver={handleDragOver} handleDrop={handleDrop} removeItem={removeItem}/> */}

                <Box items={items} handleDragOver={handleDragOver} handleDrop={handleDrop} removeItem={removeItem} boxtype={"todo"}/>
                <Box items={items} handleDragOver={handleDragOver} handleDrop={handleDrop} removeItem={removeItem} boxtype={"inprogess"}/>
                <Box items={items} handleDragOver={handleDragOver} handleDrop={handleDrop} removeItem={removeItem} boxtype={"done"}/>
            </div>
        </div>
    )
}

export default Layout;