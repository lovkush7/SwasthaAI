import { View, Text, StatusBar, ScrollView,  } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context"
import AppButton from '../../components/ui/AppButton'
import { router } from 'expo-router'
export default function welcome() {
  return (
    <SafeAreaView className='flex-1 bg-[#E8F8F1]'>
        <StatusBar barStyle="dark-content" 
        backgroundColor="#E8F8F1"/>
       <ScrollView
  contentContainerStyle={{
    flexGrow: 1,
    justifyContent: "center",
    padding: 16,
  }}
  showsVerticalScrollIndicator={false}
>
  {/* Main white card */}
  <View className="w-full items-center rounded-[28px] bg-white px-5 pb-6 pt-8 shadow-sm">

    {/* Logo */}
    <View className="mb-3 h-16 w-16 items-center justify-center rounded-full bg-[#DDF5EC]">
      <Ionicons name="heart" size={43} color="#07896F" />

      <View className="absolute">
        <Ionicons name="leaf" size={20} color="white" />
      </View>
    </View>

    {/* Title */}
    <Text className="text-2xl font-extrabold tracking-tight text-[#124A43]">
      SwasthaAI
    </Text>

    {/* Subtitle */}
    <Text className="mt-2 text-center text-xs text-[#52776E]">
      Your personal wellness companion.
    </Text>

    {/* Illustration */}
    <View className="relative my-5 h-52 w-full items-center justify-center overflow-hidden rounded-3xl bg-[#F0FBF6]">
      <View className="absolute bottom-5 left-3">
        <Ionicons name="leaf" size={54} color="#8BD5B8" />
      </View>

      <View className="absolute bottom-8 right-3">
        <Ionicons name="leaf" size={48} color="#63C5A0" />
      </View>

      <View className="absolute right-4 top-5 h-11 w-11 items-center justify-center rounded-full bg-[#DDF5EC]">
        <Ionicons name="heart" size={28} color="#07896F" />
      </View>

      <View className="h-36 w-36 items-center justify-center rounded-full bg-[#DDF5EC]">
        <Text className="text-8xl">👩🏻‍⚕️</Text>
      </View>

      <View className="absolute bottom-2 left-0 right-0 items-center">
        <View className="rounded-full bg-white/90 px-4 py-1">
          <Text className="text-[10px] font-semibold text-[#07896F]">
            Your health, our priority
          </Text>
        </View>
      </View>
    </View>

    {/* Description */}
    <Text className="px-2 text-center text-xs leading-5 text-[#52776E]">
      Take care of your health with AI-powered insights and personalized wellness guidance.
    </Text>

    {/* Button */}
    <View className="mt-6 w-full">
      <AppButton
        title="Get Started"
        onPress={() => router.push("/(auth)/onbording/Symptom")}
      />
    </View>

  </View>
</ScrollView>
    </SafeAreaView>
  )
}