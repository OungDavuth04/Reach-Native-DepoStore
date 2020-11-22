import { StyleSheet ,Dimensions,} from 'react-native';
const windowWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    featureProduct:{
        backgroundColor:'white',
        shadowColor: "#900",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 5,
        paddingBottom:40
    },
    featureProductImage:{
        width:160, 
        height:'100%',
        borderTopLeftRadius:9,
        borderTopRightRadius:9,
        backgroundColor:'white',
        shadowColor: "#900",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 5,
        paddingBottom:40,
    },
    flatList:{
        padding:0,
        marginVertical: 3,
        marginHorizontal: 2,    
    },
    flatItem:{
    
        display:'flex',
        flexDirection:'row',
        height: 160,
        marginBottom:8,
        backgroundColor:'white',
        shadowColor: "#900",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 5,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        paddingHorizontal:10,
        paddingVertical:10
    },
    productHeader:{
        backgroundColor:'#900',
        height:50,
        width:'100%',
        position:'relative',
        display:'flex',
        flexDirection:'row'

    },
    productHeaderChild:{
        width:'20%',
        left:19,
        paddingTop:10
    },
    item: {
        flex: 1,
        height: 160,
        margin: 1,
        backgroundColor:'white',
        paddingTop:50,
    },
    list:{
        flex: 1,
        top:400,
        padding: 10,
    },
    GrideMenu:{
        position:'absolute',
        flexDirection:'row',
        display:'flex',
        width:'100%',
    },
    TopMenu:{
        position:'absolute',
        flexDirection:'row',
        justifyContent: 'space-between',
        padding:15,
        display:'flex',
        width:'100%'
    },
    card:{
        padding: 55,
        top:170,
        height: 200,
        width:'48%',
        backgroundColor:'white',
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowRadius: 26.00,
        elevation: 8,
        
    },
    container:{
        justifyContent:'center',
        height: '100%',
        position: 'relative',
        zIndex:2
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 45,
        color: 'white',
        position:'absolute',
        marginTop:50,
        marginLeft:20
    },
    triangleCorner: {
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth:windowWidth,
        borderTopWidth: 100,
        borderRightColor: 'transparent',
        borderTopColor: '#900',
        zIndex: 1
    },
    header:{
        height: 240,
        backgroundColor: '#900',
    },
    
});

