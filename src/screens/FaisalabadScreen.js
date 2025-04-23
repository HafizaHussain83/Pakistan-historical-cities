import React from 'react';
import CityScreen from '../components/CityScreen';
import Catagories from '../components/Catagories';
import { FaisalabadDestination } from '../components/CityDestination';

export default function FaisalabadScreen() {
  return (
    <CityScreen
      cityName="Faisalabad"
      imageSource={require('../../assets/images/faisalabad.jpeg')}
      description="Detailed description about Faisalabad..."
      DestinationComponent={FaisalabadDestination}
      CategoriesComponent={Catagories}
    />
  );
}
