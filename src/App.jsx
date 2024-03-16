import React, { useEffect, useState } from 'react';
import style from './CSs/quote.module.css';
import Quote from './Quote';
import axios from 'axios';


export default function App() {
  const randomColor ="";
  const [color,setcolor] = useState("0f0f0f");
  const[quote,setquote] = useState("");
  const[author,setauthor] = useState("");
  const[quoteArray,setquoteArray] = useState("");
  const handleClick = () =>
  {
    const random = Math.floor(Math.random() * quoteArray.length);
    setauthor(quoteArray[random].author);
    setquote(quoteArray[random].text);
     
  };
  useEffect(()=>
  {
    setTimeout(()=>
    {
      const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      setcolor(randomColor)
    },3000)

  })
  useEffect(()=>
  {
     axios.get("https://type.fit/api/quotes").then((res)=>
     {
      setquoteArray(res.data);

     });
     
  })
  
  return (
   
    <>
     <div  className={`${style.root}`} style={{backgroundColor : color, 
    transition : "background-color 1s ease"}}>
      <Quote a= {author} q= {quote}h={handleClick}/>
     </div>
    </>
  )
}
