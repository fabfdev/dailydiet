import AsyncStorage from "@react-native-async-storage/async-storage";

import { DIET_COLLECTION } from "@storage/storage.config";
import { DietStorageDTO } from "./DietStorateDTO";

export async function dietGetAll() {
    try {
        const stored = await AsyncStorage.getItem(DIET_COLLECTION);
        const diets: DietStorageDTO[] = stored ? JSON.parse(stored) : [];
        return diets
    } catch (error) {
        throw error;
    }
}