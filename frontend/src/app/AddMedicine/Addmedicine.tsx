import { useState } from "react";
import { router } from "expo-router";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { usemedicineStore } from "../../Store/MedicineStore";

// import { useMedicineStore } from "../../src/store/medicine-store";

const frequencies = [
  "Once daily",
  "2 times daily",
  "3 times daily",
  "4 times daily",
  "Every other day",
  "As needed",
];

const instructions = [
  "Before Food",
  "After Food",
  "With Food",
  "Before Sleep",
];

const timeOptions = [
  "06:00 AM",
  "08:00 AM",
  "10:00 AM",
  "12:00 PM",
  "02:00 PM",
  "06:00 PM",
  "08:00 PM",
  "10:00 PM",
];

export default function AddMedicineScreen() {
const addMedicine = usemedicineStore.getState().addMedicine;

  const [name, setName] = useState("");
  const [dose, setDose] = useState("");
  const [frequency, setFrequency] = useState("3 times daily");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reminderTimes, setReminderTimes] = useState<string[]>([
    "08:00 AM",
  ]);
  const [instruction, setInstruction] = useState("After Food");

  const toggleTime = (time: string) => {
    setReminderTimes((previous) =>
      previous.includes(time)
        ? previous.filter((item) => item !== time)
        : [...previous, time]
    );
  };

  const handleSave = () => {
    if (!name.trim() || !dose.trim()) {
      Alert.alert(
        "Required Fields",
        "Please enter medicine name and dosage."
      );
      return;
    }

    if (reminderTimes.length === 0) {
      Alert.alert(
        "Reminder Required",
        "Please select at least one reminder time."
      );
      return;
    }

    const medicine = {
      id: Date.now().toString(),
      name: name.trim(),
      dose: dose.trim(),
      frequency,
      startDate,
      endDate,
      reminderTimes,
      instruction,
      icon: "medical",
      color: "#07896F",
    };

    addMedicine(medicine);

    Alert.alert(
      "Success",
      "Medicine added successfully!",
      [
        {
          text: "OK",
          onPress: () =>
            router.replace({
                pathname: "/(tabs)/Reminders"
            }),
        },
      ]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-[#E8F8F1]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ padding: 14, paddingBottom: 30 }}
      >
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
            Add Medicine
          </Text>
        </View>

        {/* Form */}
        <View className="rounded-2xl bg-white p-4">

          {/* Medicine name */}
          <Text className="mb-2 text-xs font-semibold text-[#52776E]">
            Medicine Name
          </Text>

          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="e.g. Paracetamol"
            placeholderTextColor="#A0B5AD"
            className="mb-4 h-11 rounded-xl border border-[#DCEBE5] px-3 text-sm text-[#124A43]"
          />

          {/* Dose */}
          <Text className="mb-2 text-xs font-semibold text-[#52776E]">
            Dose
          </Text>

          <TextInput
            value={dose}
            onChangeText={setDose}
            placeholder="e.g. 500mg"
            placeholderTextColor="#A0B5AD"
            className="mb-4 h-11 rounded-xl border border-[#DCEBE5] px-3 text-sm text-[#124A43]"
          />

          {/* Frequency */}
          <Text className="mb-2 text-xs font-semibold text-[#52776E]">
            Frequency
          </Text>

          <View className="mb-4 flex-row flex-wrap gap-2">
            {frequencies.map((item) => {
              const active = frequency === item;

              return (
                <Pressable
                  key={item}
                  onPress={() => setFrequency(item)}
                  className={`rounded-lg border px-3 py-2.5 ${
                    active
                      ? "border-[#07896F] bg-[#E2F6ED]"
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

          {/* Start date */}
          <Text className="mb-2 text-xs font-semibold text-[#52776E]">
            Start Date
          </Text>

          <View className="mb-4 flex-row items-center rounded-xl border border-[#DCEBE5] px-3">
            <TextInput
              value={startDate}
              onChangeText={setStartDate}
              placeholder="DD / MM / YYYY"
              placeholderTextColor="#A0B5AD"
              className="h-11 flex-1 text-sm text-[#124A43]"
            />
            <Ionicons
              name="calendar-outline"
              size={18}
              color="#78968C"
            />
          </View>

          {/* End date */}
          <Text className="mb-2 text-xs font-semibold text-[#52776E]">
            End Date (optional)
          </Text>

          <View className="mb-4 flex-row items-center rounded-xl border border-[#DCEBE5] px-3">
            <TextInput
              value={endDate}
              onChangeText={setEndDate}
              placeholder="DD / MM / YYYY"
              placeholderTextColor="#A0B5AD"
              className="h-11 flex-1 text-sm text-[#124A43]"
            />
            <Ionicons
              name="calendar-outline"
              size={18}
              color="#78968C"
            />
          </View>

          {/* Reminder Times */}
          <View className="mb-3 flex-row items-center justify-between">
            <Text className="text-xs font-semibold text-[#52776E]">
              Reminder Times
            </Text>

            <Text className="text-[10px] text-[#07896F]">
              {reminderTimes.length} selected
            </Text>
          </View>

          <View className="mb-4 flex-row flex-wrap gap-2">
            {timeOptions.map((time) => {
              const active = reminderTimes.includes(time);

              return (
                <Pressable
                  key={time}
                  onPress={() => toggleTime(time)}
                  className={`rounded-lg border px-3 py-2.5 ${
                    active
                      ? "border-[#07896F] bg-[#E2F6ED]"
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
                    {active ? "✓ " : ""}
                    {time}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          {/* Instructions */}
          <Text className="mb-2 text-xs font-semibold text-[#52776E]">
            Instructions
          </Text>

          <View className="flex-row flex-wrap gap-2">
            {instructions.map((item) => {
              const active = instruction === item;

              return (
                <Pressable
                  key={item}
                  onPress={() => setInstruction(item)}
                  className={`rounded-lg border px-3 py-2.5 ${
                    active
                      ? "border-[#07896F] bg-[#E2F6ED]"
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

          {/* Save */}
          <Pressable
            onPress={handleSave}
            className="mt-6 h-12 items-center justify-center rounded-xl bg-[#07896F]"
          >
            <Text className="text-sm font-bold text-white">
              Save Medicine
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}