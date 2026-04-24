import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { ExerciseContext } from "./store";

export default function Add() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const { setExercises } = useContext(ExerciseContext);
  const router = useRouter();

  const handleAdd = () => {
    if (!name || !desc) {
      alert("Fill all fields");
      return;
    }

    setExercises((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        name,
        description: desc,
        image: "https://via.placeholder.com/150",
      },
    ]);

    router.back();
  };

  return (
    <View style={{ padding: 20 }}>
      <Text >Name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <Text>Description:</Text>
      <TextInput
        value={desc}
        onChangeText={setDesc}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <Pressable
        onPress={handleAdd}
        style={{
          backgroundColor: "#335765",
          padding: 12,
          borderRadius: 8,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Add Exercise
        </Text>
      </Pressable>
    </View>
  );
}