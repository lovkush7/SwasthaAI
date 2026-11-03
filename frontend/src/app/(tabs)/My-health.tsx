import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function Myhealth() {
  return (
    <View>
     <Pressable onPress={()=>router.back()}>back</Pressable>
    </View>
  )
}