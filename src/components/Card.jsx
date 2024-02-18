import { StyleSheet, View } from 'react-native';

const Card = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    width: "%100",
    shadowRadius: 7.49,
    elevation: 12,
    margin: 20,
    borderRadius: 20,
    padding: 20,
    backgroundColor: "white",
  },

});