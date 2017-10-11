export const loginRequest = async (login, password) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 200)
  }).then(() => {
    if (login === 'przeor' && password === 'mwp.io') {
      return 'www.mwp.io' // just a mocked token
    } else {
      return 'invalid' // mocked non successful login
    }
  })
}
