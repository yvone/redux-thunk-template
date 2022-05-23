import { combineReducers } from 'redux';

import faqReducer from './faq';

const rootReducer = combineReducers({
    faqs: faqReducer,
});

export default rootReducer;