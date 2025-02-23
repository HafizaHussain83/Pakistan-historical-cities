import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';


export default function WelcomeScreen() {

    const navigation=useNavigation();
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require("../../assets/images/west-lake.png")}
        style={styles.image}
      />
      
      {/* Gradient View */}
      <View style={styles.gradientView}>
        <LinearGradient
          colors={["transparent", "rgba(3,105,161,0.8)"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.gradientLinear}
        >
          <View style={{gap:10}}>
          <Text style={styles.Maintext}>Discover History's Treasure</Text>
          <Text style={styles.Welcomediscription}>Explore the Rich Tapesty of History with Us!</Text>
          </View>
        </LinearGradient>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={styles.exploreButton}>
        <Text style={styles.exploreButtonText}>Explore</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  gradientView: {
    padding: 20,
    paddingBottom: 100,
    gap: 32,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  gradientLinear: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'start',
   
    padding: 5,
  },
  Maintext:{
    fontSize: wp(10),
    fontWeight: 'bold',
    color: 'white',
    lineHeight:wp(10),
  },
  Welcomediscription:{
    fontSize: wp(4),
    fontWeight: 'bold',
    color: 'white',
  },
  exploreButton:{
    borderRadius:50,
    backgroundColor:"white",
    paddingHorizontal: 38,
    paddingVertical: 12,
    padding:12,
    alignSelf:'center',
    marginTop: 30, // Add top margin to give space from the top of the screen
  marginBottom: 30,
    
  },
  exploreButtonText:{
    fontSize:wp(5),
    fontWeight:'bold',
    color:"blue",
    

  }
});
