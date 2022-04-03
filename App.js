import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ListItem from "./components/ListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        title=" 画面左下のQRコードをExpoClientのQRリーダーで読み込むと、実機で動作確認ができます。
          また実機のExpoClientでExpoのアカウントにログインしておくと、QRコード読み込まなくても開発中のアプリケーションが一覧に同期されます。"
        imageUrl="https://picsum.photos/200/300"
        author="SampleNews"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  itemContainer: {
    height: 100,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
  },

  leftContainer: {
    width: 100,
  },

  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },

  photo: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 16,
  },

  subText: {
    fontSize: 10,
    color: "gray",
  },
});
