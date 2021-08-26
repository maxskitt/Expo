import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  containerButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  jobSearch: {
    fontFamily: 'SFProDisplayBold',
    color: '#636363',
    fontSize: 16,
    textTransform: 'uppercase',
    marginBottom: 10
  },
  searchInput: {
    fontFamily: 'SFProDisplayRegular',
    color: '#636363',
    fontSize: 14,

  },
  searchInputContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#EAEAEA',
    borderRadius: 8,
  },
  containerSearch: {
    flexDirection: "row",
    height: 50,
  },
  containerSearchBar: {
    flex: 0.88,
  },
  containerSearchBarButton: {
    flex: 0.12,
    backgroundColor: "#FFC803",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  containerSort: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  sortText: {
    fontFamily: 'SFProDisplayBold',
    color: '#636363',
    fontSize: 14,
  },
  sortPosted: {
    flexDirection: "row",
    alignItems: "center",
  },
  sortPostedText: {
    fontFamily: 'SFProDisplayRegular',
    color: '#636363',
    fontSize: 14,
  }
});

export default styles;


// title: {
//   marginTop: 16,
//     paddingVertical: 8,
//     borderColor: "#C4C4C4",
//     borderRadius: 6,
//     backgroundColor: "#FFFFFF",
//     shadowColor: "#000",
//     shadowOffset: {
//     width: 0,
//       height: 1,
//   },
//   shadowOpacity: 0.22,
//     shadowRadius: 2.22,
//
//     elevation: 3,
// },
// containerTitleText: {
//   flex: 1,
// },
// titleAvatar: {
//   marginTop: 3,
//     marginRight: 10,
//     marginLeft: 10,
// },
// containerText: {

//
// },
// titleText: {
//   fontFamily: 'Montserrat',
//     fontSize: 12,
// },
// containerButton: {
//   flex: 1,
//     flexDirection: "row",
//   // marginTop: 16,
//   // alignItems: 'center',
//   // justifyContent: "flex-end",
// },
// tinyLogo: {
//   width: 30,
//     height: 30,
// },
