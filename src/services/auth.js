export const isBrowser = () => typeof window !== "undefined"

/**
 * @desc Get the user
 */
export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

  /**
   * @desc Return the user if the login details are correct
   * @param {@} username The username of the user
   * @param {@} password The password of the user
   */
export const handleLogin = ({ username, password }) => {
  if (username === `marissa` && password === `S3cur3`) {
    return setUser({
      username: `marissa`,
      name: `Marissa Mayer`,
      email: `marissa.mayer@acmecorp.com`,
      password: `S3cur3`,
    })
  }

  return false
}

/**
 * @desc Check if the user is currently logged in or not
 */
export const isLoggedIn = () => {
  const user = getUser()

  return !!user.username
}

export const logout = callback => {
  setUser({})
  callback()
}

/**
 * @desc If the details match those on file, return true. This will allow a password to be "reset"
 * @param {@} emailAddress The email address of the user that wants the password reset
 * @param {@} dob The date of birth of the user
 * @param {@} mothersMaiden The maiden name of the users mother - security question answer
 * @param {@} petName The name of the users pet - security question answer
 */
export const handlePasswordReset = ({ emailAddress, dob, mothersMaiden, petName }) => {
  if (emailAddress.toLowerCase() === `marissa.mayer@acmecorp.com` && dob === '1975-05-30' && mothersMaiden.toLowerCase() === `hunter` && petName.toLowerCase() === `patch`) {
    return true
  }
}