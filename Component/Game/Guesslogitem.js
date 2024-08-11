import { View ,Text, StyleSheet} from "react-native";
import Color from "../../Constants/Color";

function Guesslogitem ({roundNumber,guess}){
    return(
    <View style={styles.listName}>
        <Text style={styles.TextStyle}>{roundNumber}.</Text>
        <Text style={styles.TextStyle}>Opponent's Guess : {guess}</Text>
    </View>)
}
export default Guesslogitem;

const styles = StyleSheet.create({
    listName:{
        borderColor:Color.accent800,
        borderWidth:4,
        flexDirection:"row",
        justifyContent:'space-around',
        borderRadius:40,
        backgroundColor:Color.accent700,
        padding:8,
        marginTop:8,
        width:'100%',
        shadowColor:'black',
        shadowOffset:{width:0 , height:0},
        shadowRadius:3,
        shadowOpacity:0.25,
        elevation:4
    },
    TextStyle:{
        fontFamily:'open-sans',
        fontSize:18

    }
})