import AsyncStorage from "@react-native-async-storage/async-storage";

import { DIET_COLLECTION } from "@storage/storage.config";
import { dietGetAll } from './dietGetAll';
import { DietStorageDTO } from "./DietStorateDTO";

export async function dietAddByDate(newDiet: DietStorageDTO) {
    try {
        const storedDietsByDate = await dietGetAll();
        const store = JSON.stringify([...storedDietsByDate, newDiet]);
        await AsyncStorage.setItem(DIET_COLLECTION, store);
    } catch (error) {
        throw error;
    }
}