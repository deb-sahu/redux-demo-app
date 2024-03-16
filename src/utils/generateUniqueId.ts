import { v4 as uuidv4 } from 'uuid';

// Function to generate a unique ID
export const generateUniqueId = (): string => {
    return uuidv4();
};
