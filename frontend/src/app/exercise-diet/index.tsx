import { router } from "expo-router";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import WellnessProgress from "./WellnessProgress";
import ExerciseCard from "./ExerciseCard";
import { exercise } from "./Exercise";


export default function ExerciseDietScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#E8F8F1]">
      <StatusBar barStyle="dark-content" backgroundColor="#E8F8F1" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 14, paddingBottom: 25 }}
      >
        {/* Header */}
        <View className="mb-5 flex-row items-center">
          <Pressable onPress={() => router.back()} hitSlop={10}>
            <Ionicons name="chevron-back" size={23} color="#124A43" />
          </Pressable>

          <Text className="ml-3 text-base font-bold text-[#124A43]">
            Exercise & Diet
          </Text>
        </View>

        {/* Daily wellness */}
        <Text className="mb-4 text-base font-bold text-[#07896F]">
          Your Daily Wellness
        </Text>

        <WellnessProgress
          completed={3}
          total={5}
          water={6}
          waterGoal={8}
        />

        {/* Quick stats */}
        <View className="mt-3 flex-row gap-3">
          <View className="flex-1 flex-row items-center rounded-xl border border-[#DCEFE7] bg-white p-3">
            <Ionicons name="walk-outline" size={22} color="#07896F" />
            <View className="ml-2">
              <Text className="text-xs font-bold text-[#124A43]">
                Exercise
              </Text>
              <Text className="text-[10px] text-[#78968C]">
                30 min
              </Text>
            </View>
          </View>

          <View className="flex-1 flex-row items-center rounded-xl border border-[#DCEFE7] bg-white p-3">
            <Ionicons name="water-outline" size={22} color="#2696CF" />
            <View className="ml-2">
              <Text className="text-xs font-bold text-[#124A43]">
                Water
              </Text>
              <Text className="text-[10px] text-[#78968C]">
                6/8 glasses
              </Text>
            </View>
          </View>
        </View>

        {/* Recommended Exercises */}
        <View className="mb-3 mt-6 flex-row items-center justify-between">
          <Text className="text-sm font-bold text-[#124A43]">
            Recommended Exercises
          </Text>

          <Pressable
            onPress={() =>
              router.push("/(tabs)/exercise-diet/morning-walk")
            }
          >
            <Text className="text-[10px] font-bold text-[#07896F]">
              View All
            </Text>
          </Pressable>
        </View>

        {exercise.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            onPress={() =>
              router.push({
                pathname: "/exercise-diet/[exercise]",
                params:{
                  exercise: String(exercise.id)
                }
              })
            }
          />
        ))}

        {/* Meal Plan shortcut */}
        <Pressable
          onPress={() =>
            router.push("/(tabs)/exercise-diet/meal-plan")
          }
          className="mt-2 flex-row items-center justify-between rounded-2xl bg-[#07896F] p-4"
        >
          <View>
            <Text className="text-sm font-bold text-white">
              Your Meal Plan
            </Text>
            <Text className="mt-1 text-[10px] text-[#DDF5EC]">
              Explore healthy meals for today
            </Text>
          </View>

          <Ionicons name="restaurant-outline" size={25} color="white" />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}