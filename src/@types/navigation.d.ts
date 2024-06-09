export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            statisticsDetails: undefined;
            meal: undefined;
            resultMealSaved: {
                isInDiet: boolean;
            };
            mealDetails: {
                diet: DietStorageDTO;
            };
        }
    }
}