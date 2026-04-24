import { useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Details() {
  const params = useLocalSearchParams();

  const name =
    typeof params.name === "string" ? params.name : params.name?.[0];

  const description =
    typeof params.description === "string"
      ? params.description
      : params.description?.[0];

  const image =
    typeof params.image === "string"
      ? params.image
      : params.image?.[0] || "";

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>{name}</Text>

      <Image
        source={{ uri: image }}
        style={{ width: 200, height: 200, marginVertical: 10 }}
      />

      <Text>{description}</Text>
    </View>
  );
}