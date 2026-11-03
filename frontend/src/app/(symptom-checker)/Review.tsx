
import { router } from "expo-router";
import { View, Text, Pressable, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useSymptomStore } from "../../Store/Symptomstore";
import { symptoms } from "./symptom";
// import { symptoms } from "../../src/data/symptoms";
// import { useSymptomStore } from "../../src/store/symptom-store";

export default function SymptomReviewScreen() {
  const selectedSymptoms = useSymptomStore(
    (state) => state.selectedSymptoms
  );
  const details = useSymptomStore((state) => state.details);
  const removeSymptom = useSymptomStore(
    (state) => state.removeSymptom
  );

  const selected = symptoms.filter((item) =>
    selectedSymptoms.includes(item.id)
     
  );

  return (
    <SafeAreaView className="flex-1 bg-[#E8F8F1]">
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View className="rounded-2xl bg-white p-5">
          <Pressable
            onPress={() => router.back()}
            className="mb-5 flex-row items-center"
          >
            <Ionicons name="chevron-back" size={22} color="#124A43" />
            <Text className="ml-3 font-bold text-[#124A43]">
              Review Your Symptoms
            </Text>
          </Pressable>

          {selected.length === 0 ? (
            <Text className="py-6 text-sm text-[#78968C]">
              No symptoms added yet. Go back and select your symptoms.
            </Text>
          ) : (
            selected.map((item) => (
              <View
                key={item.id}
                className="mb-3 rounded-xl border border-[#DCEFE7] bg-[#F5FCF8] p-3"
              >
                <View className="flex-row items-center">
                  <View className="flex-1">
                    <Text className="font-bold text-[#124A43]">
                      {item.name}
                    </Text>
                    <Text className="mt-1 text-xs text-[#52776E]">
                      {details[item.id]?.duration} ·{" "}
                      {details[item.id]?.severity}
                    </Text>
                  </View>

                  <Pressable onPress={() => removeSymptom(item.id)}>
                    <Ionicons
                      name="trash-outline"
                      size={19}
                      color="#D94848"
                    />
                  </Pressable>
                </View>

                {!!details[item.id]?.additionalInfo && (
                  <Text className="mt-2 text-xs text-[#52776E]">
                    {details[item.id].additionalInfo}
                  </Text>
                )}

                <Pressable
                  onPress={() =>
                    router.push({
                       pathname: "/(symptom-checker)/[symptom]",
                          params: { symptom: item.id },
                          
                    })
                  }
                  className="mt-2 self-start"
                >
                  <Text className="text-xs font-semibold text-[#07896F]">
                    Edit details
                  </Text>
                </Pressable>
              </View>
            ))
          )}

          <Pressable
            onPress={() => router.replace("/(symptom-checker)")}
            className="mt-3 h-12 items-center justify-center rounded-xl border border-[#07896F]"
          >
            <Text className="font-semibold text-[#07896F]">
              + Add Another Symptom
            </Text>
          </Pressable>

          <Pressable
            disabled={selected.length === 0}
            onPress={() =>
              Alert.alert(
                "Symptoms reviewed",
                "Connect your Django API to continue with an appropriate health assessment."
              )
            }
            className={`mt-3 h-12 items-center justify-center rounded-xl ${
              selected.length ? "bg-[#07896F]" : "bg-[#A8CFC1]"
            }`}
          >
            <Text className="font-bold text-white">
              Submit Symptoms
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
