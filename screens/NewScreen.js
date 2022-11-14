import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, startTransition} from 'react';
import PitchFinder from 'pitchfinder';
import MicStream from 'react-native-microphone-stream';
import Tuner from './Tuner';




const NewScreen = () => {
  middleA = 440;
  semitone = 69;
  noteStrings = [
    'C',
    'C♯',
    'D',
    'D♯',
    'E',
    'F',
    'F♯',
    'G',
    'G♯',
    'A',
    'A♯',
    'B',
  ];






  const [sampleRate, setSampleRate] = useState(22050);
  const [bufferSize, setBufferSize] = useState(2048);

  const pitchFinder = new PitchFinder.YIN({sampleRate});








  useEffect(() => {
    MicStream.init({
      sampleRate,
      bufferSize,
    });

    MicStream.start();
    MicStream.addListener((data) => {
      const frequency = pitchFinder(data);
      // console.log('frequency is coming', frequency );

      
      if (frequency && this.onNoteDetected) {
        const note = this.getNote(frequency);
        this.onNoteDetected({
          name: this.noteStrings[note % 12],
          value: note,
          cents: this.getCents(frequency, note),
          octave: parseInt(note / 12) - 1,
          frequency: frequency,
        });
        // console.log(data)
      }






      // if (frequency && this.onNoteDetected) {
      //   const note = this.getNote(frequency);
      //   this.onNoteDetected({
      //     name: this.noteStrings[note % 12],
      //     value: note,
      //     cents: this.getCents(frequency, note),
      //     octave: parseInt(note / 12) - 1,
      //     frequency: frequency,
      //   });
       
      // }
    });
  }, [setSampleRate,setBufferSize]);
// console.log(setSampleRate)
  return (
    <View>
      
    </View>
  );
};

export default NewScreen;

const styles = StyleSheet.create({});
