import React,{memo} from "react";
import RefreshIcon from '../../assets/images/refresh.svg';
import {Card, Typography, Button, Select, MenuItem} from '../../components'
import COUNTRIES from '../../commons/constants/countries'
import { CardPanelContentStyled, ItemStyled } from "./style";

const navigatorHasShare = navigator.share;

function Painel({updateAt, onChange, data, country, getCovidData}){
  const {cases, todayDeaths,todayCases, deaths,recovered}= data;
  const renderCountries = (country, index)=>(
    <MenuItem key={`country-${index}`} value={`${country.value}`}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />       
      </ItemStyled>
    </MenuItem>
  )

  const textCovid19 = `País - ${country} - Recuperados - ${recovered}`;

  const shareInfo = ()=>{
    navigator.share({
      title:`Covid19 - ${country}`,
      text: textCovid19,
      url: 'https://'
    })
  }
  
  
  const copyInfo = ()=>{
    navigator.clipboard.writeText(textCovid19)
  }

  const renderShereButton = ()=>(
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>Compatilhar</Button>
    </div>
  )

  const renderCopyButton = ()=>(
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>Copiar</Button>
    </div>
  )

  return(
    <Card className="mb-2">
      <div className="p-2">
          <Typography variant="h5" component='span' color='primary'>COVID19</Typography>
      </div>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h6" component='span' color='primary'> Painel Coronavírus</Typography>
          <Typography variant="body2" component='span' color='primary'> Atualizado em: {updateAt}</Typography>
        </div>
        <div className="pt-2">
          <Select onChange={onChange} value={country}>
            {COUNTRIES.map(renderCountries)}
          </Select>
        </div>
        {navigatorHasShare?renderCopyButton() : renderShereButton()}
      </CardPanelContentStyled>
    </Card>
  )
}

export default memo(Painel);