import { useRouter } from "expo-router";
import { useContext } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { ExerciseContext } from "./store";

export default function Home() {
  const router = useRouter();
  const { exercises } = useContext(ExerciseContext);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Exercises</Text>

      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({ pathname: "/details", params: item })
            }
            style={{ padding: 10, borderBottomWidth: 1 }}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        onPress={() => router.push("/add")}
        style={{ backgroundColor: "#335765",  padding: 12,
          borderRadius: 8, alignItems: "center", marginTop: 10,}}
      >
        <Text style={{ color: "white" }}>Add Exercise</Text>
      </TouchableOpacity>
    </View>
  );
}