import React from 'react';
import CityScreen from '../components/CityScreen';
import { LahoreDestination } from '../components/CityDestination';
import Catagories from '../components/Catagories';

export default function LahoreScreen() {
  return (
    <CityScreen
      cityName="Lahore"
      imageSource={require('../../assets/images/lahore.jpeg')}
      description="Detailed description about Lahore..."
      DestinationComponent={LahoreDestination}
      CategoriesComponent={Catagories}
    />
  );
}
