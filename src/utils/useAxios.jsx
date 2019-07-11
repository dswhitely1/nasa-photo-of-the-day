import {
  useEffect,
  useState
} from 'react';
import axiosNasa from './axiosConfig';

export const useAxios = url => {
  const [data, setData]           = useState( '' );
  const [error, setError]         = useState( null );
  const [isLoading, setIsLoading] = useState( false );

  useEffect( () => {
    axiosNasa.get( url )
             .then( res => setData( res.data ) )
             .catch( err => setError( err ) );
  }, [] );

  return [data, error, isLoading];
};
