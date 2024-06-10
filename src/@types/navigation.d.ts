export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            statisticsDetails: undefined;
            meal: {
                diet?: DietStorageDTO;
            };
            resultMealSaved: {
                isInDiet: boolean;
            };
            mealDetails: {
                diet: DietStorageDTO;
            };
        }
    }
}