import { View, Text, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Profileheader from '../../components/profile/Profileheader';
import Profilemenuitems from '../../components/profile/Profilemenuitems';
const menuItems = [
  {
    title: "Health History",
    icon: "fitness-outline" as const,
    route: "/Profile/health-history",
  },
  {
    title: "Preferences",
    icon: "options-outline" as const,
    route: "/Profile/preferences",
  },
  {
    title: "Notifications",
    icon: "notifications-outline" as const,
    route: "/Profile/notifications",
  },
  {
    title: "Privacy & Security",
    icon: "shield-checkmark-outline" as const,
    route: "/Profile/privacy-security",
  },
  {
    title: "Settings",
    icon: "settings-outline" as const,
    route: "/Profile/settings",
  },
] as const;
export default function Profile() {
    const user = {
    name: "lov karki",
    email: "lov@example.com",
  };
  return (
    <SafeAreaView className='flex-1 bg-[#E8F8F1]'>
      <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{padding: 15, paddingBottom: 25}}
      >
         {/* header  */}
         <View className='mb-5 flex-row items-center'>
          <Ionicons
          name='heart'
          size={20}
          color="#07896F"
          />
            <Text className="ml-2 text-base font-bold text-[#124A43]">
            My Profile
          </Text>

         </View>
         {/* profile information  */}
         <Profileheader
         name={user.name}
         email={user.email}
         />

         {/* menus  */}
         <View className='px-4 rounded-2xl bg-white'>
          {menuItems.map((item) => (
  <Profilemenuitems
    key={item.route}
    title={item.title}
    icons={item.icon}
    onPress={() => router.push(item.route)}
  />
))}

         </View>
      </ScrollView>

    </SafeAreaView>
  )
}