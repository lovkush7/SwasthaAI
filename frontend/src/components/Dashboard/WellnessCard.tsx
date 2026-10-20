import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
type props = {
    completed: number
     total: number
     onPress: ()=>void

}

export default function WellnessCard({completed, total, onPress}:props) {
      const progress = total > 0 ? Math.min(completed / total, 1) : 0;
  return (
   <Pressable 
   onPress={onPress}
   className='rounded-2xl border border-[#E0F1E9] bg-[#EFFAF5] p-3'
   >
    <View className='flex-row items-center'>
        <View className='mr-3 h-9 w-9 items-center justify-center items-center rounded-full bg-[#D6F1E5]' >
            <Ionicons name='checkmark-circle' size={24}  color="#07896F"/>


        </View>
            <View className="flex-1">
          <Text className="text-sm font-bold text-[#124A43]">
            Today's Wellness
          </Text>
          <Text className="mt-1 text-xs text-[#52776E]">
            You're doing great!
          </Text>
          <Text className="mt-1 text-[10px] text-[#52776E]">
            {completed}/{total} tasks completed
          </Text>
        </View>
         <Ionicons name="chevron-forward" size={19} color="#124A43" />

    </View>
          <View className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#CDEADF]">
        <View
          className="h-full rounded-full bg-[#07896F]"
          style={{ width: `${progress * 100}%` }}
        />
      </View>

   </Pressable>
  )
}