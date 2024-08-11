import {useState} from "react";
import { TextInput,
    View,
    StyleSheet,
    Alert,
    useWindowDimensions,
    KeyboardAvoidingView,
    ScrollView
    }
 from "react-native";
import PrimaryButton from "../Component/ui/PrimaryButton";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Title from "../Component/ui/Title";
import Color from "../Constants/Color";
import Card from "../Component/ui/card";
import EnterScreen from "../Component/ui/EnterScreen";

function StartGameScreen({onPickNumber}) {

const[enterNumber , setEnterNumber]= useState('');
const {width , height}=useWindowDimensions();

function numberInputHandler(entertext){
    setEnterNumber(entertext);
};
function resetInputHandler(){
    setEnterNumber('');
}
function confirmInputHandler(){
    const chosenNumber= parseInt(enterNumber);
    if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
        Alert.alert(
            'Invalid Number!!',
            'Number has to be a number between 1 and 99',
            [{text :'Okay',style:'destructive' , onPress : resetInputHandler}]
        );
        return;
    }
    onPickNumber(chosenNumber);
}
// function StartGameScreen(){
const marginTopDistance = height<380 ? 30: 150;
    return(
        <ScrollView style={styles.ScreenView}>
        <KeyboardAvoidingView style={styles.ScreenView} behavior="position">
        <View style={[styles.Screen ,{marginTop:marginTopDistance}]}>
        <Title>Guess my Number</Title>
   <Card>
    <EnterScreen>
        Enter a Number
        </EnterScreen>
   <TextInput  style={styles.numberInput}
   
    maxLength={2}
    keyboardType="number-pad"
    autoCapitalize="none"
    autoCorrect={false}
    onChangeText={numberInputHandler}
    value={enterNumber}
    />
    <View style={styles.buttonContainer}>
        <View style={styles.buttonContainer1}>
   <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer1}>
   <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View >

    </View>
    </Card>
   </View>
   </KeyboardAvoidingView>
   </ScrollView>
   
    );
};
export default StartGameScreen;
// const deviceHeight = Dimensions.get('window').height                  

const styles = StyleSheet.create({ 
    Screen:{
        flex:1,
        // marginTop:deviceHeight< 380 ? 30:100,
        alignItems:"center"
    },
    
    numberInput:{
        height:50,
        width:50,
        fontSize:32,
        borderBottomColor: Color.accent500,
        borderWidth:2,
        color: Color.accent500,
        marginVertical:8,
        fontWeight:'bold',
        textAlign:'center'
    },
    buttonContainer:{
        flexDirection:"row",
        
    },
    buttonContainer1:{
        flex:1,
    },
    ScreenView:{
        flex:1
    }
    
});

