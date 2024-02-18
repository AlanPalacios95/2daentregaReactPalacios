import { StyleSheet, TextInput, View } from "react-native";
import { AntDesign, Entypo  } from "@expo/vector-icons";
import { useState } from 'react';
import { Pressable } from 'react-native';


const Search = ({ keyword, onSearch }) => {
    const [input, setInput] = useState("");

    const handleSearch = () => {
      if (input) {
        onSearch(input);
      }
    };

    const removeInput = () => {
        setInput("");
      };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onSearch}
        value={keyword}
        placeholder="Buscar producto..."
      />
      <Pressable onPress={handleSearch}>
          <AntDesign name="search1" size={25} color="black" />
        </Pressable>
        <Pressable onPress={removeInput}>
          <Entypo name="circle-with-cross" size={25} color="black" />
        </Pressable>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    width: "80%",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});