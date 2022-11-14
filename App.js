import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  PermissionsAndroid,
  Button
} from 'react-native';
import Tuner from './screens/Tuner';
import Note from './screens/Note';
import Meter from './screens/Meter';
import MeterFunction from './screens/MeterFunction';
import GetClosestString from './screens/TunerFunction';

const data =
[{
  name: 'A',
  octave: 2,
  frequency: 110,
},
{
  name: 'E',
  octave: 2,
  frequency: 83,
},
{
  name: 'G',
  octave: 3,
  frequency: 196,
},
{
  name: 'B',
  octave: 3,
  frequency: 247,
},
{
  name: 'E',
  octave: 4,
  frequency: 330,
},
{
  name: 'B',
  octave: 3,
  frequency: 247,
},
{
  name: 'E',
  octave: 4,
  frequency: 330,
},
{
  name: 'E',
  octave: 2,
  frequency: 83,
},
{
  name: 'G',
  octave: 3,
  frequency: 196,
},
{
  name: 'B',
  octave: 3,
  frequency: 247,
},]



export default class App extends Component {
  constructor(props){
    super(props)
      this.state = {
      item: data,
      index: 0,
      note: {
        name: 'A',
        octave: 4,
        frequency: 440,
  
      }
    }
    }




  // state = {
    
    
  

  // };

 


  _update(note) {
    this.setState({ note });
  }



  async componentDidMount() {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]);
    }

    const tuner = new Tuner();
    tuner.start();

    tuner.onNoteDetected = note => {
      if (this._lastNoteName === note.name) 
      {
      // console.log('xyz',this._lastNoteName)
        if(this.state.index <= this.state.item.length &&  note.name == this.state.item[this?.state?.index]?.name  && note.octave == this.state.item[this.state.index].octave){
          console.log('you matched the note');
     
          this.setState({index:this.state.index+1 })
        }
          
        this._update(note);
      } else {
       
        this._lastNoteName = note.name;
      }
      
    };
  }

 
  render() {
    // console.log(this.state.item)
    return (
    
      <View style={style.body}>
        {/* <Text style={{fontSize:24,color: "#c62828",top:-50}}>Play : {this.state.item[this.state.index].name}{this.state.item[this.state.index].octave}</Text> */}
        
        <Text style={{fontSize:24,color: "#c62828",top:-50}}>{this.state.index > this.state.item.length-1 ? "completed" : `Play ${this.state.item[this.state.index].name}${this.state.item[this.state.index].octave}`}   </Text>
       
        <StatusBar backgroundColor="#000" translucent />

        {/* <Meter/> */}

        
        {/* <Button onPress={()=>{}}
          title="start/stop"
          /> */}
        {/* <GetClosestString/> */}
        <Meter cents={this.state.note.cents} />
        <Note {...this.state} />
        <Text style={style.frequency}>
          {this.state.note.frequency.toFixed(1)} Hz
        </Text>

      </View>
    );
  }
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frequency: {
    fontSize: 28,
    color: '#37474f',
  },
  name: {
    fontSize: 128,
    fontWeight: "600",
    color: "#c62828",
    flexDirection: "row",
  },
});

// import { SafeAreaView, StyleSheet, Text, View ,StatusBar} from 'react-native'
// import React,{useEffect,useState} from 'react'
// import MeterFunction from './screens/MeterFunction'
// import NoteFunction from './screens/NoteFunction'
// import TunerFunction from './screens/TunerFunction'
// import Tuner from './screens/Tuner'
// import Meter from "./screens/Meter";
// import Note from "./screens/Note";

// const App = () => {
//   // const [state, setState] = useState()
//    state = {
//     note: {
//       name: "A",
//       octave: 4,
//       frequency: 440,
//     },
//   };

//  const _update=(note)=> {
//     this.setState({ note });
//   };
// const _lastNoteName=()=>{

// }
//   useEffect(() => {
//     const tuner = new Tuner();
//     tuner.start();
//     tuner.onNoteDetected = (note) => {
//       console.log(note)
//       if(this._lastNoteName=== note.name){
//         _update(note);

//       }else{
//        this._lastNoteName = note.name;
//       }
//     };

//   }, [])

//   return (
//     <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>

//     <View>
//     <StatusBar backgroundColor="#000" translucent />
//     <Meter cents={this.state.note.cents} />
//     <Note {...this.state.note} />
//     <Text style={styles.frequency}>
//            {this.state.note.frequency.toFixed(1)} Hz
//         </Text>
//       {/* <TunerFunction/> */}
//     </View>
//     </SafeAreaView>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   body: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       },
//       frequency: {
//         fontSize: 28,
//         color: "#37474f",
//       },
// })

// import { StyleSheet, Text, View } from 'react-native'
// import React,{useEffect} from 'react'
// import GetClosestString from './screens/TunerFunction'
// import NewScreen from './screens/NewScreen'
// import Tuner from './screens/Tuner'

// const App = () => {

//   return (
//     <View>
//       <NewScreen/>
//   {/* <GetClosestString/> */}
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})

// import React, {useState,useEffect} from 'react';
// //  import { StatusBar } from 'react-native';

// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,

//   Text,
//   useColorScheme,
//   View,
//   Button
// } from 'react-native';

// import Tuner from './screens/Tuner';

// const App = () => {
// const handleButtonPress = () => {
//   // LocalNotification();
// }

//   return (
//     <SafeAreaView style={{flex:1}}>

//     <View style={{flex:1,justifyContent:'center',marginTop:2,alignContent:'center'}}>
//       <View  style={{marginTop:10,backgroundColor:'purple'}}>

//     </View>

//       <Tuner/>

//     </View>
//     </SafeAreaView>

//   );
// };

// export default App;
