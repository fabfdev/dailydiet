import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { Meal } from '@screens/Meal';
import { MealDetails } from '@screens/MealDetails';
import { MealSaved } from '@screens/MealSaved';
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
            <Screen
                name='meal'
                component={Meal}
            />
            <Screen
                name='resultMealSaved'
                component={MealSaved}
            />
            <Screen
                name='mealDetails'
                component={MealDetails}
            />
        </Navigator>
    )
}