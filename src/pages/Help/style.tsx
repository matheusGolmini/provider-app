import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  buttonDocument: {
    backgroundColor: "#302E4D",
    marginTop: 10,
    width: 300,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
  },
  buttonDocumentText: {
    padding: 8,
    alignItems: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#302E4D",
    marginTop: 10,
    width: 300,
    height: 50,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
  },
  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  header: {
    fontSize: 20,
    color: "#41414d",
    fontWeight: "bold",
    marginBottom: 40,
  },
  subheader: {
    marginTop: 15,
    fontSize: 18,
    color: "#41414d",
    fontWeight: "bold",
    textAlign: "center",
  },
  textInput: {
    marginTop: 20,
    borderWidth: 2,
    width: 300,
    borderColor: "#302E4D",
    padding: 10,
    textAlignVertical: "top",
  },
});

export default styles;
