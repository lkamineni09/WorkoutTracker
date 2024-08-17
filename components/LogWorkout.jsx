import React, { useState, useEffect } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const WorkoutLog = () => {
  const [workoutType, setWorkoutType] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const navigation = useNavigation(); // Access the navigation object

  useEffect(() => {
    let interval;
    if (timerActive) {
      interval = setInterval(() => {
        setElapsedTime(Math.floor((new Date() - startTime) / 1000));
      }, 1000);
    } else if (!timerActive && elapsedTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerActive, startTime]);

  const startWorkout = () => {
    setStartTime(new Date());
    setElapsedTime(0);
    setTimerActive(true);
  };

  const endWorkout = () => {
    setTimerActive(false);
  };

  const logWorkout = () => {
    navigation.navigate("MainPage");
  };

  const formatElapsedTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Workout Logger</Text>
        <Button title="Log Workout" onPress={logWorkout} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.workoutButton,
            workoutType === "Cardio" && styles.selectedButton,
          ]}
          onPress={() => setWorkoutType("Cardio")}
        >
          <Text style={styles.buttonText}>Cardio</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.workoutButton,
            workoutType === "Push" && styles.selectedButton,
          ]}
          onPress={() => setWorkoutType("Push")}
        >
          <Text style={styles.buttonText}>Push</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.workoutButton,
            workoutType === "Pull" && styles.selectedButton,
          ]}
          onPress={() => setWorkoutType("Pull")}
        >
          <Text style={styles.buttonText}>Pull</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.timerContainer}>
        <Button
          title={timerActive ? "End Workout" : "Start Workout"}
          onPress={timerActive ? endWorkout : startWorkout}
          color="#841584"
        />
        <Text style={styles.timerText}>
          Elapsed Time: {formatElapsedTime(elapsedTime)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 20,
  },
  workoutButton: {
    flex: 1,
    backgroundColor: "#ddd",
    padding: 15,
    marginHorizontal: 5,
    alignItems: "center",
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: "#841584",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  timerContainer: {
    alignItems: "center",
  },
  timerText: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default WorkoutLog;
