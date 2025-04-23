import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Catagories from '../components/Catagories';
import { RawalpindiDestination } from '../components/CityDestination'; // Assuming it's a named export

export default function RawalpindiScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingVertical: 50 }} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={require('../../assets/images/rawalpindi.jpeg')} style={styles.cityImage} />
          <Text style={styles.cityName}>Rawalpindi</Text>
        </View>

        <View style={styles.details}>
          <Text style={styles.description}>Detailed description about Rawalpindi...</Text>
        </View>

        {/* Categories */}
        <View style={styles.categories}>
          <Catagories />
        </View>

        {/* Destinations */}
        <View style={styles.destination}>
          <RawalpindiDestination />
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
