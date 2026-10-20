
import { useState } from "react";
import { router } from "expo-router";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const green = "#07896F";

export default function ProfileSetupScreen() {
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

    router.replace("/(tabs)");
  }

  return (
    <SafeAreaView className="flex-1 bg-[#E8F8F1]">
      <StatusBar barStyle="dark-content" backgroundColor="#E8F8F1" />

      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1, padding: 12 }}
      >
        <View className="flex-1 rounded-3xl bg-white px-5 py-5">
          {/* Profile avatar */}
          <View className="items-center">
            <View className="h-[66px] w-[66px] items-center justify-center rounded-full bg-[#DDF5EC]">
              <Ionicons name="person" size={38} color={green} />
            </View>

            <Text className="mt-2 text-lg font-bold text-[#124A43]">
              Profile Setup
            </Text>
            <Text className="mt-1 text-xs text-[#78968C]">
              Add your information
            </Text>
          </View>

          {/* Date of birth */}
          <Text className="mb-1.5 mt-5 text-xs font-medium text-[#315E55]">
            Date of Birth
          </Text>
          <TextInput
            value={dob}
            onChangeText={setDob}
            placeholder="DD / MM / YYYY"
            placeholderTextColor="#9BAFA9"
            className="h-11 rounded-xl border border-[#DCEBE5] px-3 text-sm text-[#124A43]"
          />

          {/* Gender */}
          <Text className="mb-1.5 mt-3 text-xs font-medium text-[#315E55]">
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
            className="h-11 flex-row items-center justify-between rounded-xl border border-[#DCEBE5] px-3"
          >
            <Text className={`text-sm ${gender ? "text-[#124A43]" : "text-[#9BAFA9]"}`}>
              {gender || "Select gender"}
            </Text>
            <Ionicons name="chevron-down" size={16} color="#78968C" />
          </Pressable>

          {/* Height and weight */}
          <View className="mt-3 flex-row gap-3">
            <View className="flex-1">
              <Text className="mb-1.5 text-xs font-medium text-[#315E55]">
                Height
              </Text>
              <Pressable
                onPress={() =>
                  chooseOption("Height unit", ["cm", "ft / in"], setHeight)
                }
                className="h-11 flex-row items-center justify-between rounded-xl border border-[#DCEBE5] px-3"
              >
                <Text className="text-sm text-[#315E55]">{height}</Text>
                <Ionicons name="chevron-down" size={14} color="#78968C" />
              </Pressable>
            </View>

            <View className="flex-1">
              <Text className="mb-1.5 text-xs font-medium text-[#315E55]">
                Weight
              </Text>
              <Pressable
                onPress={() =>
                  chooseOption("Weight unit", ["kg", "lb"], setWeight)
                }
                className="h-11 flex-row items-center justify-between rounded-xl border border-[#DCEBE5] px-3"
              >
                <Text className="text-sm text-[#315E55]">{weight}</Text>
                <Ionicons name="chevron-down" size={14} color="#78968C" />
              </Pressable>
            </View>
          </View>

          {/* Activity level */}
          <Text className="mb-1.5 mt-3 text-xs font-medium text-[#315E55]">
            Activity Level
          </Text>
          <Pressable
            onPress={() =>
              chooseOption(
                "Activity Level",
                ["Sedentary", "Lightly active", "Moderately active", "Very active"],
                setActivity
              )
            }
            className="h-11 flex-row items-center justify-between rounded-xl border border-[#DCEBE5] px-3"
          >
            <Text className={`text-sm ${activity ? "text-[#124A43]" : "text-[#9BAFA9]"}`}>
              {activity || "Select activity level"}
            </Text>
            <Ionicons name="chevron-down" size={16} color="#78968C" />
          </Pressable>

          {/* Dietary preference */}
          <Text className="mb-1.5 mt-3 text-xs font-medium text-[#315E55]">
            Dietary Preference
          </Text>
          <Pressable
            onPress={() =>
              chooseOption(
                "Dietary Preference",
                ["No preference", "Vegetarian", "Vegan", "Non-vegetarian"],
                setDiet
              )
            }
            className="h-11 flex-row items-center justify-between rounded-xl border border-[#DCEBE5] px-3"
          >
            <Text className={`text-sm ${diet ? "text-[#124A43]" : "text-[#9BAFA9]"}`}>
              {diet || "Select preference"}
            </Text>
            <Ionicons name="chevron-down" size={16} color="#78968C" />
          </Pressable>

          <Pressable
            onPress={handleNext}
            className="mt-5 h-12 items-center justify-center rounded-xl bg-[#07896F] active:opacity-80"
          >
            <Text className="text-sm font-bold text-white">Next</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
