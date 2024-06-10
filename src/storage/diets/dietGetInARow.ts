import AsyncStorage from "@react-native-async-storage/async-storage";

import { DIET_IN_A_ROW_COLLECTION } from "@storage/storage.config";

export async function dietGetInARow() {
    try {
        const stored = await AsyncStorage.getItem(DIET_IN_A_ROW_COLLECTION);
        const inARow = stored ? JSON.parse(stored) : 0;
        return inARow;
    } catch (error) {
        throw error;
    }
}