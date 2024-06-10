import AsyncStorage from "@react-native-async-storage/async-storage";

import { DIET_IN_A_ROW_COLLECTION } from "@storage/storage.config";

export async function dietRemoveInARow() {
    try {
        await AsyncStorage.setItem(DIET_IN_A_ROW_COLLECTION, JSON.stringify(0));
    } catch (error) {
        throw error;
    }
}