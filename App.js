import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DemoData from './screen/DemoData';
import ListScheduleScreen from './screen/ListScheduleScreen';
import LoginScreem from './screen/LoginScreen';
import ScheduleScreen from './screen/ScheduleScreen';


export default function App() {
  return (
   <ListScheduleScreen/>
  );
}