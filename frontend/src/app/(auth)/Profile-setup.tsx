
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Profilesetup() {
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("cm");
  const [weight, setWeight] = useState("kg");
  const [activity, setActivity] = useState("");
  const [diet, setDiet] = useState("");

  function chooseOption(
    title: string,
    options: string[],
    onSelect: (value: string) => void
  ) {
    Alert.alert(title, "Select an option", [
      ...options.map((option) => ({
        text: option,
        onPress: () => onSelect(option),
      })),
      { text: "Cancel", style: "cancel" as const },
    ]);
  }

  function handleNext() {
    if (!dob.trim() || !gender || !activity || !diet) {
      Alert.alert(
        "Complete your profile",
        "Please fill in your date of birth, gender, activity level and dietary preference."
      );
      return;
    }

    router.replace("/(tabs)")
  }

  return (
    <SafeAreaView className="flex-1 bg-[#E8F8F1]">
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#E8F8F1"
      />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 16,
          paddingVertical: 8,
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Back button */}
        <Pressable
          onPress={() => router.back()}
          className="mb-2 h-8 w-8 items-center justify-center"
        >
          <Ionicons
            name="chevron-back"
            size={22}
            color="#124A43"
          />
        </Pressable>

        {/* Main profile card */}
        <View className="flex-1 rounded-3xl bg-white/80 px-4 py-4">
          {/* Profile heading */}
          <View className="mb-2 items-center">
            <View className="h-[66px] w-[66px] items-center justify-center rounded-full bg-[#DDF5EC]">
              <Ionicons
                name="person"
                size={38}
                color="#07896F"
              />
            </View>

            <Text className="mt-2 text-base font-bold text-[#124A43]">
              Profile Setup
            </Text>

            <Text className="mt-1 text-xs text-[#78968C]">
              Add your information
            </Text>
          </View>

          {/* Date of Birth */}
          <Text className="mb-1.5 mt-2 text-xs font-medium text-[#315E55]">
            Date of Birth
          </Text>

          <TextInput
            value={dob}
            onChangeText={setDob}
            placeholder="DD / MM / YYYY"
            placeholderTextColor="#9BAFA9"
            className="h-10 rounded-lg border border-[#DCEBE5] bg-white px-3 text-xs text-[#124A43]"
          />

          {/* Gender */}
          <Text className="mb-1.5 mt-2.5 text-xs font-medium text-[#315E55]">
            Gender
          </Text>

          <Pressable
            onPress={() =>
              chooseOption(
                "Gender",
                ["Female", "Male", "Non-binary", "Prefer not to say"],
                setGender
              )
            }
            className="h-10 flex-row items-center justify-between rounded-lg border border-[#DCEBE5] bg-white px-3"
          >
            <Text
              className={`text-xs ${
                gender ? "text-[#124A43]" : "text-[#9BAFA9]"
              }`}
            >
              {gender || "Select gender"}
            </Text>

            <Ionicons
              name="chevron-down"
              size={15}
              color="#78968C"
            />
          </Pressable>

          {/* Height and Weight */}
          <View className="mt-2.5 flex-row gap-3">
            {/* Height */}
            <View className="flex-1">
              <Text className="mb-1.5 text-xs font-medium text-[#315E55]">
                Height
              </Text>

              <Pressable
                onPress={() =>
                  chooseOption(
                    "Height unit",
                    ["cm", "ft / in"],
                    setHeight
                  )
                }
                className="h-10 flex-row items-center justify-between rounded-lg border border-[#DCEBE5] bg-white px-3"
              >
                <Text className="text-xs text-[#315E55]">
                  {height}
                </Text>

                <Ionicons
                  name="chevron-down"
                  size={15}
                  color="#78968C"
                />
              </Pressable>
            </View>

            {/* Weight */}
            <View className="flex-1">
              <Text className="mb-1.5 text-xs font-medium text-[#315E55]">
                Weight
              </Text>

              <Pressable
                onPress={() =>
                  chooseOption(
                    "Weight unit",
                    ["kg", "lb"],
                    setWeight
                  )
                }
                className="h-10 flex-row items-center justify-between rounded-lg border border-[#DCEBE5] bg-white px-3"
              >
                <Text className="text-xs text-[#315E55]">
                  {weight}
                </Text>

                <Ionicons
                  name="chevron-down"
                  size={15}
                  color="#78968C"
                />
              </Pressable>
            </View>
          </View>

          {/* Activity Level */}
          <Text className="mb-1.5 mt-2.5 text-xs font-medium text-[#315E55]">
            Activity Level
          </Text>

          <Pressable
            onPress={() =>
              chooseOption(
                "Activity Level",
                [
                  "Sedentary",
                  "Lightly active",
                  "Moderately active",
                  "Very active",
                ],
                setActivity
              )
            }
            className="h-10 flex-row items-center justify-between rounded-lg border border-[#DCEBE5] bg-white px-3"
          >
            <Text
              className={`text-xs ${
                activity ? "text-[#124A43]" : "text-[#9BAFA9]"
              }`}
            >
              {activity || "Select activity level"}
            </Text>

            <Ionicons
              name="chevron-down"
              size={15}
              color="#78968C"
            />
          </Pressable>

          {/* Dietary Preference */}
          <Text className="mb-1.5 mt-2.5 text-xs font-medium text-[#315E55]">
            Dietary Preference
          </Text>

          <Pressable
            onPress={() =>
              chooseOption(
                "Dietary Preference",
                [
                  "No preference",
                  "Vegetarian",
                  "Vegan",
                  "Non-vegetarian",
                ],
                setDiet
              )
            }
            className="h-10 flex-row items-center justify-between rounded-lg border border-[#DCEBE5] bg-white px-3"
          >
            <Text
              className={`text-xs ${
                diet ? "text-[#124A43]" : "text-[#9BAFA9]"
              }`}
            >
              {diet || "Select preference"}
            </Text>

            <Ionicons
              name="chevron-down"
              size={15}
              color="#78968C"
            />
          </Pressable>

          {/* Next Button */}
          <Pressable
            onPress={handleNext}
            className="mt-3 h-11 items-center justify-center rounded-xl bg-[#07896F] active:opacity-80"
          >
            <Text className="text-sm font-bold text-white">
              Next
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
