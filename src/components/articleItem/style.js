import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  title: {
    flex: 1,
    marginTop: 16,
    paddingVertical: 8,
    borderColor: "#C4C4C4",
    borderRadius: 6,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  containerArticles: {
    flex: 1,
    flexDirection: "row",
  },
  titleAvatar: {
    marginTop: 3,
    marginRight: 10,
    marginLeft: 10,
  },
  containerTitleText: {
    flex: 1,
  },
  containerText: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 5
  }

});

export default styles;
