import AsyncStorage from "@react-native-async-storage/async-storage";

import { DIET_COLLECTION } from "@storage/storage.config";
import { DietStorageDTO } from "./DietStorateDTO";
import { dietGetAll } from "./dietGetAll";

export async function dietRemove(diet: DietStorageDTO) {
    try {
        const stored = await dietGetAll();
        const filter = stored.filter(item => item.name !== diet.name)
        const result = JSON.stringify(filter);

        await AsyncStorage.setItem(DIET_COLLECTION, result);
    } catch (error) {
        throw error;
    }
}