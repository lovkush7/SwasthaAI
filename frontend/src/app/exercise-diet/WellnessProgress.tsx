import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
type props ={
    completed: number
    total: number
    water: number
    waterGoal: number
}

export default function WellnessProgress({completed, total, water, waterGoal}:props) {
    const percentage = total > 0 ? completed / total : 0;
  return (
    <View className='flex-row gap-3'>
        <View className='flex-1 flex-row items-center rounded-2xl border border-[#DCEFE7] bg-white p-3'>
            <View className='h-14 w-14 items-center justify-center rounded-full border-[4px] border-[#07896F]'>
                <Text className='text-sm font-bold text-[#124A43]'>
                  {completed}/{total}
                </Text>
                <Text className='text-[8px] text-[#78968C]'>Done</Text>

            </View>
            <View className='ml-2 flex-1'>
                 <Text className='text-xs font-bold text-[#124A43]'>
                    Wellness
                 </Text>
                 <Text className='mt-1 mt-[9px] text-[#78968C]'>
                    {Math.round(percentage * 100)}% completed
                 </Text>
            </View>

        </View>

      <View className="flex-1 flex-row items-center rounded-2xl border border-[#DCEFE7] bg-white p-3">
        <View className="h-10 w-10 items-center justify-center rounded-full bg-[#E5F5FF]">
          <Ionicons name="water-outline" size={23} color="#2696CF" />
        </View>

        <View className="ml-2 flex-1">
          <Text className="text-xs font-bold text-[#124A43]">
            Water
          </Text>
          <Text className="mt-1 text-[10px] text-[#78968C]">
            {water}/{waterGoal} glasses
          </Text>
        </View>
      </View>
    </View>
  )
}