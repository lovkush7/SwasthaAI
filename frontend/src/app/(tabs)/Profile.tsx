import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function Profile() {
  return (
    <View>
      <Text>Profile</Text>
      <Pressable onPress={()=>router.back()}>backe</Pressable>
    </View>
  )
}