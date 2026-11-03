
import {
  View,
  Text,
  Pressable,
  Alert,
  ScrollView,
  Image,
  useWindowDimensions,
  StatusBar,
} from "react-native";

import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { exercise } from "./Exercise";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function Exercisetabs() {
  const { exercise: exerciseId } =
    useLocalSearchParams<{ exercise: string }>();

  const { width } = useWindowDimensions();

  const [started, setStarted] = useState(false);

  const exercises = exercise.find(
    (item) => item.id === exerciseId
  );

  // Responsive image height
  const imageHeight = Math.min(width * 0.48, 340);

  if (!exercises) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-[#E8F8F1]">
        <Text className="text-[#124A43]">
          Exercise not found
        </Text>

        <Pressable onPress={() => router.push({
            pathname: "/exercise-diet"
        })}>
          <Text className="mt-3 font-bold text-[#07896F]">
            Go back
          </Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  function startActivity() {
    setStarted(true);

    Alert.alert(
      "Activity started",
      `${exercises?.title} activity started!`
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#E8F8F1]">
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#E8F8F1"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 14,
          paddingBottom: 30,
          flexGrow: 1,
          alignItems: "stretch",
        }}
      >
        {/* Header */}
        <View className="mb-4 flex-row items-center">
          <Pressable
            onPress={() => router.push({
                pathname: "/exercise-diet"
            })}
            hitSlop={10}
          >
            <Ionicons
              name="chevron-back"
              size={23}
              color="#124A43"
            />
          </Pressable>

          <Text className="ml-3 text-base font-bold text-[#124A43]">
            Exercise Details
          </Text>
        </View>

        {/* Exercise Image */}
        <Image
          source={exercises.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: imageHeight,
            borderRadius: 16,
            alignSelf: "center",
          }}
        />

        {/* Exercise Title */}
        <Text className="mt-4 text-lg font-bold text-[#124A43]">
          {exercises.title}
        </Text>

        {/* Description */}
        <Text className="mt-1 text-xs leading-5 text-[#78968C]">
          {exercises.description}
        </Text>

        {/* Exercise Information */}
        <View className="mt-4 flex-row flex-wrap items-center gap-x-5 gap-y-3">
          <View className="flex-row items-center">
            <Ionicons
              name="time-outline"
              size={17}
              color="#07896F"
            />

            <Text className="ml-1 text-xs font-semibold text-[#52776E]">
              {exercises.duration}
            </Text>
          </View>

          <View className="flex-row items-center">
            <Ionicons
              name="speedometer-outline"
              size={17}
              color="#07896F"
            />

            <Text className="ml-1 text-xs font-semibold text-[#52776E]">
              {exercises.difficulty}
            </Text>
          </View>

          <View className="flex-row items-center">
            <Ionicons
              name="heart-outline"
              size={17}
              color="#07896F"
            />

            <Text className="ml-1 text-xs font-semibold text-[#52776E]">
              {exercises.type}
            </Text>
          </View>
        </View>

        {/* Instructions */}
        <Text className="mb-3 mt-6 text-sm font-bold text-[#124A43]">
          Instructions
        </Text>

        {exercises.instructions.map((instruction, index) => (
          <View
            key={index}
            className="mb-4 flex-row"
          >
            <Text className="mr-2 text-xs font-bold text-[#07896F]">
              {index + 1}
            </Text>

            <Text className="flex-1 text-xs leading-5 text-[#52776E]">
              {instruction}
            </Text>
          </View>
        ))}

        {/* Safety Tips */}
        <View className="mt-5 rounded-2xl bg-[#E2F6ED] p-4">
          <View className="flex-row items-center">
            <Ionicons
              name="shield-checkmark"
              size={20}
              color="#07896F"
            />

            <Text className="ml-2 text-sm font-bold text-[#124A43]">
              Safety Tips
            </Text>
          </View>

          {exercises.safetyTips.map((tip, index) => (
            <View
              key={index}
              className="mt-2 flex-row"
            >
              <Text className="mr-2 text-[#07896F]">
                •
              </Text>

              <Text className="flex-1 text-xs leading-5 text-[#52776E]">
                {tip}
              </Text>
            </View>
          ))}

          {/* Start Activity Button */}
          <Pressable
            onPress={startActivity}
            className="mt-6 h-12 flex-row items-center justify-center rounded-xl bg-[#07896F]"
          >
            <Ionicons
              name={
                started
                  ? "checkmark-circle"
                  : "play-circle-outline"
              }
              size={19}
              color="white"
            />

            <Text className="ml-2 text-sm font-bold text-white">
              {started ? "Activity Started" : "Start Activity"}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
