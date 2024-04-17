import Typography from '../../../utilities/Typography'

export default function AuthDesign({ img_1,img_2, title, paragraph }) {
    return (
        <div className='flex-2 relative min-[1100px]:h-screen w-[45%]   bg-red-6'>
           
    <div className='relative '>
    <div className=' absolute max-[1100px]:hidden end-5 top-14  rtl:scale-x-[-1]  border-[12px] border-yellow-500 border-opacity-60 hover:border-opacity-100  w-[450px] h-[450px] rounded-full '>
       
       <img className=' z-50  w-[430px] h-[430px]   rounded-full' src={img_2} alt="" />
       </div>
             
       <div className='absolute max-[1100px]:hidden top-72 start-28  rtl:scale-x-[-1]    mt-10   border-[10px] border-blue border-opacity-60 hover:border-opacity-100 w-[250px] h-[250px] rounded-full '>
      
      <img className=' z-50  w-[230px] h-[230px]   rounded-full' src={img_1} alt="" />
      </div>
    </div>

            {/* <div className='absolute max-[1100px]:relative mt-24 max-[1100px]:mt-0 
                        ltr:pr-[12px] ltr:pl-[150px] ltr:max-[1100px]:pl-[90px] ltr:max-[940px]:px-[5%]
                        rtl:pl-[12px] rtl:pr-[180px] rtl:max-[1100px]:pr-[120px] rtl:max-[940px]:px-[5%]'>
                <Typography component={'h3'} className="text-blue" >
                    {title}
                </Typography>
                <Typography component={'h4'} >
                    {paragraph}
                </Typography>
            </div> */}
        </div>
    )
}