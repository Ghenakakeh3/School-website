import React, { useEffect, useState } from 'react';
import Send_Adverts from './Send_Adverts';
import Typography from '../../../utilities/Typography';
import { useTranslation } from 'react-i18next';

const Adverts = () => {
  const [adverts, setAdverts] = useState([]);
  const { t } = useTranslation("global");

  useEffect(() => {
    // Fetch adverts from backend or local storage
    // For demo purposes, we'll use dummy data
    const dummyAdverts = [
      { id: 1, text: 'Welcome to the new semester!' },
      { id: 2, text: 'Don’t forget to submit your assignments.' },
      { id: 2, text: 'Don’t forget to submit your assignments.' },
      { id: 1, text: 'Welcome to the new semester!' },
      { id: 2, text: 'Don’t forget to submit your assignments.' }, { id: 1, text: 'Welcome to the new semester!' },
      { id: 2, text: 'Don’t forget to submit your assignments.' }, { id: 1, text: 'Welcome to the new semester!' },
      { id: 2, text: 'Don’t forget to submit your assignments.' }, { id: 1, text: 'Welcome to the new semester!' },
      { id: 2, text: 'Don’t forget to submit your assignments.' }, { id: 1, text: 'Welcome to the new semester!' },
      { id: 2, text: 'Don’t forget to submit your assignments.' },
      { id: 2, text: 'Don’t forget to submit your assignments.' },



    ];
    setAdverts(dummyAdverts);
  }, []);

  return (
    <div className=" text-center pt-4 bg-myGray-200 min-h-screen">
        <Typography component="h2">{t("Adverts.0")}</Typography>
        <Typography component='h4'>{t("Adverts.1")}</Typography>
   <div className='bg-white h-[80vh] w-[65%] mx-auto rounded-lg shadow-md mt-6 flex flex-col justify-between '>
   
    <div className='  overflow-y-scroll text-start pt-5 px-4 '> 
    {adverts.map(advert => (
        <div key={advert.id}  className="bg-sky-900 text-white mb-2 w-fit rounded-3xl py-2 px-4 shadow-md">
          {advert.text}
        </div>
      ))}
    </div>

      <Send_Adverts />
   </div>
    </div>
  );
};

export default Adverts;
