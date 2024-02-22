import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { RootStackParamList } from "./Home";
import EditItemCard from "../EditItemCard";

const EditList = ({ route }: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const listToEdit = route.params.currentList;
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          paddingBottom: 10,
          backgroundColor: "white",
        }}
      >
        Edit Your List
      </Text>
      <FlatList
        data={listToEdit}
        renderItem={({ item }) => {
          return <EditItemCard name={item.name} expiryDate={item.expiryDate} />;
        }}
      />
    </View>
  );
};

export default EditList;

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    padding: 23,
    flex: 1,
  },
});
