export const GET_USER = "GET_USER";
export const GET_TOKEN = "GET_TOKEN";

export const userAction = (userDataf) => ({
  type: GET_USER,
  userData: userDataf,
});

export const tokenAction = (userTokenf) => ({
  type: GET_TOKEN,
  userToken: userTokenf,
});
