import React, { Component } from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {
    render() {
        return (       
         <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
            
                    <View style={styles.titleBar}>
               
                        <Text style={styles.titleText}>Stellar</Text> 
                            <Image source={require('../assets/main-icon.png')}
                           style={{width:150,height:150}}/>
                    </View>
                    <TouchableOpacity style={styles.routeCard} 
                       onPress={()=>this.props.navigation.navigate('SpaceCraft')}>
                        <Text style={styles.routeText}>Spacecraft</Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}>1</Text>
                        <Image source={require('../assets/space_crafts.png')} style={styles.routeImage}/>
                    </TouchableOpacity>



                    <TouchableOpacity style={styles.routeCard} onPress={
                       ()=>this.props.navigation.navigate('StarMap')
                    }>
                        <Text style={styles.routeText}>Star Map</Text>
                        <Text style={styles.bgDigit}>2</Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Image source={require('../assets/star_map.png')} style={styles.routeImage}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={
                       ()=>this.props.navigation.navigate('DailyPic')
                    }>
                        <Text style={styles.routeText}>Daily Pictures</Text>
                        <Text style={styles.bgDigit}>3</Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Image source={require('../assets/daily_pictures.png')} style={styles.routeImage}/>
                    </TouchableOpacity>
            
            </View> 
           </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:"100%"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center",
        flexDirection:'row'
    },
    titleText: {
        fontSize: 60,
        fontWeight: "bold",
        color: "white"
    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        width:1000,
        backgroundColor: 'white'
    },

    routeText:{
      fontSize:35,
      fontWeight: "bold",
      color : 'black',
      marginTop : 75,
      paddingLeft:30
    },
    backgroundImage:{
      flex:1,
      resizeMode:"cover"
    },
    routeImage:{
      position: 'absolute',
      top: -20,
      right: -15,
      height:80,
      width:80,
      resizeMode:'contain'
    },
     bgDigit:{
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    }
});
