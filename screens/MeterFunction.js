import { StyleSheet, Text, View,Animated, SafeAreaView } from 'react-native'
import React,{useState,useEffect} from 'react'

const MeterFunction = (props) => {
    const [cents] = useState(new Animated.Value(0));
    useEffect(()=>{
        Animated.timing(cents, {
            toValue: props.cents,
            duration: 500,
            useNativeDriver: true,
        }).start() 
    }, [])

    const cents1 = cents.interpolate({
        inputRange: [-50, 50],
        outputRange: ["-45deg", "45deg"],
    });

    const pointerStyle = {
        transform:
         [{ rotate: cents1 }], 
};




  return (
    <SafeAreaView style={{justifyContent:'center',alignItems:'center'}}>
    <View style={styles.meter}>
    <View style={styles.origin} />
    <Animated.View
      style={[styles.scale, styles.strong, styles.pointer, pointerStyle]}
    />
    <View style={[styles.scale, styles.scale_5, styles.strong]} />
    <View style={[styles.scale, styles.scale_4]} />
    <View style={[styles.scale, styles.scale_3]} />
    <View style={[styles.scale, styles.scale_2]} />
    <View style={[styles.scale, styles.scale_1]} />
    <View style={[styles.scale, styles.strong]} />
    <View style={[styles.scale, styles.scale1]} />
    <View style={[styles.scale, styles.scale2]} />
    <View style={[styles.scale, styles.scale3]} />
    <View style={[styles.scale, styles.scale4]} />
    <View style={[styles.scale, styles.scale5, styles.strong]} />
  </View>
  </SafeAreaView>
  )
}

export default MeterFunction

const styles = StyleSheet.create({
    meter: {
        height: 200,
        marginBottom: 40,
      },
      origin: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: "#37474f",
      },
      pointer: {
        borderTopWidth: 195,
      },
      scale: {
        position: "absolute",
        left: 0,
        right: 0,
        width: 1,
        height: 400,
        borderTopWidth: 10,
        borderTopColor: "#37474f",
        marginLeft: 4.5,
      },
      strong: {
        width: 2,
        borderTopWidth: 20,
      },
      scale_1: {
        transform: [{ rotate: "-9deg" }],
      },
      scale_2: {
        transform: [{ rotate: "-18deg" }],
      },
      scale_3: {
        transform: [{ rotate: "-27deg" }],
      },
      scale_4: {
        transform: [{ rotate: "-36deg" }],
      },
      scale_5: {
        transform: [{ rotate: "-45deg" }],
      },
      scale1: {
        transform: [{ rotate: "9deg" }],
      },
      scale2: {
        transform: [{ rotate: "18deg" }],
      },
      scale3: {
        transform: [{ rotate: "27deg" }],
      },
      scale4: {
        transform: [{ rotate: "36deg" }],
      },
      scale5: {
        transform: [{ rotate: "45deg" }],
      },



})