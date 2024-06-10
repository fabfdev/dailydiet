import AsyncStorage from "@react-native-async-storage/async-storage";

import { DIET_COLLECTION } from "@storage/storage.config";
import { dietGetAll } from "./dietGetAll";
import { DietStorageDTO } from "./DietStorateDTO";
import { dietRemove } from "./dietRemove";

export async function dietUpdate(diet: DietStorageDTO, newDiet: DietStorageDTO) {
    try {
        await dietRemove(diet);
        const storedDiets = await dietGetAll();
        const store = JSON.stringify([...storedDiets, newDiet]);
        await AsyncStorage.setItem(DIET_COLLECTION, store);
    } catch (error) {
        throw error;
    }
}