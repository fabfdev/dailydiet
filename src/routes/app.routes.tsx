import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { StatisticsDetails } from '@screens/StatisticsDetails';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen 
                name="home" 
                component={Home} 
            />
            <Screen 
                name="statisticsDetails" 
                component={StatisticsDetails} 
            />
        </Navigator>
    )
}