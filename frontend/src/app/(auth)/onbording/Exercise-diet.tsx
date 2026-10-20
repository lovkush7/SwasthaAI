import { View, Text, Image } from 'react-native'
import React from 'react'
import OnboardingLayout from '../../../components/onboarding/OnboardingLayout'
import { router } from 'expo-router'
import AppButton from '../../../components/ui/AppButton'

export default function Exercisediet() {
  return (
    <OnboardingLayout 
    title='Personilized Exercise & Diet'
    description='Get customized Workout plans and healthy meals suggestation based on your profile and goals'
    illustration={
        <Image 
        source={require("@/assets/Myimg/exercise.png")}
        className='w-48 h-48'
        resizeMode='contain'
        />
    }
    >
            <View className="mb-6 flex-row justify-center gap-2">
                <View className="h-2 w-2 rounded-full bg-[#B8E6D5]" />
                <View className="h-2 w-2 rounded-full bg-[#07896F]" />
                <View className="h-2 w-2 rounded-full bg-[#B8E6D5]" />
                <View className="h-2 w-2 rounded-full bg-[#B8E6D5]" />
              </View>
              <AppButton
               title='Next'
                onPress={()=>router.push("/(auth)/onbording/Medicine")}
               />

                   <Text
                                 onPress={() => router.push("/(auth)/Signup")}
                                 className="mt-4 text-center text-xs text-[#52776E]"
                               >
                                 Skip
                               </Text>

    </OnboardingLayout>
  )
}