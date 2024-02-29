import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import AppNavigation from "./navigation/appNavigation";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-black">
      <TouchableOpacity className="bg-blue-500 p-3 rounded-lg">
        <Text className="text-white text-3xl font-bold">Felabs Wins</Text>
      </TouchableOpacity>
      {/* <AppNavigation /> */}
      <StatusBar style="auto" />
    </View>
  );
}
