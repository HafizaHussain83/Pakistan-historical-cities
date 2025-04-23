import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { HydDestination } from '../components/CityDestination'; // ✅ Corrected: named import
import Catagories from '../components/Catagories';

export default function HyderabadScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingVertical: 50 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/Hyderabad.jpg')}
            style={styles.cityImage}
          />
          <Text style={styles.cityName}>Hyderabad</Text>
        </View>

        <View style={styles.details}>
          <Text style={styles.description}>
            Detailed description about Hyderabad...
          </Text>
        </View>

        {/* Categories */}
        <View style={styles.categories}>
          <Catagories />
        </View>

        {/* Destinations */}
        <View style={styles.destination}>
          <HydDestination />
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
  destination: {
    paddingHorizontal: 15,
  },
});
