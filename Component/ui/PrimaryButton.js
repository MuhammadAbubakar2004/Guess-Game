import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '../../Constants/Color'

const PrimaryButton = ({children , onPress}) => {
  
  return (
    <View style={styles.buttonOutputcontainer} >
    <Pressable 
    android_ripple={{color:Color.primary600}}
    style={({pressed})=>
    pressed
    ? [styles.buttonsInputcontainer,styles.pressed]
    : styles.buttonsInputcontainer}
     onPress={onPress} 
    >
    <Text style={styles.buttonText}> {children}</Text>
    </Pressable>
    </View>
  )
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOutputcontainer:{
    borderRadius:28,
    margin:5,
    overflow:'hidden'
    
  },
  buttonsInputcontainer:{
    paddingVertical:8,
    backgroundColor:Color.primary500,
    elevation:2,
    paddingHorizontal:16,
  },
  buttonText:{
    color:'white',
    textAlign:'center',
},
pressed:{
  opacity:0.75
}
})




