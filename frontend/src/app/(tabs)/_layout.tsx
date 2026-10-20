import { View, Text } from 'react-native'
import React from 'react'
import { Color, Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function Tabslayout() {
  return (
   <Tabs
   screenOptions={
    {
      headerShown: false,
       tabBarActiveTintColor: "#07896F",
        tabBarInactiveTintColor: "#91A9A0",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopColor: "#DCEFE7",
          height: 70,
          paddingTop: 5,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
            fontSize: 10,
  fontWeight: "600",
  lineHeight: 14
        },
    }
   }
   >
   
    <Tabs.Screen
    name="index"
    options={{
        title: "Home",
        tabBarIcon: ({color,size})=>(
          <Ionicons name="home"  size={size} color={color}/>
  )}
    }
    />
      <Tabs.Screen
        name="My-health"
        options={{
          title: "My Health",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Reminders"
        options={{
          title: "Reminders",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
   </Tabs>
  )
}