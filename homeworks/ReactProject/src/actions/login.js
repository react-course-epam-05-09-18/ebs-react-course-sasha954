export const login = ({login, password}) => {
  const userData = { user: login, password }
  return dispatch => {
    return fetch('https://flatearth-api.herokuapp.com/api/v1/auth/login', {
            headers: { 
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(userData)})
            .then((response) => {
                if(!response.ok) {
                    throw Error(response.statusText)
                }
                return response.json()
            });
  }
}