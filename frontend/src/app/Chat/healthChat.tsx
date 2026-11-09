
import { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

type Message = {
  id: string;
  text: string;
  sender: "user" | "ai";
};

const suggestions = [
  "How can I improve my sleep?",
  "Explain this health term",
  "Help me prepare for my doctor visit",
];

export default function HealthAIChatScreen() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm your health assistant. How can I help you today?",
      sender: "ai",
    },
  ]);

  const scrollRef = useRef<ScrollView>(null);

  const sendMessage = () => {
    const text = message.trim();

    if (!text) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
    };

    setMessages((previous) => [...previous, userMessage]);
    setMessage("");

    // Django AI API will be connected here.
  };

  const handleSuggestion = (question: string) => {
    setMessage(question);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#E8F8F1]">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
      >
        {/* Header */}
        <View className="flex-row items-center border-b border-[#DCEFE7] px-4 py-3">
            <Pressable onPress={()=>router.push({
                pathname:"/(tabs)"
            })}>
  
          
          <Ionicons name="chevron-back" size={23} color="#124A43" />
 </Pressable>
          <Text className="ml-3 text-base font-bold text-[#124A43]">
            Health AI Chat
          </Text>
         
        </View>

        {/* Chat messages */}
        <ScrollView
          ref={scrollRef}
          className="flex-1 px-4 pt-5"
          contentContainerStyle={{ paddingBottom: 20 }}
          keyboardShouldPersistTaps="handled"
          onContentSizeChange={() =>
            scrollRef.current?.scrollToEnd({ animated: true })
          }
          showsVerticalScrollIndicator={false}
        >
          {messages.map((item) => (
            <View
              key={item.id}
              className={`mb-4 flex-row ${
                item.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              {item.sender === "ai" && (
                <View className="mr-2 h-9 w-9 items-center justify-center rounded-full bg-white">
                  <Ionicons
                    name="heart"
                    size={20}
                    color="#07896F"
                  />
                </View>
              )}

              <View
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  item.sender === "user"
                    ? "rounded-br-sm bg-[#07896F]"
                    : "rounded-tl-sm bg-white"
                }`}
              >
                <Text
                  className={`text-xs leading-5 ${
                    item.sender === "user"
                      ? "text-white"
                      : "text-[#315E55]"
                  }`}
                >
                  {item.text}
                </Text>
              </View>
            </View>
          ))}

          {/* Suggestions only on initial chat */}
          {messages.length === 1 && (
            <View className="mt-1">
              {suggestions.map((question) => (
                <Pressable
                  key={question}
                  onPress={() => handleSuggestion(question)}
                  className="mb-2 self-start rounded-full border border-[#BDE6D7] bg-white px-3 py-2"
                >
                  <Text className="text-[10px] font-medium text-[#07896F]">
                    {question}
                  </Text>
                </Pressable>
              ))}
            </View>
          )}
        </ScrollView>

        {/* Message input */}
        <View className="px-3 pb-2 pt-2">
          <View className="min-h-12 flex-row items-center rounded-full border border-[#DCEFE7] bg-white px-3">
            <TextInput
              value={message}
              onChangeText={setMessage}
              placeholder="Type your message..."
              placeholderTextColor="#91AAA0"
              multiline
              className="max-h-20 flex-1 py-5 text-xs outline-none border-none items-center  text-[#124A43]"
            />

            <Pressable
              onPress={sendMessage}
              className="ml-2 h-9 w-9 items-center  justify-center rounded-full bg-[#07896F]"
            >
              <Ionicons
                name="send"
                size={16}
                color="white"
              />
            </Pressable>
          </View>

          <Text className="mt-2 text-center text-[9px] leading-4 text-[#91AAA0]">
            This assistant provides general information and is not
            a substitute for professional medical care.
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
