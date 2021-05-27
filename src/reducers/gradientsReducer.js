const gradientsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        loading: true,
      }
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        gradients: action.payload
      }
    case "FETCH_SUCCESS_ID":
      return {
        ...state,
        loading: false,
        gradient: action.payload
      }
    case "FETCH_FAILURE":
      return {
        ...state,
        error: action.payload,
      }
    default:
      throw new Error(`Unsupported action type ${action.type}`)
  }
}

export default gradientsReducer;