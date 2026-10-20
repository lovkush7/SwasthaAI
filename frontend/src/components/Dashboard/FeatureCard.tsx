import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
type props ={
    title: string
    subtitle: string
    icon: keyof typeof Ionicons.glyphMap
    onPress: ()=> void
}

export default function FeatureCard({title, subtitle, icon, onPress}: props) {
  return (
       <Pressable
      onPress={onPress}
      className="min-h-[100px] flex-1 rounded-2xl border border-[#DCEFE7] bg-white p-3 active:bg-[#F0FBF6]"
    >
      <Ionicons name={icon} size={23} color="#07896F" />

      <Text className="mt-3 text-xs font-bold text-[#124A43]">
        {title}
      </Text>

      <Text className="mt-1 text-[10px] leading-4 text-[#78968C]">
        {subtitle}
      </Text>
    </Pressable>
  )
}