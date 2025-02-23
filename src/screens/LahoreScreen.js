import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CitiesDataLahore } from '../constants'; // Make sure the path is correct
import LahoreDestination from '../components/LahoreDestination';
import Catagories from '../components/Catagories';


export default function LahoreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingVertical: 50 }} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={require("../../assets/images/lahore.jpeg")} style={styles.cityImage} />
          <Text style={styles.cityName}>Lahore</Text>
        </View>

        <View style={styles.details}>
          <Text style={styles.description}>Detailed description about Lahore...</Text>
        </View>

                {/* Catagories */}
                <View  style={styles.catagories} >
                            <Catagories />
                            </View>

                        <View style={styles.destination}>
                        <LahoreDestination />

                       </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  description: {
    fontSize: wp(4),
    color: '#333',
  },
  categories: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  destination:{
   
    paddingHorizontal:15,   
  }
 
});
