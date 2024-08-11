import { View } from "react-native";
import { StyleSheet , Dimensions} from "react-native";
import Color from "../../Constants/Color";
function Card({children}){
    return(
        <View style={styles.card} >{children}</View>

    )
};
export default Card;
const deviceWidth = Dimensions.get("window").height
const styles = StyleSheet.create({
    card:{
        // textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:deviceWidth<380 ? 18 : 40,
        // flex:1,
        marginHorizontal:20,
        padding:12,
        backgroundColor:Color.primary700,
        elevation:30,
        borderRadius:8,
        shadowColor:'black',
        shadowOffset:{width :0, height:2},
        shadowRadius : 6,
        shadowOpacity:1
        
    },
})