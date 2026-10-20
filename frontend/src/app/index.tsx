import { Redirect } from 'expo-router'
import { View, Text } from 'react-native'

export default function index() {
  return (
    <Redirect href="/(auth)/welcome"/>
    )
}