import { combineReducers } from 'redux';

/* app reducers */
import BannerReducer from './reducers/bannerReducer';

const store = combineReducers({
    banner: BannerReducer
});

export default store;