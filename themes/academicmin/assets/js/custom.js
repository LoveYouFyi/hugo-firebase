// Mutation Observer
// https://www.smashingmagazine.com/2019/04/mutationobserver-api-guide/

let mPar = document.getElementById('top');

let options = {
  attributes: true
};

observer = new MutationObserver(mCallback);

function mCallback (mutations) {
  for (let mutation of mutations) {
    if (mutation.type === 'attributes') {
      // Do something here...
      if (mPar.classList.contains('dark')) {
        console.log("I am Dark %%%%%%%%%%%%%%%%%%%%%%%%");

      }
      console.log("I changed $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    }
  }
}

observer.observe(mPar, options);
