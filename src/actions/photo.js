
// Constants
import apiRequest from "../components/apiRequest";

export const LIST_START = 'LIST_START';
export const LIST_SUCCESS = 'LIST_SUCCESS';
export const LIST_FAILURE = 'LIST_FAILURE';

export function getList() {
    return (dispatch) => {
        dispatch(startList());

         try {
            const request = apiRequest('GET', 'https://jsonplaceholder.typicode.com/photos');
            request.then(response => { dispatch(listSuccess(response.data)); return response.data; });
        } catch (err) {
            return dispatch(listFailure(err));
        }
    }
}

// Actions
export const startList = () => ({
  type: LIST_START,
    data: [],
});

export const listSuccess = data => ({
  type: LIST_SUCCESS,
  data,
});

export const listFailure = error => ({
  type: LIST_FAILURE,
  error,
});
