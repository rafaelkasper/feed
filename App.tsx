import { StyleSheet, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feed from "./src/screens/Feed";

export default function App() {
  const data = [
    {
      id: "1",
      avatar: "https://avatars.githubusercontent.com/u/42684330?v=4",
      username: "Rafael Kasper",
      comments: 10,
      reposts: 99,
      likes: 1200,
      text: "Conteúdo da postagem 1",
      image: "https://www.senacrs.com.br/assets/images/senac_logo_new.png",
    },
    {
      id: "2",
      avatar:
        "https://robohash.org/e174e9364d38487c8d533c53cf8b6048?set=set4&bgset=&size=400x400",
      username: "Gabriel",
      comments: 8,
      reposts: 54,
      likes: 10,
      text: "Conteúdo da postagem 2",
      image: "https://reactnative.dev/img/tiny_logo.png",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Feed
              avatar={item.avatar}
              username={item.username}
              comments={item.comments}
              reposts={item.reposts}
              likes={item.likes}
              text={item.text}
              image={item.image}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1C",
    alignItems: "center",
    justifyContent: "center",
  },
});
