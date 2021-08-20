import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  containerLogo: {
    flexDirection: "row",
    marginTop: 16,
    alignItems: 'center',
    justifyContent: "space-between",
  },
  title: {
    width: 250,
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#b7e2f1",
    color: "#20232a",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold"
  },
  containerButton: {
    flexDirection: "row",
    marginTop: 16,
    alignItems: 'center',
    justifyContent: "space-between",
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
});

export default styles;
