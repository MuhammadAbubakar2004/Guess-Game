import { Text , StyleSheet , Platform} from "react-native";

function Title({children}){
    return(
        <Text style={styles.title}>{children}</Text>

    )
}
export default Title;
const styles = StyleSheet.create({
    title:{
        fontFamily:'open-sans-bold',
        fontSize : 24,
        // fontWeight:'bold',
        color: 'white',
        textAlign:'center',
        // borderWidth:Platform.OS === 'android' ?0:1,
        borderWidth:Platform.select({ios:0,android:3}),
        borderColor: '#edb036',
        padding:12, 
        maxWidth:'85%',
        width :300,
        marginTop:10
    },
})