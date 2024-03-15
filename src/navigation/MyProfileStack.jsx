import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import MyProfile from "../screens/MyProfile";



const Stack = createNativeStackNavigator();

const MyProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="My Profile"
      screenOptions={{ header: () => <Header title="My Profile" /> }}
    >
      <Stack.Screen name="My Profile" component={MyProfile}/>
    </Stack.Navigator>
  );
};

export default MyProfileStack;
