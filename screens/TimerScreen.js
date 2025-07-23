import React, { useState, useEffect, useRef } from 'react';
import { ImageBackground, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function TimerScreen() {
  const [seconds, setSeconds] = useState(1800); 
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const toggleTimer = () => {
    setIsRunning(prev => !prev);
  };

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const secsLeft = secs % 60;
    return `${String(mins).padStart(2, '0')}:${String(secsLeft).padStart(2, '0')}`;
  };

  const resetTimer = () => {
    setSeconds(1800);
    setIsRunning(false);
  };

  const finishTimer = () => {
  };

  return (
    <ImageBackground
      source={require('./assets/fon.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.circle}>
          <Text style={styles.time}>{formatTime(seconds)}</Text>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.smallButton} onPress={toggleTimer}>
            <Text style={styles.smallButtonText}>{isRunning ? 'Stop' : 'Start'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.smallButton} onPress={resetTimer}>
            <Text style={styles.smallButtonText}>Reset</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.finishButton} onPress={finishTimer}>
          <Text style={styles.finishButtonText}>Finish</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
  },
  circle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#6B4F2B',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  time: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 30,
  },
  smallButton: {
    backgroundColor: '#F4E2B8', 
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
    marginHorizontal: 10,
  },
  smallButtonText: {
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
  },
  finishButton: {
    backgroundColor: '#FEC84D', 
    paddingHorizontal: 60,
    paddingVertical: 25,
    borderRadius: 35
  },
  finishButtonText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
});
