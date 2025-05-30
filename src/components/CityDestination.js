import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {CitiesDataBahawalpur,CitiesDataHyedrbad,CitiesDataKarachi,CitiesDataLahore,CitiesDataMultan,} from '../constants'; // Adjust path if needed
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AntDesign from '@expo/vector-icons/AntDesign';

const DestinationCard = ({ navigation, item }) => {
  const [isFavourite, toggleFavourite] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Destination', { ...item }); // Make sure Destination screen is registered
      }}
      style={styles.destinationCard}
    >
      <Image source={item.image} style={styles.avatar} />
      <TouchableOpacity
        onPress={() => toggleFavourite(!isFavourite)}
        style={styles.heartIcon}
      >
        <AntDesign name="heart" size={20} color={isFavourite ? 'red' : 'white'} />
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
};

function renderDestinations(data) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        if (index % 2 === 0) {
          return (
            <View style={styles.row} key={index}>
              <DestinationCard navigation={navigation} item={item} />
              {index + 1 < data.length && (
                <DestinationCard navigation={navigation} item={data[index + 1]} />
              )}
            </View>
          );
        }
      })}
    </View>
  );
}

export function BahawalpurDestination() {
  return renderDestinations(CitiesDataBahawalpur);
}

export function HydDestination() {
  return renderDestinations(CitiesDataHyedrbad);
}

export function KarachiDestination() {
  return renderDestinations(CitiesDataKarachi);
}

export function LahoreDestination() {
  return renderDestinations(CitiesDataLahore);
}

export function MultanDestination() {
  return renderDestinations(CitiesDataMultan);
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  destinationCard: {
    justifyContent: 'flex-end',
    position: 'relative',
    padding: 16,
    paddingVertical: 24,
    width: wp(44),
    height: wp(65),
    marginRight: 10,
  },
  avatar: {
    position: 'absolute',
    width: wp(44),
    height: wp(65),
    borderRadius: 35,
  },
  heartIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
    borderRadius: 50,
    padding: 12,
    backgroundColor: 'black',
  },
  title: {
    fontSize: wp(4),
    fontWeight: 'bold',
    color: 'white',
  },
});
