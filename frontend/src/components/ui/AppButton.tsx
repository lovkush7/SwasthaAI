import { View, Text, Pressable } from 'react-native'

type Appbuttonprops ={
    title: string;
    onPress: () => void;
}

export default function AppButton({
    title, onPress
}: Appbuttonprops) {
  return (
    <Pressable 
    onPress={onPress}
    className='w-full items-center justify-center rounded-xl bg-[#07896F] py-3.5 active:opacity-50'>
        <Text className='text-sm font-bold text-white'>{title}</Text>
    </Pressable>
  )
}