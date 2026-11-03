import { View, Text, ScrollView, Pressable, TextInput } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useSymptomStore } from '../../Store/Symptomstore'
import { categories, symptoms } from './symptom'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function SymptomChecker() {
    const [category, setcategory] = useState("General")
    const [search, setsearch] = useState("")
 
     const selectedSymptom = useSymptomStore(
        (state)=>state.selectedSymptoms
     );

      const filteredSymptoms = useMemo(() => {
    return symptoms.filter((symptom) => {
      const matchesCategory =
        category === "General" || symptom.category === category;

      const matchesSearch = symptom.name
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);
  return (
   <SafeAreaView className='flex-1 bg-[#E8F8F1]'>
    <ScrollView 
    contentContainerStyle={{padding:20, paddingBottom:28}}
    showsVerticalScrollIndicator={false}
    keyboardShouldPersistTaps='handled'
    >
          <View className="mb-5 flex-row items-center">
          <Pressable
            onPress={() => router.back()}
            className="mr-4"
            hitSlop={10}
          >
            <Ionicons name="chevron-back" size={23} color="#124A43" />
          </Pressable>

          <Text className="text-base font-bold text-[#124A43]">
            AI Symptom Checker
          </Text>
        </View>

        {/* Search */}
        <View className="h-11 flex-row items-center rounded-xl border border-[#DCEBE5] bg-white px-3">
          <Ionicons name="search-outline" size={18} color="#78968C" />

          <TextInput
            value={search}
            onChangeText={setsearch}
            placeholder="Search symptoms..."
            placeholderTextColor="#8AA69C"
            className="ml-2 flex-1 text-sm text-[#124A43]"
          />

          {search.length > 0 && (
            <Pressable onPress={() => setsearch("")}>
              <Ionicons name="close-circle" size={18} color="#78968C" />
            </Pressable>
          )}
        </View>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4"
          contentContainerStyle={{ gap: 7, paddingRight: 8 }}
        >
          {categories.map((item) => {
            const active = category === item;

            return (
              <Pressable
                key={item}
                onPress={() => setcategory(item)}
                className={`flex-row items-center rounded-full px-3 py-2 ${
                  active ? "bg-[#07896F]" : "bg-white"
                }`}
              >
                {item === "General" && (
                  <Ionicons
                    name="apps-outline"
                    size={14}
                    color={active ? "white" : "#07896F"}
                  />
                )}

                <Text
                  className={`text-xs ${
                    item === "General" ? "ml-1" : ""
                  } ${
                    active
                      ? "font-semibold text-white"
                      : "text-[#52776E]"
                  }`}
                >
                  {item}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* Symptom list */}
        <Text className="mb-3 mt-6 text-sm font-bold text-[#124A43]">
          {category === "General" ? "Common Symptoms" : `${category} Symptoms`}
        </Text>

        {filteredSymptoms.length > 0 ? (
          <View className="flex-row flex-wrap gap-2">
            {filteredSymptoms.map((symptom) => {
              const selected = selectedSymptom.includes(symptom.id);

              return (
                <Pressable
                  key={symptom.id}
                  onPress={() =>
                    router.push({
                      pathname: "/(symptom-checker)/[symptom]",
                      params: { symptom: String(symptom.id) },
                    })
                  }
                  className={`min-h-10 items-center justify-center rounded-full border px-4 ${
                    selected
                      ? "border-[#07896F] bg-[#DDF5EC]"
                      : "border-transparent bg-[#E1F7EF]"
                  }`}
                >
                  <Text
                    className={`text-xs ${
                      selected
                        ? "font-bold text-[#07896F]"
                        : "text-[#315E55]"
                    }`}
                  >
                    {selected ? "✓ " : ""}
                    {symptom.name}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        ) : (
          <View className="items-center rounded-2xl bg-white p-6">
            <Ionicons name="search-outline" size={28} color="#78968C" />
            <Text className="mt-2 text-sm text-[#52776E]">
              No symptoms found
            </Text>
          </View>
        )}

        {/* Selection count */}
        {selectedSymptom.length > 0 && (
          <Text className="mt-4 text-xs text-[#52776E]">
            {selectedSymptom.length} symptom(s) added
          </Text>
        )}

        {/* Next */}
        <Pressable
          onPress={() => {
            if (selectedSymptom.length === 0) {
              return;
            }
            router.push("/(symptom-checker)/Review");
          }}
          disabled={selectedSymptom.length === 0}
          className={`mt-8 h-12 items-center justify-center rounded-xl ${
            selectedSymptom.length > 0
              ? "bg-[#07896F]"
              : "bg-[#A8CFC1]"
          }`}
        >
          <Text className="text-sm font-bold text-white">
            Next
          </Text>
        </Pressable>

    </ScrollView>

   </SafeAreaView>
  )
}