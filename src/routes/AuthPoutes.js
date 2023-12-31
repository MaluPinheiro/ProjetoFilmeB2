import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import ForgotPassword from "../pages/ForgotPasswordPage";

const Stack = createNativeStackNavigator();

export default function AuthRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}