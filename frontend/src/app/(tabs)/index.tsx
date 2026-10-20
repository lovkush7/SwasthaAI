
import { router } from "expo-router";
import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import FeatureCard from "../../components/Dashboard/FeatureCard";
import WellnessCard from "../../components/Dashboard/WellnessCard";
// import FeatureCard from "../../src/components/dashboard/FeatureCard";
// import WellnessCard from "../../src/components/dashboard/WellnessCard";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#E8F8F1]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 14, paddingBottom: 24 }}
      >
        {/* Header */}
        <View className="mb-5 flex-row items-center justify-between">
          <View className="flex-1 flex-row items-center">
            <Text className="mr-2 text-2xl">☀️</Text>

            <View>
              <Text className="text-lg font-extrabold text-[#124A43]">
                Good morning, Alex
              </Text>
              <Text className="mt-0.5 text-[10px] text-[#78968C]">
                Your health matters
              </Text>
            </View>
          </View>

          <Pressable
            onPress={() => router.push("/(tabs)/Profile")}
            className="h-10 w-10 items-center justify-center rounded-full bg-[#DDF5EC]"
          >
            <Ionicons name="person" size={23} color="#07896F" />
          </Pressable>
        </View>

        {/* Wellness progress */}
        <WellnessCard
          completed={2}
          total={4}
          onPress={() => router.push("/(tabs)/My-health")}
        />

        {/* Feature cards */}
        <View className="mt-4 flex-row gap-3">
          <FeatureCard
            title="AI Symptom Checker"
            subtitle="Check your symptoms"
            icon="medkit-outline"
            onPress={() => router.push("/")}
          />

          <FeatureCard
            title="Exercise & Diet"
            subtitle="Healthy lifestyle"
            icon="fitness-outline"
            onPress={() => router.push("/")}
          />
        </View>

        <View className="mt-3 flex-row gap-3">
          <FeatureCard
            title="Medicine Reminders"
            subtitle="Stay on track"
            icon="calendar-outline"
            onPress={() => router.push("/")}
          />

          <FeatureCard
            title="Health AI Chat"
            subtitle="Ask anything"
            icon="chatbubble-ellipses-outline"
            onPress={() => router.push("/")}
          />
        </View>

        {/* Upcoming medicines */}
        <View className="mb-3 mt-6 flex-row items-center justify-between">
          <Text className="text-sm font-bold text-[#124A43]">
            Upcoming Medicines
          </Text>

          <Pressable
            // onPress={() => router.push("/(tabs)/reminders")}
          >
            <Text className="text-[10px] font-bold text-[#07896F]">
              View All
            </Text>
          </Pressable>
        </View>

        <Pressable
        //   onPress={() => router.push("/(tabs)/reminders")}
          className="flex-row items-center rounded-2xl border border-[#DCEFE7] bg-white p-3"
        >
          <View className="mr-3 h-10 w-10 items-center justify-center rounded-full bg-[#E5F7EF]">
            <Ionicons name="medkit-outline" size={22} color="#07896F" />
          </View>

          <View className="flex-1">
            <Text className="text-xs font-bold text-[#124A43]">
              Paracetamol 500mg
            </Text>
            <Text className="mt-1 text-[10px] text-[#78968C]">
              After food · 8:00 AM
            </Text>
          </View>

          <Ionicons name="calendar-outline" size={19} color="#07896F" />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
