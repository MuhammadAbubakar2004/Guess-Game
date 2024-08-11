import { View,Text,StyleSheet ,Dimensions} from "react-native";
import Color from "../../Constants/Color";

function NumberContainer ({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.textNumber}>{children}</Text>
        </View>

    )
}
export default NumberContainer;
const deviceWidth = Dimensions.get("window").width
const styles= StyleSheet.create({
container:{
borderWidth:4,
borderColor:Color.accent500,
padding:deviceWidth<380?12:25,
margin:deviceWidth<380?12:25,
borderRadius:8,
alignItems:'center',
justifyContent:'center'

},
textNumber:{
    color:Color.accent500,
    fontSize:deviceWidth<380?32:40,
    fontFamily:'open-sans-bold'
},
})
