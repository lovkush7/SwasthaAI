import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
type props ={
    label: string
    placeholder: string,
    value: string
    onChangeText: (value: string)=>void;
    secureTextEntry?: boolean
    keyboardType?: "default"| "email-address"
}

export default function AppInputs({label,placeholder,value,onChangeText,secureTextEntry=false,keyboardType="default"}:props) {
    const [visible , setVisible] = useState(false)
  return (
    <View className='mb-3'>
      <Text className='mb-1.5 text-xs font-medium text-[#315E55]'>
        {label}
      </Text>
      <View className='h-11 flex-row items-center rounded-xl border bg-white px-3 border-[#DCEBE5]'>
         <TextInput
          className='flex-1 py-0 text-sm text-[#124A43] outline-none border-none'
          placeholder={placeholder}
          value={value}
          placeholderTextColor="#9BAFA9"
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          autoCapitalize={
            keyboardType == "email-address" ? "none" : "sentences"
          }
          autoCorrect={false}
          secureTextEntry={secureTextEntry && !visible}
          />
          {
            secureTextEntry && (
                <Pressable onPress={()=>setVisible(!visible)} hitSlop={10}>
                    <Ionicons
                    name={visible ? "eye-off-outline" : "eye-outline"}
                     size={18}
              color="#78968C"
                    />


                </Pressable>
            )
          }
      </View>
    </View>
  )
}