import { View, Text } from 'react-native'
import React from 'react'
import type { Medicine } from '../../data/Medicine'
import { Ionicons } from '@expo/vector-icons'


type props ={
    medicine: Medicine
}

export default function Medicinecard({medicine}:props) {
  return (
    <View className='mb-3 flex-row rounded-2xl items-center border border-[#DCEFE7] bg-white p-3'>
        {/* medicineicons */}
        <View className='h-11 w-11 rounded-full items-center justify-center'
         style={{backgroundColor: `${medicine.color}18`}} 
         >
            <Ionicons
            name='medical'
            size={17}
            color={medicine.color}
            />

        </View>
        {/* medicine information */}
        <View className='ml-3 flex-1'>
            <Text className='text-xs font-bold text-[#124A43]'>
                {medicine.name} {medicine.dose}
            </Text>
             <Text className='mt-1 text-[9px] text-[#78968C]'>
                {medicine.instruction}
            </Text>
            <View className='mt-1 flex-row flex-wrap'>
                {medicine.reminderTimes.map((time, index)=>(
                    <View key={index} className='flex-row items-center'>
                       {index > 0 && (
                        <Text className='mx-1 text-[#78968C]'>.</Text>
                       )}
                        <Text className='text-[9px] text-[#78968C]'>{time}</Text>

                    </View> 

                ))}

            </View>
           
        </View>
        <Ionicons
        name='notifications-outline'
        size={17}
        color="#07896F"
        />
    </View>
  )
}
      