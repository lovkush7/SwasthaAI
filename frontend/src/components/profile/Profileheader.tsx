import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
type props ={
    name: string,
    email: string

}

export default function Profileheader({name, email}:props) {
  return (
    <View className='mb-5 flex-row items-center rounded-2xl bg-white p-4'>
      <View className='h-14 w-14 items-center rounded-full  bg-[#DDF5EC] justify-center'>
           <Ionicons name='person' size={32} color="#07896F"/>
      </View>
      <View className='ml-3 flex-1'>
        <Text className='text-sm font-bold text-[#124A43]'>
            {name}
        </Text>
        <Text className='mt-1 text-xs text-[#78968C]'>
           {email}
        </Text>

      </View>
    </View>
  )
}
