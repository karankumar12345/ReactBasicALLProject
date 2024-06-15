const dummyApiResponse = {
    showLightAndDarkMode: true,
    TABS: true,
    showRandomColor: true,
    showTreeView: false,
    tictac:true
  };
  
  function featureFlagsDataServiceCall() {
    return new Promise((resolve, reject) => {
      if (dummyApiResponse) {
        setTimeout(() => resolve(dummyApiResponse), 500);
      } else {
        reject("Some Error Occurred. Please Try Again.");
      }
    });
  }
  
  export default featureFlagsDataServiceCall;
  