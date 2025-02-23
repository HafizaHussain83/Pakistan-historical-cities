
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar'; // Correct the import for StatusBar
import Ionicons from '@expo/vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function DestinationScreen(props) {
  const item = props.route.params; // Fixed typo: 'prams' -> 'params'
  
  // Check if 'item' and 'item.image' are defined
  if (!item || !item.image) {
    return (
      <View style={styles.container}>
        <Text>No image available</Text>
      </View>
    );
  }

  const navigation = useNavigation();
  
  const [isFavourit, toggleFavourit] = useState(false);

  return (
    <View style={styles.container}>
      {/* Render the image if it's available */}
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      
      {/* StatusBar component */}
      <StatusBar style="light" />
      
      <SafeAreaView style={styles.navigationIcon}>
        <TouchableOpacity style={styles.backView}  onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

      {/* Favourit View*/}
      <TouchableOpacity 
          onPress={() => toggleFavourit(prevState => !prevState)}  // Corrected toggle logic
          style={styles.favouritView}
        > 
          <AntDesign name="heart" size={24} color={isFavourit ? "red" : "white"} />
        </TouchableOpacity>
       </SafeAreaView>
        {/* Title */}
        <ScrollView 
        style={styles.descriptionView}
        contentContainerStyle={{
          gap:20,
        }}
        > 
      <View style={styles.titleView}>
     <Text style={styles.title}>{item?.title}</Text>
     </View>

     <Text style={styles.description}>{item?.longDescription}</Text>
     <View style={styles.detailsView}>
        {/* DurationView */}
     <View style={styles.durationView}>
     <AntDesign name="clockcircle" size={24} color="orange" />
     <View style={styles.TitleDetails}>
        <Text  style={styles.detailsheading}>
        {item.duration}
        </Text>
        <Text style={styles.detailsParagraph}>
            Duration
        </Text>
     </View>
     </View>
     {/* Distanc View */}
     <View style={styles.durationView}>
     <AntDesign name="enviroment" size={24} color="orange" />
     <View style={styles.TitleDetails}>
        <Text  style={styles.detailsheading}>
        {item.distance}
        </Text>
        <Text style={styles.detailsParagraph}>
            Distance
        </Text>
     </View>
     </View>
     {/* Weather View */}
     <View style={styles.durationView}>
     <AntDesign name="cloud" size={24} color="orange" />
     <View style={styles.TitleDetails}>
        <Text  style={styles.detailsheading}>
        {item.weather}
        </Text>
        <Text style={styles.detailsParagraph}>
            Duration
        </Text>
     </View>
     </View>

     </View>
     </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: wp(100),
    height: hp(55), 
  },
  navigationIcon: {
   flexDirection:"row",
   alignItems:"center",
   width: wp(100),
   position:"absolute",
   top:40,

  },
  backView:{
  backgroundColor:"rgba(0,0,0,0.5)",
    padding:8,
    borderRadius:50,
    marginLeft:16
  },
  favouritView:{
    backgroundColor:"rgba(0,0,0,0.5)",
    padding:8,
    borderRadius:50,
    marginLeft:276
  },
  descriptionView:{
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 32,
    marginTop: -50,

  },
  titleView:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"flex-start",
    

  },title:{
    fontSize:wp(7),
    fontWeight:"bold",
    color:"#000",
    
    
  },
  description:{
    fontSize:wp(4),
    letterSpacing:0.5,
    marginBottom:8,
    

  },
  detailsView:{
      flexDirection:"row",
      justifyContent:"space-between",
      marginHorizontal:4,

  },
  durationView:{
    justifyContent:"center",
    alignItems:"center",

  },
  TitleDetails:{
    paddingTop:4,
    alignItems:"center",
    gap:4,
  },
  detailsheading:{
    fontSize:wp(4.5),
    fontWeight:"bold"
  },
  detailsParagraph:{
letterSpacing:0.5,
color:"#A0A0A0"
  }
   
});

