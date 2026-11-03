import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { mealCategory, meals } from './meals';
import { Ionicons } from '@expo/vector-icons';
import Mealcard from '../../components/Exercise/Mealcard';
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
export default function mealplan() {
    const [activeCategory, setActiveCategory] = useState<mealCategory >("Breakfast");
    const [selectDay, setSelectDay] = useState("Mon");

    const filterCategory = meals.filter((meal)=>meal.category === activeCategory);
  return (
     <SafeAreaView className="flex-1 bg-[#E8F8F1]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 14, paddingBottom: 25 }}
      >
        {/* Header */}
        <View className="mb-5 flex-row items-center">
          <Pressable onPress={() => routerBack()}>
            <Ionicons name="chevron-back" size={23} color="#124A43" />
          </Pressable>

          <Text className="ml-3 text-base font-bold text-[#124A43]">
            Meal Plan
          </Text>
        </View>

        <Text className="mb-4 text-sm font-bold text-[#124A43]">
          Your Daily Meal Plan
        </Text>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 7 }}
        >
          {mealCategory.map((category) => {
            const active = activeCategory === category;

            return (
              <Pressable
                key={category}
                onPress={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2.5 ${
                  active ? "bg-[#07896F]" : "bg-white"
                }`}
              >
                <Text
                  className={`text-xs font-semibold ${
                    active ? "text-white" : "text-[#52776E]"
                  }`}
                >
                  {category}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* Meals */}
        <View className="mt-5">
          {filterCategory.length > 0 ? (
            filterCategory.map((meal) => (
              <Mealcard key={meal.id} meal={meal} />
            ))
          ) : (
            <Text className="py-8 text-center text-sm text-[#78968C]">
              No meals available.
            </Text>
          )}
        </View>

        {/* Weekly plan */}
        <Text className="mb-3 mt-5 text-sm font-bold text-[#124A43]">
          Weekly Plan
        </Text>

        <View className="rounded-2xl border border-[#DCEFE7] bg-white p-3">
          <View className="flex-row justify-between">
            {days.map((day) => {
              const active = selectDay === day;

              return (
                <Pressable
                  key={day}
                  onPress={() => setSelectDay(day)}
                  className={`h-11 w-10 items-center justify-center rounded-xl ${
                    active ? "bg-[#07896F]" : "bg-[#F0FAF5]"
                  }`}
                >
                  <Text
                    className={`text-[9px] ${
                      active ? "font-bold text-white" : "text-[#78968C]"
                    }`}
                  >
                    {day}
                  </Text>

                  <Text
                    className={`mt-1 text-xs font-bold ${
                      active ? "text-white" : "text-[#124A43]"
                    }`}
                  >
                    {days.indexOf(day) + 1}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          <Text className="mt-4 text-center text-xs text-[#78968C]">
            Showing meal plan for {selectDay}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function routerBack() {
  const { router } = require("expo-router");
  router.back();
}