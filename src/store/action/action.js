export const GET_USER = "GET_USER"; 
export const GET_TOKEN = "GET_TOKEN"; 
export const GET_CITYES = "GET_CITYES";
export const GET_HOUSE = "GET_HOUSE";
 
export const userAction = (userDataf) => ({ 
  type: GET_USER, 
  userData: userDataf, 
}); 
 
export const tokenAction = (userTokenf) => ({ 
  type: GET_TOKEN, 
  userToken: userTokenf, 
}); 
 
export const cityesAction = (cityDataf) => ({ 
  type:GET_CITYES,  
  cityData:cityDataf  

});

export const houseAction = (usersHouse) => ({
  type: GET_HOUSE,
  userHouse:usersHouse,
});

