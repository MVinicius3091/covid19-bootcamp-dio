import { getByDisplayValue } from '@testing-library/react';
import React from 'react';
import {Grid, Skeleton} from '../../components';
import PropTypes from 'prop-types';
import Card from '../components/Card'


function Board({data}){
  const {cases, todayDeaths,todayCases, deaths,recovered } = data;
  const getValue = (value)=> value? value: <Skeleton variant='text' width={182} height={60} />;
  return (
    <Grid  spacing={5} container>
      <Grid item xs={12} md={4} >
        <Card  value={getValue(cases)}label='Total de casos' color='#00008B'></Card>
      </Grid>
      
      <Grid item xs={12} md={4} >
        <Card  value={getValue(todayDeaths)}label='Óbitos por dia' color='#00008B'></Card>
      </Grid>

      <Grid item xs={12} md={4} >
        <Card value={getValue(todayCases)}label='Casos por dia' color='#4B0082'></Card>
      </Grid>

      <Grid item xs={12} md={4} >
        <Card value={getValue(deaths)}label='Total de mortes' color='#4B0082'></Card>
      </Grid>
      <Grid item xs={12} md={4} >
        <Card value={getValue(recovered)}label='Total de recuperados' color='#FFD700'></Card>
      </Grid>
      
    </Grid>
  );
}
export default Board;