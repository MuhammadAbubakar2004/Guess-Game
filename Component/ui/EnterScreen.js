import { Text ,StyleSheet} from "react-native";
import Color from "../../Constants/Color";
function EnterScreen({children , style}){
    return(
        <Text style={[styles.enterScreen,style]}>{children}</Text>

    )
};
export default EnterScreen;
const styles=StyleSheet.create({
    enterScreen:{
        fontFamily:'open-sans',
        color:Color.accent500,
        // fontWeight:"bold",
        fontStyle:'normal',
        fontSize:30,
        // marginBottom:16 (it works)
    }
})