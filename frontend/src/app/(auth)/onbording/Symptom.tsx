import { View, Text, Image } from 'react-native'
import React from 'react'
import OnboardingLayout from '../../../components/onboarding/OnboardingLayout'
import AppButton from '../../../components/ui/AppButton'
import { router } from 'expo-router'


export default function Symptom() {
  return (
      <OnboardingLayout
       title="AI Symptom Checker"
      description="Describe your symptoms and get AI-powered insights about possible conditions (educational purpose only)."
      illustration={
        <Image
        source={require("@/assets/Myimg/symptom.png")}
        className='h-48 w-48'
        resizeMode='contain'
        />
      }
      >
          <View className="mb-6 flex-row justify-center gap-2">
        <View className="h-2 w-2 rounded-full bg-[#07896F]" />
        <View className="h-2 w-2 rounded-full bg-[#B8E6D5]" />
        <View className="h-2 w-2 rounded-full bg-[#B8E6D5]" />
        <View className="h-2 w-2 rounded-full bg-[#B8E6D5]" />
      </View>

     <AppButton 
      title = 'Next'
       onPress = {()=>router.push("/(auth)/onbording/Exercise-diet")}
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