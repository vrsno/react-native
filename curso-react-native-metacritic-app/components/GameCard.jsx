import { StyleSheet, Text, View, Image } from "react-native";

export function GameCard({ game }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <Text style={styles.title}> {gametext} </Text>
      <Text style={styles.score}>{game.score}</Text>
      <Text style={styles.desciption}>{game.description} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 48,
  },

  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: bold,
    marginBottom: 10,
    color: "#fff",
    marginTop: 10,
  },
  desciption: {
    fontSize: 16,
    color: "#fff",
  },
  score: {
    fontSize: 20,
    fontWeight: bold,
    color: "#fff",
    marginTop: 10,
  },
});
