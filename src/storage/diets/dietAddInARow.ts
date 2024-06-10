import AsyncStorage from "@react-native-async-storage/async-storage";

import { DIET_IN_A_ROW_COLLECTION } from "@storage/storage.config";
import { dietGetInARow } from "./dietGetInARow";

export async function dietAddInARow() {
    try {
        let inARow: number = await dietGetInARow();
        inARow += 1;
        await AsyncStorage.setItem(DIET_IN_A_ROW_COLLECTION, JSON.stringify(inARow));
    } catch (error) {
        throw error;
    }
}