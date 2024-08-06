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
    <div className='text-center pt-4 bg-myGray-200 min-h-screen'>
          <Send_Adverts />
      <div className='flex justify-center  w-full flex-wrap gap-10 mt-10 '>
      {adverts.map(advert => (
        <div key={advert.id}  className="bg-sky-900 text-white mb-2 w-fi rounded-3xl py-2 px-4 shadow-md w-1/4">
          <Typography component={"h3"} className={"text-white"}>{advert.text}</Typography>
        </div>
      ))}
         
      </div>
    </div>

  );
};

export default Adverts;
