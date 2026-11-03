import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function Reminders() {
  return (
    <View>
      <Text>Reminders</Text>
      <Pressable onPress={()=>router.back()}>back</Pressable>
    </View>
  )
}