import { View, Text, ScrollView } from 'react-native'
import React, { type ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
type props ={
    title: string,
    description: string,
    illustration: ReactNode,
    children: ReactNode
}

export default function OnboardingLayout({title, description, illustration,children}:props) {
  return (
    <SafeAreaView className='flex-1 bg-[#E8F8F1]'>
      <ScrollView 
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        padding: 16,
      }}
      >
        <View className='flex-1 rounded-3xl  bg-white px-5 py-8'>
            <View className='min-h-80 items-center justify-center'>
                {illustration}

            </View>
            <View className='mt-5 text-xl font-bold text-[#124A43]'>
                {title}

            </View>
            <View className='mt-3 text-sm leading-6 text-[#52776E]'>
             {description}
            </View>
            <View className='mt-auto pt-8'>
                 {children}
            </View>

        </View>

      </ScrollView>

    </SafeAreaView>
  )
}