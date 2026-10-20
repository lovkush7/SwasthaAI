
import { useState } from "react";
import { router } from "expo-router";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StatusBar,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
// import AppInput from "../../src/components/ui/AppInput";
// import AppButton from "../../src/components/ui/AppButton";
import AppInputs from "../../components/ui/AppInputs";
import AppButton from "../../components/ui/AppButton";

export default function SignUpScreen() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    if (!fullName.trim() || !email.trim() || !password) {
      Alert.alert("Missing information", "Please fill in all fields.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      Alert.alert("Invalid email", "Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      Alert.alert("Weak password", "Use at least 8 characters.");
      return;
    }

    // Django registration API yaha connect garne.
    Alert.alert("Ready", "Connect your registration API here.");
  }

  return (
    <SafeAreaView className="flex-1 bg-[#E8F8F1]">
      <StatusBar barStyle="dark-content" backgroundColor="#E8F8F1" />

      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          padding: 14,
        }}
      >
        <View className="rounded-2xl bg-white px-5 py-6">
          {/* Logo */}
          <View className="mb-3 h-8 w-8 items-center justify-center rounded-full bg-[#DDF5EC]">
            <Ionicons name="heart" size={21} color="#07896F" />
          </View>

          <Text className="text-xl font-bold text-[#173F38]">
            Create Account
          </Text>
          <Text className="mb-5 mt-1 text-xs text-[#78968C]">
            Start your journey to better health
          </Text>

          <AppInputs
            label="Full Name"
            placeholder="John Doe"
            value={fullName}
            onChangeText={setFullName}
          />

          <AppInputs
            label="Email"
            placeholder="you@example.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <AppInputs
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <AppButton title="Sign Up" onPress={handleSignUp} />

          {/* Divider */}
          <View className="my-3 flex-row items-center">
            <View className="h-px flex-1 bg-[#DCEBE5]" />
            <Text className="mx-3 text-xs text-[#78968C]">or</Text>
            <View className="h-px flex-1 bg-[#DCEBE5]" />
          </View>

          <Pressable
            onPress={() =>
              Alert.alert("Google Sign Up", "Connect Google authentication.")
            }
            className="mb-2 h-10 flex-row items-center justify-center rounded-xl border border-[#DCEBE5]"
          >
            <FontAwesome name="google" size={15} color="#4285F4" />
            <Text className="ml-2 text-xs font-semibold text-[#315E55]">
              Continue with Google
            </Text>
          </Pressable>

          <Pressable
            onPress={() =>
              Alert.alert("Apple Sign Up", "Connect Apple authentication.")
            }
            className="h-10 flex-row items-center justify-center rounded-xl border border-[#DCEBE5]"
          >
            <FontAwesome name="apple" size={17} color="#111827" />
            <Text className="ml-2 text-xs font-semibold text-[#315E55]">
              Continue with Apple
            </Text>
          </Pressable>

          <View className="mt-5 flex-row justify-center">
            <Text className="text-xs text-[#78968C]">
              Already have an account?{" "}
            </Text>
            <Text
              onPress={() => router.push("/(auth)/login")}
              className="text-xs font-bold text-[#07896F]"
            >
              Login
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
