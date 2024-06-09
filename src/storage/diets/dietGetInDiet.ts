import AsyncStorage from "@react-native-async-storage/async-storage";

import { DIET_COLLECTION } from "@storage/storage.config";
import { DietStorageDTO } from "./DietStorateDTO";

export async function dietGetInDiet() {
    try {
        const stored = await AsyncStorage.getItem(DIET_COLLECTION);
        const diets: DietStorageDTO[] = stored ? JSON.parse(stored) : [];
        return diets.filter((diet) => diet.status);
    } catch (error) {
        throw error;
    }
}