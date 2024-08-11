// import React from "react";
import { View,Text , Image, StyleSheet ,useWindowDimensions, ScrollView} from "react-native";
import Title from "../Component/ui/Title";
import Color from "../Constants/Color";
import PrimaryButton from "../Component/ui/PrimaryButton";

function GameOverScreen({roundsNumber,userNumber,onStartNewGame}) {
  const {width , height}=useWindowDimensions();
  let imageSize=300 ;
  if(width< 300){
    imageSize=180;
  }
  if(height<400){
    imageSize=120
  }
  const imageStyle={
    width:imageSize,
    height:imageSize,
    borderRadius:imageSize/2
  }

  return (
    <ScrollView style={styles.Screen}>
    <View style={styles.rootContainer }>
      <Title>GAME OVER!</Title>
      <View style={[styles.imageContainer,imageStyle]}>
      <Image style={styles.image} source={require('../assets/success.png')} />
      </View>
    <Text style={styles.summaryText}>Your Phone Needed 
    <Text style={styles.color}> {roundsNumber} </Text> 
    Rounds To Guess The Number 
    <Text style={styles.color}> {userNumber} </Text>
    {'.'}</Text>
    <PrimaryButton onPress={onStartNewGame}>START NEW GAME</PrimaryButton>
    </View>
    </ScrollView>
  );
}

export default GameOverScreen;
// const deviceWidth = Dimensions.get('window').height
// const marginDistance = height<380?12:44;

const styles=StyleSheet.create({
    Screen:{
        flex:1,
        marginTop:3,
        // marginBottom:10
      },
    rootContainer:{
        flex:1,
        padding:24,
        alignItems:'center',
        justifyContent:'center'
    },
    imageContainer:{
          //  width:deviceWidth<380 ? 180 : 300, 
          //  height:deviceWidth<380 ? 180 : 300,
          //  borderRadius:deviceWidth<380 ? 100 : 200,  
           borderWidth:3,
           borderColor: Color.accent100 ,
           overflow:'hidden',
           margin:24,
           marginBottom:15
    },
    image:{
        width:'100%',
        height:'100%'
},
    summaryText:{
        fontFamily:'open-sans',
        fontSize:24,
        textAlign:'center',
        marginBottom:22,
        
},
        color:{
        color:Color.accent800,
        fontFamily:'open-sans-bold',
}
})