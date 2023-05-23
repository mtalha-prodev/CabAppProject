import {BACK_CNIC, FRONT_CNIC} from '../actionType';

const initailState = {
  driver: [],
  loading: true,
};

export const driverReducer = (state = initailState, action) => {
  switch (action.type) {
    case FRONT_CNIC:
      return {
        ...state,
        loading: false,
        driver: action.payload,
      };
    case BACK_CNIC:
      return {
        ...state,
        loading: false,
        driver: action.payload,
      };

    default:
      return state;
  }
};
