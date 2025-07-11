import CustomButton from "@/components/custom-button";
import CustomInput from "@/components/custom-input";
import { Link } from "expo-router";
import { View, Text } from "react-native";

const SignIn = () => {
  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput
        placeholder="Enter your email"
        value=""
        onChangeText={(text) => {}}
        label="Email"
        keyboardType="email-address"
      />

      <CustomInput
        placeholder="Enter your password"
        value=""
        onChangeText={(text) => {}}
        label="Password"
        secureTextEntry
      />

      <CustomButton title="Sign In" />

      <View className="flex justify-center mt-5 flex-row gap-2">
        <Text className="base-regular text-gray-100">
          Don&lsquo;t have account?
        </Text>
        <Link href="/sign-up" className="base-bold text-primary">
          Sign Up
        </Link>
      </View>
    </View>
  );
};

export default SignIn;
