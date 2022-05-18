import React,{memo, useCallback, useEffect, useState} from 'react';
import Api from '../../api/api'
import Board from '../components/Board';
import { ContainerStyle } from '../style';
import Painel from '../components/Painel'

function Main(){

  const [data, setData] = useState({})
  const [country, setCountry] = useState('brazil')


  const updataAt = new Date().toLocaleString();
  
  const handleChange = ({target})=>{
    const country = target.value;
    setCountry(country)
  }

  const getCovidData= useCallback((Country)=>{
    Api.getCountry(Country).then(data=>setData(data))
    
  },[])  

  useEffect(()=>{
    getCovidData(country)
  },[getCovidData, country])
  
  return (
    <ContainerStyle>
      <div className='mb-2'></div>
      <Painel 
        data={data}
        updateAt={updataAt}
        onChange={handleChange}
        country={country}
        getCovidData={getCovidData}
      />
      <Board data={data}/>
    </ContainerStyle>
  );
}
export default memo(Main);