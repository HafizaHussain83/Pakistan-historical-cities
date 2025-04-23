import React from 'react';
import CityScreen from '../components/CityScreen';
import Catagories from '../components/Catagories';
import { HydDestination } from '../components/CityDestination';

export default function HyderabadScreen() {
  return (
    <CityScreen
      cityName="Hyderabad"
      imageSource={require('../../assets/images/Hyderabad.jpg')}
      description="Detailed description about Hyderabad..."
      DestinationComponent={HydDestination}
      CategoriesComponent={Catagories}
    />
  );
}
