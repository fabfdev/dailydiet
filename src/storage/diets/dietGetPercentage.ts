import AsyncStorage from "@react-native-async-storage/async-storage";

import { DIET_COLLECTION } from "@storage/storage.config";
import { dietGetAll } from './dietGetAll';
import { dietGetInDiet } from "./dietGetInDiet";

export async function dietGetPercentage() {
    try {
        const inDiet = await dietGetInDiet();
        const total = await dietGetAll();
        return (inDiet.length / total.length) * 100;
    } catch (error) {
        throw error;
    }
}