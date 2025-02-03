import { Dimensions, Platform, StyleSheet } from "react-native";
import { colors } from "./global";

export const SCREEN_WIDTH = Dimensions.get("screen").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  innerContainer: {
    gap: 16,
  },
  inputContainer: {
    marginTop: 32,
  },
  input: {
    padding: 16,
    height: 50,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border_gray,
    backgroundColor: colors.light_gray,
  },
  focused: {
    backgroundColor: colors.white,
    borderColor: colors.orange,
  },
  buttonContainer: {
    marginTop: 42,
  },
  formContainer: {
    width: SCREEN_WIDTH,
    height: "70%",
    backgroundColor: colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 92,
  },
  formContainerLogin: {
    width: SCREEN_WIDTH,
    height: "50%",
    backgroundColor: colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  avatarContainer: {
    position: "relative",
    marginTop: -152,
    marginBottom: 32,
    alignSelf: "center",
    width: 120,
    height: 120,
    backgroundColor: colors.light_gray,
    borderRadius: 16,
  },
  innerScreenContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  plusIcon: {
    position: "absolute",
    right: -12,
    bottom: 14,
    width: 25,
    height: 25,
  },
  closeIcon: {
    position: "absolute",
    right: -7,
    bottom: 18,
    width: 25,
    height: 25,
  },
  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 36,
    textAlign: "center",
  },
  baseText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
  },
  buttonText: {
    color: colors.white,
    textAlign: "center",
  },
  passwordButtonText: {
    color: colors.blue,
  },
  passwordButton: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  linkText: {
    textDecorationLine: "underline",
  },
  logoutBtn: {
    width: 24,
    height: 24,
  },
  tabBar: {
    borderTopWidth: 1,
    borderTopColor: colors.text_gray,
    height: 83,
    paddingTop: 9,
    paddingRight: 48,
    paddingLeft: 48,
  },
  tabHeader: {
    borderBottomWidth: 1,
    borderBottomColor: colors.text_gray,
  },
  tabHeaderTitle: {
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 22,
    color: colors.black_primary,
  },
  tabIcon: {
    width: 70,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  actionContainer: {
    position: "absolute",
    left: 16,
    top: 48,
    gap: 16,
  },
  actionBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.orange,
  },
  createPostsContainer: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: colors.white,
    paddingTop: 32,
    paddingBottom: 34,
    paddingHorizontal: 16,
  },
  postsContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 34,
    backgroundColor: colors.white,
  },
  cameraContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    height: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border_gray,
    backgroundColor: colors.light_gray,
    marginBottom: 8,
    overflow: "hidden",
  },
  userContainer: {
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 32,
  },
  postPhoto: {
    marginBottom: 8,
    width: "100%",
    height: 240,
    overflow: "hidden",
    objectFit: "cover",
    borderRadius: 8,
  },
  postTitle: {
    marginBottom: 11,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: colors.black_primary,
  },
  camera: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    objectFit: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  takePhotoContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 10,
  },
  photoBtnContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  textUpload: {
    marginBottom: 32,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
    color: colors.text_gray,
  },
  createPostInput: {
    marginBottom: 32,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.text_gray,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 18.75,
    color: colors.black_primary,
  },
  pinIcon: {
    position: "absolute",
    ...Platform.select({
      ios: {
        top: -3,
      },
      android: {
        top: 7,
      },
    }),
  },
  createBtn: {
    borderRadius: 100,
    paddingTop: 16,
    paddingBottom: 16,
  },
  createBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textAlign: "center",
  },
  msg: {
    textAlign: "center",
    paddingBottom: 24,
  },
  resetBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    backgroundColor: colors.light_gray,
    borderRadius: 20,
    marginHorizontal: "auto",
  },
  avatarPhoto: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  userData: {
    gap: 0,
  },
  userName: {
    color: colors.black_primary,
    fontFamily: "Roboto-Bold",
    fontSize: 13,
  },
  userEmail: {
    color: colors.black_80,
    fontFamily: "Roboto-Regular",
    fontSize: 11,
  },
  place: {
    color: colors.black_primary,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginLeft: 4,
    textDecorationLine: "underline",
  },
  counter: {
    color: colors.text_gray,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginLeft: 6,
  },
  interactionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  commentButton: {
    flexDirection: "row",
    alignItems: "center",
  },
});

/*  */
