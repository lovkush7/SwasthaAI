
import {
  View,
  Text,
  Image,
  useWindowDimensions,
} from "react-native";

import React from "react";
import type { Meal } from "../../app/exercise-diet/meals";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  meal: Meal;
};

export default function MealCard({ meal }: Props) {
  const { width } = useWindowDimensions();

  // Responsive image height
  const imageHeight = Math.min(width * 0.35, 240);

  return (
    <View className="mb-4 w-full overflow-hidden rounded-2xl border border-[#DCEFE7] bg-white p-3">

      {/* Meal Image */}
      <Image
        source={meal.image}
        resizeMode="cover"
        style={{
          width: "100%",
          height: imageHeight,
          borderRadius: 14,
        }}
      />

      {/* Meal Information */}
      <View className="mt-3">

        {/* Category */}
        <Text className="text-[10px] font-semibold text-[#07896F]">
          {meal.category}
        </Text>

        {/* Meal Name */}
        <Text
          className="mt-1 text-base font-bold text-[#124A43]"
          numberOfLines={2}
        >
          {meal.name}
        </Text>

        {/* Description */}
        <Text className="mt-1 text-xs leading-5 text-[#78968C]">
          {meal.description}
        </Text>

        {/* Meal Tags */}
        <View className="mt-3 flex-row flex-wrap gap-2">
          {meal.tags.map((tag) => (
            <View
              key={tag}
              className="rounded-full bg-[#E2F6ED] px-3 py-1.5"
            >
              <Text className="text-[9px] font-semibold text-[#07896F]">
                {tag}
              </Text>
            </View>
          ))}
        </View>

        {/* Time and Calories */}
        <View className="mt-3 flex-row items-center border-t border-[#EAF3EE] pt-3">

          <View className="flex-row items-center">
            <Ionicons
              name="time-outline"
              size={14}
              color="#07896F"
            />

            <Text className="ml-1 text-[10px] text-[#78968C]">
              {meal.time}
            </Text>
          </View>

          <View className="ml-4 flex-row items-center">
            <Ionicons
              name="flame-outline"
              size={14}
              color="#07896F"
            />

            <Text className="ml-1 text-[10px] text-[#78968C]">
              {meal.calories} kcal
            </Text>
          </View>

        </View>
      </View>
    </View>
  );
}
