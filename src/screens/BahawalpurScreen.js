import React from 'react';
import CityScreen from '../components/CityScreen';
import { BahawalpurDestination } from '../components/CityDestination';
import Catagories from '../components/Catagories';  // Import Categories component

export default function BahawalpurScreen() {
  return (
    <CityScreen
      cityName="Bahawalpur"
      imageSource={require('../../assets/images/bahawalpur.jpeg')}
      description="Detailed description about Bahawalpur..."
      DestinationComponent={BahawalpurDestination}
      CategoriesComponent={Catagories}  // Pass Categories as prop
    />
  );
}
