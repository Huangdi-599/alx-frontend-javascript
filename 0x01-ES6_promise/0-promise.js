function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const response = {
          status: 200,
          data: 'Response data from API'
        };
        
        
        resolve(response);
        
        
      }, 2000); 
    });
  }
  
  export default getResponseFromAPI;  