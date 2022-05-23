import {
    apiGetFaqs,
    apiCreateFaq,
    apiUpdateFaq,
    apiRemoveFaq,
} from '../api';

/** GET FAQS */
export const getFaqs = () => {
    return {
        type: 'GET_FAQS'
    }
}

/** CREATE ONE FAQ */
export const createFaq = (faq) => {
    // Mock id - random number
    const id = Math.floor(Math.random() * 1000);

    return {
        type: 'ADD_FAQ',
        payload: {
            id,
            ...faq,
        }
    };
}

/** UPDATE ONE FAQ */
export const updateFaq = (newFaq) => {
    return {
        type: 'UPDATE_FAQ',
        payload: newFaq
    };
}

/** REMOVE ONE FAQ */
export const removeFaq = (faq) => {
    return {
        type: 'REMOVE_FAQ',
        payload: faq
    };
}
export const removeAll = () => {
    return {
        type: 'REMOVE_ALL'
    };
}