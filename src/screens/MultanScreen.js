import React from 'react';
import CityScreen from '../components/CityScreen';
import { MultanDestination } from '../components/CityDestination';
import Catagories from '../components/Catagories';  // Import Categories component

export default function MultanScreen() {
  return (
    <CityScreen
      cityName="Multan"
      imageSource={require('../../assets/images/multan.jpeg')}
      description="Detailed description about Multan..."
      DestinationComponent={MultanDestination}
      CategoriesComponent={Catagories}  // Pass Categories as prop
    />
  );
}
