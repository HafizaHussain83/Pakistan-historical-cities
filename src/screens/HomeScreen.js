import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from '@expo/vector-icons/AntDesign';
import { pakistanCities } from '../constants'; 
import Catagories from '../components/Catagories';
import SortCatagories from '../components/SortCatagories';
import Destination from '../components/Destination';

export default function HomeScreen({ navigation }) {
  const [searchText, setSearchText] = useState('');

  const filteredCities = searchText
    ? pakistanCities.filter(city => city.title.toLowerCase().includes(searchText.toLowerCase()))
    : pakistanCities;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 50 }}>
        <View style={styles.avatarMain}>
          <Text style={styles.avatarTitle}>Explore Places</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/images/avatar.png')} style={styles.avatarImage} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchBar}>
          <View style={styles.searchMain}>
            <AntDesign name="search1" size={20} color="gray" />
            <TextInput
              placeholder="Search Destination"
              placeholderTextColor="gray"
              style={styles.searchBarText}
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
        </View>

        {filteredCities.length > 0 && (
          <ScrollView
            horizontal
            contentContainerStyle={{ gap: 10, paddingHorizontal: 20, marginVertical: 20 }}
            showsHorizontalScrollIndicator={false}
          >
            {filteredCities.map((city, index) => (
              <TouchableOpacity
                key={index}
                style={styles.card}
                onPress={() => navigation.navigate(`${city.title}Screen`)} // Navigate to city-specific screen
              >
                <Image source={city.image} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{city.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}

        <View style={styles.subcatagories}>
          <SortCatagories />
        </View>

        <View style={styles.destination}>
          <Destination />
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
  avatarMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  avatarTitle: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: '#000',
  },
  avatarImage: {
    height: hp(10),
    width: hp(10),
  },
  searchBar: {
    marginHorizontal: 20,
    marginBottom: 5,
    padding: 7,
  },
  searchMain: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    paddingLeft: 24,
    gap: 5,
    backgroundColor: '#F2F2F2',
  },
  searchBarText: {
    flex: 1,
    fontSize: wp(4),
    marginBottom: 4,
    marginLeft: 4,
    letterSpacing: 0.5,
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 50,
    padding: 10,
    width: hp(15),
    height: hp(15),
    justifyContent: 'center',
  },
  cardImage: {
    width: '70%',
    height: '70%',
    borderRadius: 50,
  },
  cardTitle: {
    fontSize: wp(4),
    fontWeight: '600',
    marginTop: 5,
    color: '#333',
    marginBottom: 10,
  },
  subcatagories: {
    paddingRight: 10,
    paddingLeft: 10,
    marginBottom: 10,
  },
  destination:{
   
    paddingHorizontal:15,   
  }
 
});
