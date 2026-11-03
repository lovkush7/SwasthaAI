import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TextInput,
  Pressable,
  Alert,
  Platform,
  KeyboardAvoidingView,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

// ---------- Colors ----------
const COLORS = {
  bg: "#E8F8F1",
  card: "#FFFFFF",
  avatarBg: "#DDF5EC",
  primary: "#07896F",
  title: "#124A43",
  label: "#315E55",
  subtitle: "#78968C",
  placeholder: "#9BAFA9",
  border: "#DCEBE5",
};

// Design base: standard phone (375 x 812)
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

export default function ProfileSetup() {
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("cm");
  const [weight, setWeight] = useState("kg");
  const [activity, setActivity] = useState("");
  const [diet, setDiet] = useState("");

  const { width, height: screenHeight } = useWindowDimensions();

  // ---------- Responsive helpers ----------
  const r = useMemo(() => {
    const isTablet = width >= 768;
    const isLandscape = width > screenHeight;

    // Tablet ma scale limit garne, natra sabai kura dherai thulo hunxa
    const wScale = Math.min(width / BASE_WIDTH, isTablet ? 1.4 : 1.25);
    const hScale = Math.min(screenHeight / BASE_HEIGHT, isTablet ? 1.4 : 1.25);

    // Horizontal sizes (padding, radius)
    const s = (size: number) => Math.round(size * wScale);
    // Vertical sizes (heights, margins)
    const vs = (size: number) => Math.round(size * Math.max(hScale, 0.8));
    // Fonts: width ra height ko beech ko balance
    const ms = (size: number, factor = 0.5) =>
      Math.round(size + (s(size) - size) * factor);

    return { isTablet, isLandscape, s, vs, ms };
  }, [width, screenHeight]);

  const { s, vs, ms, isTablet } = r;

  const cardMaxWidth = isTablet ? 560 : 520;
  const inputHeight = Math.max(vs(48), 44); // touch target kamti 44 huna parne
  const gap = vs(16);

  // ---------- Handlers ----------
  function chooseOption(
    title: string,
    options: string[],
    onSelect: (value: string) => void
  ) {
    Alert.alert(title, "Select an option", [
      ...options.map((option) => ({
        text: option,
        onPress: () => onSelect(option),
      })),
      { text: "Cancel", style: "cancel" as const },
    ]);
  }

  function handleNext() {
    if (!dob.trim() || !gender || !activity || !diet) {
      Alert.alert(
        "Complete your profile",
        "Please fill in your date of birth, gender, activity level and dietary preference."
      );
      return;
    }
    router.replace("/(tabs)");
  }

  // ---------- Reusable styles ----------
  const fieldBox = {
    height: inputHeight,
    borderRadius: s(12),
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.card,
    paddingHorizontal: s(12),
  } as const;

  const labelStyle = {
    fontSize: ms(14),
    fontWeight: "500" as const,
    color: COLORS.label,
    marginBottom: vs(8),
  };

  // ---------- Reusable dropdown ----------
  const Dropdown = ({
    value,
    placeholder,
    onPress,
    muted,
  }: {
    value: string;
    placeholder?: string;
    onPress: () => void;
    muted?: boolean;
  }) => (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={[
        fieldBox,
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        },
      ]}
    >
      <Text
        numberOfLines={1}
        style={{
          flex: 1,
          fontSize: ms(14),
          color: value && !muted ? COLORS.title : value ? COLORS.label : COLORS.placeholder,
        }}
      >
        {value || placeholder}
      </Text>
      <Ionicons name="chevron-down" size={ms(18)} color={COLORS.subtitle} />
    </Pressable>
  );

  const avatarSize = Math.min(Math.max(vs(80), 64), 100);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bg }}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.bg} />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center", // tall screen ma card center ma basxa
            paddingHorizontal: s(16),
            paddingVertical: vs(12),
          }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Back button */}
          <View style={{ width: "100%", maxWidth: cardMaxWidth, marginBottom: vs(8) }}>
            <Pressable
              onPress={() => router.back()}
              accessibilityRole="button"
              accessibilityLabel="Go back"
              hitSlop={10}
              style={{
                width: 44,
                height: 44,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="chevron-back" size={ms(24)} color={COLORS.title} />
            </Pressable>
          </View>

          {/* Card */}
          <View
            style={{
              width: "100%",
              maxWidth: cardMaxWidth,
              backgroundColor: "rgba(255,255,255,0.92)",
              borderRadius: s(24),
              paddingHorizontal: s(isTablet ? 28 : 18),
              paddingVertical: vs(22),
            }}
          >
            {/* Heading */}
            <View style={{ alignItems: "center", marginBottom: vs(8) }}>
              <View
                style={{
                  width: avatarSize,
                  height: avatarSize,
                  borderRadius: avatarSize / 2,
                  backgroundColor: COLORS.avatarBg,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="person" size={avatarSize * 0.5} color={COLORS.primary} />
              </View>

              <Text
                style={{
                  marginTop: vs(12),
                  fontSize: ms(20),
                  fontWeight: "700",
                  color: COLORS.title,
                }}
              >
                Profile Setup
              </Text>
              <Text
                style={{
                  marginTop: vs(4),
                  fontSize: ms(14),
                  color: COLORS.subtitle,
                }}
              >
                Add your information
              </Text>
            </View>

            {/* Date of Birth */}
            <Text style={[labelStyle, { marginTop: vs(8) }]}>Date of Birth</Text>
            <TextInput
              value={dob}
              onChangeText={setDob}
              placeholder="DD / MM / YYYY"
              placeholderTextColor={COLORS.placeholder}
              keyboardType="numbers-and-punctuation"
              style={[fieldBox, { fontSize: ms(14), color: COLORS.title }]}
              accessibilityLabel="Date of birth"
            />

            {/* Gender */}
            <Text style={[labelStyle, { marginTop: gap }]}>Gender</Text>
            <Dropdown
              value={gender}
              placeholder="Select gender"
              onPress={() =>
                chooseOption(
                  "Gender",
                  ["Female", "Male", "Non-binary", "Prefer not to say"],
                  setGender
                )
              }
            />

            {/* Height & Weight */}
            <View style={{ flexDirection: "row", marginTop: gap, columnGap: s(12) }}>
              <View style={{ flex: 1 }}>
                <Text style={labelStyle}>Height</Text>
                <Dropdown
                  value={height}
                  muted
                  onPress={() => chooseOption("Height unit", ["cm", "ft / in"], setHeight)}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={labelStyle}>Weight</Text>
                <Dropdown
                  value={weight}
                  muted
                  onPress={() => chooseOption("Weight unit", ["kg", "lb"], setWeight)}
                />
              </View>
            </View>

            {/* Activity Level */}
            <Text style={[labelStyle, { marginTop: gap }]}>Activity Level</Text>
            <Dropdown
              value={activity}
              placeholder="Select activity level"
              onPress={() =>
                chooseOption(
                  "Activity Level",
                  ["Sedentary", "Lightly active", "Moderately active", "Very active"],
                  setActivity
                )
              }
            />

            {/* Dietary Preference */}
            <Text style={[labelStyle, { marginTop: gap }]}>Dietary Preference</Text>
            <Dropdown
              value={diet}
              placeholder="Select preference"
              onPress={() =>
                chooseOption(
                  "Dietary Preference",
                  ["No preference", "Vegetarian", "Vegan", "Non-vegetarian"],
                  setDiet
                )
              }
            />

            {/* Next */}
            <Pressable
              onPress={handleNext}
              accessibilityRole="button"
              style={({ pressed }) => ({
                marginTop: vs(24),
                height: inputHeight,
                borderRadius: s(12),
                backgroundColor: COLORS.primary,
                alignItems: "center",
                justifyContent: "center",
                opacity: pressed ? 0.8 : 1,
              })}
            >
              <Text style={{ fontSize: ms(16), fontWeight: "700", color: "#fff" }}>
                Next
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}