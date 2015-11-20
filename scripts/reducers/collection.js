import {
  COLLECTION_BUSY,
  COLLECTION_LOADED,
  COLLECTION_READY,
  COLLECTION_MESSAGE
} from "../actions/collection";

const INITIAL_STATE = {
  name: null,
  message: null,
  busy: false,
  schema: {},
  displayFields: [],
  records: [],
};

export function collection(state = INITIAL_STATE, action) {
  switch (action.type) {
  case COLLECTION_READY:
    return {
      ...state,
      name: action.name,
      schema: action.schema,
      config: action.config,
      message: null,
    };
  case COLLECTION_BUSY:
    return {...state, busy: action.flag};
  case COLLECTION_LOADED:
    return {...state, records: action.records};
  case COLLECTION_MESSAGE:
    return {...state, message: action.message};
  default:
    return state;
  }
}

export default collection;
