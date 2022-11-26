import { StyleSheet, Text, View,Image, TouchableHighlight, ImageBackground } from 'react-native'
import React from 'react'


const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageBackground
        style={styles.image}
        source={require("../assets/images/home.jpg")}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 20,
              fontFamily: "Caveat",
            }}
          >
            Explore the best
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              marginTop: 10,
              marginBottom: 10,
              fontFamily: "space-mono",
            }}
          >
            furniture for your home.
          </Text>

          <TouchableHighlight
            style={styles.button}
            onPress={() => alert("Button pressed")}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Shop Now
            </Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Home

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",

  
     
    },
    text: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000a0',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },

})