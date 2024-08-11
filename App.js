import { useState } from "react";
import { StyleSheet,ImageBackground  , SafeAreaView} from "react-native";
import{LinearGradient}from 'expo-linear-gradient';
import {useFonts}from 'expo-font'
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

import StartGameScreen from "./Screens/StartGameScreen";
import GameScreen from "./Screens/GameScreen";
import GameOverScreen from "./Screens/GameOverScreen";
import Color from "./Constants/Color";

export default function App(){
  
  const[userNumber , SetUserNumber]=useState();
  const[gameIsOver , setGameIsOver]=useState(true);
  const[guessRounds,setGuessRounds]=useState(0);

  const [fontsLoadad] =useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
  if(!fontsLoadad){
    return <AppLoading /> ;
  }
  

  function PickedNumberHandler(pickednumber){
    SetUserNumber(pickednumber)
    setGameIsOver(false)
  }
  function GameOverHandler(numberofRounds){
    setGameIsOver(true)
    setGuessRounds(numberofRounds);
  } 
  function startnewGameHandler(){
    SetUserNumber(null);
    setGuessRounds(0);
  }

  let screen=<StartGameScreen onPickNumber={PickedNumberHandler} />
  if(userNumber){
   screen=<GameScreen userNumber={userNumber} onGameOver={GameOverHandler}/>
  }
  if(gameIsOver && userNumber){screen=<GameOverScreen  
    userNumber={userNumber} 
    roundsNumber={guessRounds} 
    onStartNewGame={startnewGameHandler}
    />
  }

  return(
    <>
    <StatusBar style="inverted"/>
    <LinearGradient colors={[Color.primary700,Color.accent500,Color.accent600]}
    style={styles.rootScreen}>
    <ImageBackground 
    source={require('./assets/123.jpg')}
    resizeMode="cover"
    style={styles.rootScreen}
    imageStyle={styles.imageBackground2}
    >
     <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView> 
    </ImageBackground>
    </LinearGradient>
    </>

  )};


  const styles = StyleSheet.create({
    rootScreen:{
      
      flex:1
    },
    imageBackground2:{
      opacity:0.20,
    }
  });
