

import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { categoriesData } from "../constants";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Categories() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleMain}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.subTitle}>View All</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView
        horizontal
        contentContainerStyle={{
         
          gap: 10,
         
        }}
        showsHorizontalScrollIndicator={false}
      >
        {categoriesData.map((category, index) => {
          return (
            <TouchableOpacity key={index} style={styles.card}>
              <Image source={category.image} style={styles.cardImage} />
              <Text style={styles.cardtitle}>{category.title}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    paddingVertical: 20,
    padding:20
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleMain: {
    fontSize: wp(4),
    fontWeight: "bold",
    color: "gray", 
    marginBottom:10,
  },
  subTitle: {
    fontSize: wp(4),
    color: "blue", 
    marginBottom:10,
  },
  card: {
    alignItems: "center", 
    
  },
  cardImage: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(7),
    marginBottom: 8, 
  },
  cardtitle: {
    fontSize: wp(3),
    fontWeight: "bold",
    textAlign: "center", 
  }
});
