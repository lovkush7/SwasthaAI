import { useMemo, useState } from "react";
import { router } from "expo-router";
import {
  View,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { usemedicineStore } from "../../Store/MedicineStore";
import Medicinecard from "../../components/Reminders/Medicinecard";

// import MedicineCard from "../../src/components/reminders/MedicineCard";
// import { useMedicineStore } from "../../src/store/medicine-store";

const periods = ["Morning", "Afternoon", "Evening", "Night"];

function getPeriod(time: string) {
  const hour = Number(time.split(":")[0]);
  const isPM = time.toUpperCase().includes("PM");

  const hour24 = isPM
    ? hour === 12 ? 12 : hour + 12
    : hour === 12 ? 0 : hour;

  if (hour24 >= 5 && hour24 < 12) return "Morning";
  if (hour24 >= 12 && hour24 < 17) return "Afternoon";
  if (hour24 >= 17 && hour24 < 21) return "Evening";

  return "Night";
}

export default function RemindersScreen() {
  const [activePeriod, setActivePeriod] = useState("Morning");

  const medicines = usemedicineStore(
    (state) => state.Medicines
  );

  const filteredMedicines = useMemo(() => {
    return medicines.filter((medicine) =>
      medicine.reminderTimes.some(
        (time) => getPeriod(time) === activePeriod
      )
    );
  }, [medicines, activePeriod]);

  return (
    <SafeAreaView className="flex-1 bg-[#E8F8F1]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 14, paddingBottom: 25 }}
      >
        {/* Header */}
        <View className="mb-5 flex-row items-center">
          <Pressable onPress={() => router.back()} hitSlop={10}>
            <Ionicons
              name="chevron-back"
              size={23}
              color="#124A43"
            />
          </Pressable>

          <Text className="ml-3 text-base font-bold text-[#124A43]">
            Medicine Reminders
          </Text>
        </View>

        {/* Time categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 8 }}
        >
          {periods.map((period) => {
            const active = activePeriod === period;

            return (
              <Pressable
                key={period}
                onPress={() => setActivePeriod(period)}
                className={`rounded-full px-4 py-2.5 ${
                  active ? "bg-[#07896F]" : "bg-white"
                }`}
              >
                <Text
                  className={`text-xs font-semibold ${
                    active ? "text-white" : "text-[#52776E]"
                  }`}
                >
                  {period}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* Medicine list */}
        <View className="mt-5">
          {filteredMedicines.length > 0 ? (
            filteredMedicines.map((medicine) => (
              <Medicinecard
                key={medicine.id}
                medicine={medicine}
              />
            ))
          ) : (
            <View className="items-center rounded-2xl bg-white p-8">
              <Ionicons
                name="medical-outline"
                size={35}
                color="#07896F"
              />

              <Text className="mt-3 text-sm font-semibold text-[#124A43]">
                No Medicines Scheduled
              </Text>

              <Text className="mt-1 text-xs text-[#78968C]">
                No reminders for {activePeriod.toLowerCase()}.
              </Text>
            </View>
          )}
        </View>

        {/* Add Medicine */}
        <Pressable
          onPress={() => router.push({
            pathname: "/AddMedicine/Addmedicine"
          })}
          className="mt-3 h-12 flex-row items-center justify-center rounded-xl bg-[#07896F]"
        >
          <Ionicons name="add" size={20} color="white" />

          <Text className="ml-1 text-sm font-bold text-white">
            Add Medicine
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}