import { View, Text, Image } from 'react-native'
import React from 'react'
import OnboardingLayout from '../../../components/onboarding/OnboardingLayout'
import AppButton from '../../../components/ui/AppButton'
import { router } from 'expo-router'

export default function Chatbot() {
    return (
        <OnboardingLayout
            title='Health AI Chatbot'
            description='Ask health question,  get reliable information and personlized advice from AI assistent'
            illustration={
                <Image
                    source={require("@/assets/Myimg/ai.png")}
                    className='w-48 h-48'
                    resizeMode='contain'
                />
            }
        >
            <View className="mb-6 flex-row justify-center gap-2">
                <View className="h-2 w-2 rounded-full bg-[#B8E6D5]" />
                <View className="h-2 w-2 rounded-full bg-[#B8E6D5]" />
                <View className="h-2 w-2 rounded-full bg-[#B8E6D5]" />
                <View className="h-2 w-2 rounded-full bg-[#07896F]" />
            </View>

            <AppButton
                title='Login'
                onPress={() => router.push('/(auth)/login')}
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