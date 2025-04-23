import React from 'react';
import CityScreen from '../components/CityScreen';
import { RawalpindiDestination } from '../components/CityDestination';
import Catagories from '../components/Catagories';

export default function RawalpindiScreen() {
  return (
    <CityScreen
      cityName="Rawalpindi"
      imageSource={require('../../assets/images/rawalpindi.jpeg')}
      description="Detailed description about Rawalpindi..."
      DestinationComponent={RawalpindiDestination}
      CategoriesComponent={Catagories}
    />
  );
}
