
import { View, Text, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { Exercise } from "./Exercise";

type Props = {
  exercise: Exercise;
  onPress: () => void;
};

export default function ExerciseCard({
  exercise,
  onPress,
}: Props) {
  if (!exercise) return null;

  return (
    <Pressable
      onPress={onPress}
      className="mb-3 flex-row items-center rounded-2xl border border-[#DCEFE7] bg-white p-3"
      style={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Exercise Image */}
      <Image
        source={exercise.image}
        resizeMode="cover"
        style={{
          width: 75,
          height: 75,
          borderRadius: 12,
          flexShrink: 0,
        }}
      />

      {/* Exercise Information */}
      <View className="ml-3 flex-1" style={{ minWidth: 0 }}>
        <Text
          className="text-xs font-bold text-[#124A43]"
          numberOfLines={1}
        >
          {exercise.title}
        </Text>

        <View className="mt-2 flex-row items-center flex-wrap">
          <Ionicons
            name="time-outline"
            size={12}
            color="#07896F"
          />

          <Text className="ml-1 text-[9px] text-[#78968C]">
            {exercise.duration}
          </Text>

          <Text className="mx-1 text-[#A0B8AE]">·</Text>

          <Text className="text-[9px] text-[#07896F]">
            {exercise.difficulty}
          </Text>

          <Text className="mx-1 text-[#A0B8AE]">·</Text>

          <Text className="text-[9px] text-[#78968C]">
            {exercise.type}
          </Text>
        </View>
      </View>

      <Ionicons
        name="chevron-forward"
        size={17}
        color="#78968C"
      />
    </Pressable>
  );
}
