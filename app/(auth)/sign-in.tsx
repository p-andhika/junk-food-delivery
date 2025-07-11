import CustomInput from "@/components/custom-input";
import { router } from "expo-router";
import { View, Text, Button } from "react-native";

const SignIn = () => {
  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <Text>Sign In</Text>
      <Button title="Sign Up" onPress={() => router.push("/sign-up")} />

      <CustomInput
        placeholder="Enter your email"
        value=""
        onChangeText={(text) => {}}
        label="Email"
        keyboardType="email-address"
      />
    </View>
  );
};

export default SignIn;
