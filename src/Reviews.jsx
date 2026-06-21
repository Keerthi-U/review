import React, { useState } from 'react';
import people from'./data.js';
import {FaChevronLeft , FaChevronRight , FaQuoteRight} from  "react-icons/fa";





const Reviews = () => {
 const [index , setindex] = useState(0);
//  console.log(index);
  



    const {  name , text , image ,job} = people[index];
    console.log(name);

    const checknumber = (number) =>{
      if ( number > people.length - 1) {
        return 0;
      }
      if (number < 0) {
        return people.length - 1;
      }
      return number;
    }


 
   const  prevbtn = () => {
    setindex((index) =>  {
        let  newindex = index - 1
        return checknumber(newindex);
    });
   }

   
   const nextbtn = () =>{
    setindex((index)=> {
     let newindex =  index + 1;
     return checknumber(newindex);
    }
    )
   }
const randomNumber = () => {
 let randomNum = Math.floor(Math.random() * people.length);
 if ( randomNum === index) {
  randomNum = index + 1;
 }

 setindex(checknumber(randomNum))
}
  return (
   <>
   <article className='Reviews'>
    <div className="img-container">

    
       <img src={image} alt="" />
       <span className='quote-icon'>
<FaQuoteRight/>
       </span>
       </div>
       <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
       <p className='info'>{text}</p>
       <div className="btn-container">
       <button className='prev-btn ' onClick={prevbtn}><FaChevronLeft/></button>
       <button className='next-btn' onClick={nextbtn}><FaChevronRight/></button>
       </div>
       <button className='btn btn-hipster' onClick={randomNumber}>suprise me</button>
  </article>
   </>
  )
}

export default Reviews