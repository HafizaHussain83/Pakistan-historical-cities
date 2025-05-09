
  import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
  import React, { useState } from 'react';
  import { sortCategoryData } from '../constants';
  import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
  
  export default function SortCatagories() {
    const [activeSort, setActiveSort] = useState("Popular");
  
    return (
      <View style={styles.container}>
        {sortCategoryData.map((sort, index) => {
          let isActive = sort == activeSort;
          let activeButtonClass = isActive ? styles.active : {};
  
          return (
            <TouchableOpacity
              onPress={() => setActiveSort(sort)}
              key={index}
              style={[styles.activeonPress, activeButtonClass]}>
              <Text style={{
                fontSize: wp(4),
                color: isActive ? "blue" : "rgba(0,0,0,0.5)",
              }}>
                {sort}  {/* Display the sort category name */}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      
      backgroundColor: "#F2F2F2",
      borderRadius: 50,
      padding: 8,
      
      marginBottom:10
    },
    active: {
      backgroundColor: "white",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowColor: "#000",
      shadowRadius: 4,
      elevation: 5,
    },
    activeonPress: {
      padding: 12,
      borderRadius: 50,
    },
  });
  