import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

type props ={
    title: string
    icons: keyof typeof Ionicons.glyphMap
    onPress: ()=>void
}

export default function Profilemenuitems({title, icons, onPress}: props) {
  return (
    <Pressable
    onPress={onPress}
    className='mb-1 flex-row items-center border-b  border-[#EAF3EF] py-4'>
          <Ionicons name={icons} size={19} color="#315E55" />
          <Text className='"ml-3 flex-1 text-xs font-medium text-[#315E55]'>
            {title}
          </Text>
          <Ionicons name='chevron-forward' size={17}  color="#78968C"/>
    </Pressable>
  )
}