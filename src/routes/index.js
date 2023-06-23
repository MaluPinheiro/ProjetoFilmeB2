import AuthRoutes from "./AuthPoutes";
import AppRoutes from "./AppRoutes";
import { useAuth } from "../contexts/AuthContext";
import { ActivityIndicator, View } from "react-native";

export default function Routes(){

    const { logged, loading } = useAuth()

    if(loading){
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator size={'large'}/> 
            </View>
        )
    }
    
    return(
        logged == true ? <AppRoutes/> : <AuthRoutes/>
    )
}