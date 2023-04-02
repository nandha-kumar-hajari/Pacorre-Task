import { SAVE_EMAIL, SAVE_MOBILE, SAVE_LANGUAGE ,SAVE_USERNAME} from './../actions/types';


const initialState = {
  userName: '',
  email: 'josephp@gmail.cpm',
  mobile: '',
  language:'English'
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
      case SAVE_LANGUAGE:
        return {
          ...state,
          language: action.payload,
        };
    default:
      return state;
  }
};

export default Reducer;
