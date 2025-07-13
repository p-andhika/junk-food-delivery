import CustomHeader from "@/components/custom-header";
import { useCartStore } from "@/store/cart.store";
import { Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Cart = () => {
  const { items, getTotalItems, getTotalPrice } = useCartStore();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={items}
        renderItem={({ item }) => {
          return <Text>Cart Item</Text>;
        }}
        keyExtractor={(item) => item.id}
        contentContainerClassName="pb-28 px-5 pt-5"
        ListHeaderComponent={() => <CustomHeader title="Your Cart" />}
      />
    </SafeAreaView>
  );
};

export default Cart;
