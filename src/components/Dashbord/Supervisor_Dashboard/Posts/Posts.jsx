import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useTranslation } from "react-i18next";
import post_iamge from '../../../../assets/modrator_image.png'
import Typography from '../../../utilities/Typography';
import Button from '../../../utilities/Button';
import New_post from './New_post';
import ClickOutside from '../../../utilities/Click_Outsite';
// import * as Popover from '@radix-ui/react-popover';

const Posts = () => {
    const posts=[
        {image: post_iamge, discrption:"this is a discrption "},
        {image: post_iamge, discrption:"this is a discrption "},
        {image: post_iamge, discrption:"this is a discrption "},
        {image: post_iamge, discrption:"this is a discrption "},
        {image: post_iamge, discrption:"this is a discrption "},

    ]
    const [data, setData] = useState(posts);
    const { t } = useTranslation("global");
    const[newpost,setnewpost]=useState(false)
  const wrapperRef = useRef();


//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(response => {
//         setData(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);
const Toggle_new_post=() => {
  setnewpost(false)
}

  return (
    <>
   
<div className=' bg-myGray-200 py-10 relative  '>
<div className={` w-[50%] mx-auto mt-5 ${newpost ? "opacity-25" : ""}`}>
          {data.map(post => (
      
            <div className='bg-white my-6 shadow-md text-center  flex flex-col rounded-md px-4 py-5'>
                <Typography component='h6'>   {post.discrption}</Typography>
                <img src={post_iamge} alt="" />
                
            </div>
    
      
      ))}

    </div>
    <Button  onClick={() => {setnewpost(true)} } className='absolute top-[80vh] end-28 rounded-full text-center text-[25px] w-10 h-10 flex items-center shadow-lg bg-success font-bold  '>+</Button>

</div>
 
 <ClickOutside onClick={Toggle_new_post}  className=''>
 {newpost &&  (<New_post/>)}
 </ClickOutside>
  
  
 </>
  )
}

export default Posts
