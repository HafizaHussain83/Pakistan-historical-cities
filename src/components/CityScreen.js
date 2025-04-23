import React from 'react';
import { SafeAreaView, Text, Image, ScrollView, StyleSheet, View } from 'react-native';

const CityScreen = ({ cityName, imageSource, description, DestinationComponent, CategoriesComponent }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingVertical: 50 }} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={imageSource} style={styles.cityImage} />
          <Text style={styles.cityName}>{cityName}</Text>
        </View>

        <View style={styles.details}>
          <Text style={styles.description}>{description}</Text>
        </View>

        {/* Categories */}
        {CategoriesComponent && (
          <View style={styles.categories}>
            <CategoriesComponent />
          </View>
        )}

        {/* Destination */}
        <View style={styles.destination}>
          <DestinationComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
    height: 200,
    borderRadius: 10,
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  details: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
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

export default CityScreen;
