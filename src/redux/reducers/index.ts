import { SAVE_EMAIL, SAVE_MOBILE, SAVE_ADDRESS ,SAVE_USERNAME} from './../actions/types';


const initialState = {
  userName: '',
  email: '',
  mobile: '',
  address: ''
};

//Passing and initiak state to reducer and dispatching relevant action
const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SAVE_USERNAME:
      return {
        ...state,
        userName: action.payload,
      };

    case SAVE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    case SAVE_MOBILE:
      return {
        ...state,
        mobile: action.payload,
      };
      case SAVE_ADDRESS:
        return {
          ...state,
          address: action.payload,
        };
    default:
      return state;
  }
};

export default Reducer;
