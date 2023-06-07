const initialState = {
    competitions: [],
    participants: [],
    loading: false,
    error: null,
  };
  
  const competitionsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_COMPETITIONS_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_COMPETITIONS_SUCCESS':
        return {
          ...state,
          competitions: action.payload,
          loading: false,
          error: null,
        };
      case 'FETCH_COMPETITIONS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case 'UPDATE_PARTICIPANTS':
            return {
              ...state,
              participants: action.payload, 
            };
      default:
        return state;
    }
  };
  
  export default competitionsReducer;
  