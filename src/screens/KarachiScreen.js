import React from 'react';
import CityScreen from '../components/CityScreen';
import Catagories from '../components/Catagories';
import { KarachiDestination } from '../components/CityDestination';

export default function KarachiScreen() {
  return (
    <CityScreen
      cityName="Karachi"
      imageSource={require('../../assets/images/karachi.jpeg')}
      description="Detailed description about Karachi..."
      DestinationComponent={KarachiDestination}
      CategoriesComponent={Catagories}
    />
  );
}
