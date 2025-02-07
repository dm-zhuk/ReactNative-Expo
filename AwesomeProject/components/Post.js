import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import Feather from "@expo/vector-icons/Feather";
import { colors } from "../styles/global";

export const Post = ({ data }) => {
  const { setTabBar } = useAuth();
  const navigation = useNavigation();
  const { id, image, title, address, comments } = data;
  const hasComments = comments?.length > 0;

  const openComments = () => {
    navigation.navigate("Comments", { postId: id });
    setTabBar("none");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.text}>{title}</Text>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.horizontalWrapper}
          onPress={openComments}>
          <Feather
            size={24}
            name="message-circle"
            color={hasComments ? colors.orange : colors.text_gray}
          />
          <Text style={[styles.counter, hasComments && styles.orangeText]}>
            {comments?.length}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.horizontalWrapper}>
          <Feather name="map-pin" size={24} color={colors.text_gray} />
          <Text style={[styles.counter, styles.address]}>{address}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
  },
  image: {
    width: "100%",
    height: 240,
    borderRadius: 12,
  },
  text: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: "700",
    color: colors.black_primary,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  horizontalWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  counter: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "500",
    color: colors.text_gray,
  },
  address: {
    color: colors.black_primary,
    textDecorationLine: "underline",
  },
  orangeText: {
    color: colors.orange,
  },
});
