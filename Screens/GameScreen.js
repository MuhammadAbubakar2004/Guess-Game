import { useState ,useEffect} from "react";
import {  View ,StyleSheet, Alert, useWindowDimensions, FlatList } from "react-native";
import{Ionicons}from'@expo/vector-icons';
import NumberContainer from "../Component/Game/NumberContainer";
import PrimaryButton from "../Component/ui/PrimaryButton";
import Title from "../Component/ui/Title"; 
import Card from "../Component/ui/card";
import EnterScreen from "../Component/ui/EnterScreen";
import Guesslogitem from "../Component/Game/Guesslogitem";


function generateRandomNumber(max , min , exclude){
    const rndNum= Math.floor(Math.random()*(max-min))+min;

    if(rndNum===exclude){
        return generateRandomNumber(max , min , exclude)
    }else{
        return rndNum;
    }
}
let minBoundry = 1;
let maxBoundry = 100;
function GameScreen ({userNumber,onGameOver}){
    const initialGuess = generateRandomNumber(
         1
        ,100
        ,userNumber
        )
    const[currentGuess,setCurrentGuess]=useState(initialGuess)
    const[guessRound,setGuessRound]=useState([])
    const {width,height}=useWindowDimensions()

    useEffect(()=>{
        if(currentGuess===userNumber){
            onGameOver(guessRound.length);
        }
    },[currentGuess,userNumber,onGameOver]);
    useEffect(()=>{
        minBoundry=1,
        maxBoundry=100
    },[])

function nextGuessHandler(direction){
if ((direction === 'lower'&& currentGuess<userNumber) ||
    (direction === 'higher'&& currentGuess>userNumber)
){
    Alert.alert("Don't Lie ..",'You know that this is wrong...',[
        {Text:'Sorry', style:'cancel'}
    ])
}
if(direction === 'lower'){
    maxBoundry=currentGuess;
}else{
    minBoundry=currentGuess + 1;   
}
const newRndNum =generateRandomNumber(minBoundry , maxBoundry,currentGuess)
setCurrentGuess(newRndNum);
setGuessRound(prevGuessrounds => [ newRndNum,...prevGuessrounds ])
}
const guessRoundListLength = guessRound.length
let content = <>
 <NumberContainer>{currentGuess}</NumberContainer>
            {/* Guess */}
            <Card>
                <EnterScreen style={styles.EnterScreen}>Higher or Lower? </EnterScreen>
                <View style={styles.buttonContainer}>
                <View style={styles.buttonContainer1}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>
                    <Ionicons name="md-remove-circle-outline" size={28} color='#e4e009'/>
                          
                        </PrimaryButton>
                </View>
                <View style={styles.buttonContainer1}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>
                    <Ionicons name="md-add-circle-outline" size={28} color='#e4e009'/>
                          
                        </PrimaryButton>
                </View>
                </View>
               
            </Card>
    </>
    if (width > 500){
        content=<> 
         <View style={styles.moreWidth}>
        <View style={styles.buttonContainer1}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>
                    <Ionicons name="md-remove-circle-outline" size={28} color='#e4e009'/>
                          
                        </PrimaryButton>
                </View> 
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.buttonContainer1}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>
                    <Ionicons name="md-add-circle-outline" size={28} color='#e4e009'/>
                          
                        </PrimaryButton>
                </View>
        </View>
       
        </>
    }

    return(
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {content}
            {/* {guessRound.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
            {/* OR  */}
            <View style={styles.listContainer}>
            <FlatList 
            data={guessRound}
            renderItem={(itemdata)=> (<Guesslogitem 
            roundNumber={ guessRoundListLength-itemdata.index}
             guess={itemdata.item}/>)}
            keyExtractor={(item)=>item}
            />
        </View>
        </View>
    )
}
export default GameScreen;

const styles=StyleSheet.create({
    screen:{
        flex : 1,
        padding:30,
        alignItems:'center'
    },
    EnterScreen:{
        marginBottom:15
    },
    buttonContainer:{
        flexDirection:"row",
        
        
    },
    buttonContainer1:{
        flex:1,
        // fontSize:5
    },
    listContainer:{
        flex:1,
        paddingTop:12
    },
    moreWidth:{
        flexDirection:"row",
        alignItems:"center"
    }
})