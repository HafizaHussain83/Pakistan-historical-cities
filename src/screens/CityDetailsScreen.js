import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Catagories from '../components/Catagories';

export default function CityDetailsScreen({ route }) {
  const { city } = route.params; // Retrieve the city passed from HomeScreen

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingVertical: 50 }} showsVerticalScrollIndicator={false}>
        {/* City Header */}
        <View style={styles.header}>
          <Image source={city.image} style={styles.cityImage} />
          <Text style={styles.cityName}>{city.title}</Text>
        </View>

        {/* City Details */}
        <View style={styles.details}>
          <Text style={styles.description}>{city.longDescription}</Text>
        </View>

{/* Catagories */}
        <View  style={styles.catagories} >
                    <Catagories />
                    </View>


      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  header: {
    alignItems: 'center',
    
  },
  cityImage: {
    width: '100%',
    height: hp(30),
    borderRadius: 10,
  },
  cityName: {
    fontSize: wp(7),
    fontWeight: 'bold',
   
    color: '#333',
    
  },
  details: {
   
  },
  description: {
    fontSize: wp(4),
    color: '#333',
   
  },
  catagories:{
paddingTop:-30,
    
  }
});
