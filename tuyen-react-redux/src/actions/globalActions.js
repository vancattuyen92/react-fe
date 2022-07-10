// TYPES
export const SET_LOADING = 'GLOBAL/SETLOADING';

//ACTION CREATORS
export function setLoading(loading) {
    return {
        type: SET_LOADING,
        payload: loading
    }
}