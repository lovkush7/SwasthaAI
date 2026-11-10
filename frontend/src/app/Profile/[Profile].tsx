import { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Switch,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const sections: Record<
  string,
  {
    title: string;
    description: string;
    items: string[];
  }
> = {
  "health-history": {
    title: "Health History",
    description: "Manage your health information",
    items: [
      "Medical Conditions",
      "Allergies",
      "Past Surgeries",
      "Current Medications",
      "Family Health History",
    ],
  },
  preferences: {
    title: "Preferences",
    description: "Customize your wellness experience",
    items: [
      "Dietary Preference",
      "Activity Level",
      "Health Goals",
      "Language",
    ],
  },
  notifications: {
    title: "Notifications",
    description: "Manage your notifications",
    items: [
      "Medicine Reminders",
      "Exercise Reminders",
      "Meal Reminders",
      "Health Updates",
    ],
  },
  "privacy-security": {
    title: "Privacy & Security",
    description: "Control your account privacy",
    items: [
      "Change Password",
      "Biometric Authentication",
      "Data Privacy",
      "Account Security",
    ],
  },
  settings: {
    title: "Settings",
    description: "Manage your application",
    items: [
      "Dark Mode",
      "Language",
      "Help & Support",
      "About SwasthaAI",
    ],
  },
};

export default function ProfileSettingsScreen() {
  const { section } = useLocalSearchParams<{
    section: string;
  }>();

  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    "Medicine Reminders": true,
    "Exercise Reminders": true,
    "Meal Reminders": false,
    "Health Updates": true,
    "Dark Mode": false,
    "Biometric Authentication": false,
  });

  const page = sections[section ?? ""];

  if (!page) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-[#E8F8F1]">
        <Text className="text-[#124A43]">Page not found</Text>
        <Pressable onPress={() => router.back()}>
          <Text className="mt-3 text-[#07896F]">Go Back</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#E8F8F1]">
      <ScrollView contentContainerStyle={{ padding: 15 }}>
        {/* Header */}
        <View className="mb-5 flex-row items-center">
          <Pressable onPress={() => router.back()}>
            <Ionicons
              name="chevron-back"
              size={23}
              color="#124A43"
            />
          </Pressable>

          <Text className="ml-3 text-base font-bold text-[#124A43]">
            {page.title}
          </Text>
        </View>

        <Text className="mb-4 text-xs text-[#78968C]">
          {page.description}
        </Text>

        {/* Settings list */}
        <View className="rounded-2xl bg-white px-4">
          {page.items.map((item) => {
            const isToggle =
              item in enabled;

            return (
              <View
                key={item}
                className="flex-row items-center border-b border-[#EAF3EF] py-4"
              >
                <Text className="flex-1 text-xs font-medium text-[#315E55]">
                  {item}
                </Text>

                {isToggle ? (
                  <Switch
                    value={enabled[item]}
                    onValueChange={(value) =>
                      setEnabled((previous) => ({
                        ...previous,
                        [item]: value,
                      }))
                    }
                    trackColor={{
                      false: "#DCEBE5",
                      true: "#07896F",
                    }}
                    thumbColor="white"
                  />
                ) : (
                  <Ionicons
                    name="chevron-forward"
                    size={17}
                    color="#78968C"
                  />
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}