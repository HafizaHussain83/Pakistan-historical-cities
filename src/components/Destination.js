
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { destinationData } from '../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Destination() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {destinationData.map((item, index) => {
        // If the current index is even, we start a new row
        if (index % 2 === 0) {
          // Render two items per row
          return (
            <View style={styles.row} key={index}>
              <DestinationCard navigation={navigation} item={item} index={index} />
              {index + 1 < destinationData.length && (
                <DestinationCard navigation={navigation} item={destinationData[index + 1]} index={index + 1} />
              )}
            </View>
          );
        }
      })}
    </View>
  );
}

export const DestinationCard = ({ navigation, item, index }) => {
  const [isFavourit, toggleFavourit] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Destination', { ...item });
      }}
      style={styles.DestinationCard}
    >
      <Image source={item.image} style={styles.avatar} />
      <TouchableOpacity
        onPress={() => toggleFavourit(!isFavourit)}
        style={styles.heartIcon}
      >
        <AntDesign name="heart" size={20} color={isFavourit ? "red" : "white"} />
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20, // Adds space between rows
  },
  DestinationCard: {
    justifyContent: 'flex-end',
    position: 'relative',
    padding: 16,
    paddingVertical: 24,
    width: wp(44), // 44% of screen width for each card
    height: wp(65),
    marginRight: 10, // Space between the two cards in a row
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

