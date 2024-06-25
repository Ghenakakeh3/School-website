import { useContext } from 'react';
import DataContext from './ApiContext';

const useData = () => {
  return useContext(DataContext);
};

export default useData;
