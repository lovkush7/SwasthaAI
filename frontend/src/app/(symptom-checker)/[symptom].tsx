import { View, Text, Pressable, Alert, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { symptoms } from './symptom';
import { useSymptomStore, type SymptomDetails } from '../../Store/Symptomstore';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const durations = ["< 1 day", "1-3 days", "> 3 days"];
const severities = ["Mild", "Moderate", "Severe"];
export default function SymptomDetails() {
  const { symptom: symptomparm} = useLocalSearchParams<{symptom: string | string[]}>()

  const symptomId  = Array.isArray(symptomparm) ? symptomparm[0] : symptomparm;
  const symptom = symptoms.find((item)=> item.id === symptomId);
  const existingDetails =useSymptomStore((state)=> symptomId ?  state.details[symptomId]: undefined);

    const saveSymptom = useSymptomStore((state) => state.saveSymptom);

      const [duration, setDuration] = useState(
    existingDetails?.duration ?? ""
  );
  const [severity, setSeverity] = useState(
    existingDetails?.severity ?? ""
  );
  const [additionalInfo, setAdditionalInfo] = useState(
    existingDetails?.additionalInfo ?? ""
  );
    if (!symptom || !symptomId) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-[#E8F8F1]">
        <Text className="text-[#124A43]">Symptom not found.</Text>
        <Pressable onPress={() => router.replace("/(symptom-checker)/index")} className="mt-2">
          <Text className="mt-3 font-bold text-[#07896F]">
            Back to symptoms
          </Text>
        </Pressable>
      </SafeAreaView>
    );
  }
   function handleNext() {
    if (!duration || !severity) {
      Alert.alert(
        "Missing information",
        "Please select duration and severity."
      );
      return;
    }

    const details: SymptomDetails = {
      duration,
      severity,
      additionalInfo: additionalInfo.trim(),
    };

    saveSymptom(symptomId, details);

    // Return to the list to add another symptom.
    router.replace("/(symptom-checker)");
  }
  return (
    <SafeAreaView className="flex-1 bg-[#E8F8F1]">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, padding: 16 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 rounded-2xl bg-white px-4 py-5">
          {/* Header */}
          <View className="mb-6 flex-row items-center">
            <Pressable onPress={() => router.back()} hitSlop={10}>
              <Ionicons name="chevron-back" size={23} color="#124A43" />
            </Pressable>

            <Text className="ml-4 text-base font-bold text-[#124A43]">
              Symptom Details
            </Text>
          </View>

          {/* Symptom information */}
          <View className="mb-7 flex-row items-center">
            <View className="mr-3 h-12 w-12 items-center justify-center rounded-full bg-[#DDF5EC]">
              <Ionicons
                name="medical-outline"
                size={25}
                color="#07896F"
              />
            </View>

            <View className="flex-1">
              <Text className="text-base font-bold text-[#124A43]">
                {symptom.name}
              </Text>
              <Text className="mt-1 text-xs text-[#78968C]">
                {symptom.description}
              </Text>
            </View>
          </View>

          {/* Duration */}
          <Text className="mb-3 text-sm font-semibold text-[#315E55]">
            Duration
          </Text>

          <View className="mb-6 flex-row gap-2">
            {durations.map((item) => {
              const active = duration === item;

              return (
                <Pressable
                  key={item}
                  onPress={() => setDuration(item)}
                  className={`flex-1 items-center rounded-xl border px-1 py-3 ${
                    active
                      ? "border-[#07896F] bg-[#DDF5EC]"
                      : "border-[#DCEBE5] bg-white"
                  }`}
                >
                  <Text
                    className={`text-[10px] ${
                      active
                        ? "font-bold text-[#07896F]"
                        : "text-[#52776E]"
                    }`}
                  >
                    {item}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          {/* Severity */}
          <Text className="mb-3 text-sm font-semibold text-[#315E55]">
            Severity
          </Text>

          <View className="mb-6 flex-row gap-2">
            {severities.map((item) => {
              const active = severity === item;

              return (
                <Pressable
                  key={item}
                  onPress={() => setSeverity(item)}
                  className={`flex-1 items-center rounded-xl border px-1 py-3 ${
                    active
                      ? "border-[#07896F] bg-[#DDF5EC]"
                      : "border-[#DCEBE5] bg-white"
                  }`}
                >
                  <Text
                    className={`text-xs ${
                      active
                        ? "font-bold text-[#07896F]"
                        : "text-[#52776E]"
                    }`}
                  >
                    {item}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          {/* Additional information */}
          <Text className="mb-2 text-sm font-semibold text-[#315E55]">
            Additional info (optional)
          </Text>

          <TextInput
            value={additionalInfo}
            onChangeText={setAdditionalInfo}
            placeholder="Any other symptoms or context?"
            placeholderTextColor="#9BAFA9"
            multiline
            textAlignVertical="top"
            className="min-h-28 rounded-xl border border-[#DCEBE5] p-3 text-sm text-[#124A43]"
          />

          {/* Navigation buttons */}
          <View className="mt-auto flex-row gap-3 pt-8">
            <Pressable
              onPress={() => router.back()}
              className="h-12 flex-1 items-center justify-center rounded-xl border border-[#DCEBE5]"
            >
              <Text className="text-sm font-semibold text-[#315E55]">
                Back
              </Text>
            </Pressable>

            <Pressable
              onPress={handleNext}
              className="h-12 flex-1 items-center justify-center rounded-xl bg-[#07896F]"
            >
              <Text className="text-sm font-bold text-white">
                Next
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}