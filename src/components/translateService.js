// // translateService.js

// import axios from 'axios';

// const azureTranslateEndpoint = process.env.REACT_APP_AZURE_TRANSLATE_ENDPOINT;
// const azureTranslateSubscriptionKey = process.env.REACT_APP_AZURE_TRANSLATE_SUBSCRIPTION_KEY;

// export async function translateText(text, toLanguage) {
//   try {
//     const response = await axios.post(
//         `${azureTranslateEndpoint}/translate?api-version=3.0&to=${toLanguage}`,
//         [{ text }],
//         {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Ocp-Apim-Subscription-Key': azureTranslateSubscriptionKey ,
//             },
//         }
//     );

//     // Extract the translated text from the response
//     const translatedText = response.data[0].translations[0].text;

//     return translatedText;
//   } catch (error) {
//     console.error('Translation error:', error);
//     throw error;
//   }
// }


// import axios from "axios";

// const translateService = {
//   translateText: async (text, fromLanguage, toLanguage) => {
//     const response = await axios.post(
//       process.env.REACT_APP_AZURE_TRANSLATE_ENDPOINT,
//       [
//         {
//           Text: text,
//         },
//       ],
//       {
//         headers: {
//           "Ocp-Apim-Subscription-Key":
//             process.env.REACT_APP_AZURE_TRANSLATE_SUBSCRIPTION_KEY,
//           "Content-type": "application/json",
//         },
//         params: {
//           "api-version": "3.0",
//           from: fromLanguage,
//           to: toLanguage,
//         },
//       }
//     );
//     return response.data[0].translations[0].text;
//   },
// };

// export default translateService;

// document.getElementById('translateButton').addEventListener('click', translatePage);

// function translatePage() {
//     const subscriptionKey = '9d3695dd6faf438b886c1d03eacf2249';
//     const languageSelect = document.getElementById('languageSelect');
//     const targetLanguage = languageSelect.value;

//     const endpoint = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=' + targetLanguage;

//     // Selectively translate text content of specific elements
//     const elementsToTranslate = document.querySelectorAll('h1, button, label, input[type="file"]');

//     const textArray = Array.from(elementsToTranslate).map(element => {
//         return { 'Text': element.innerText };
//     });

//     fetch(endpoint, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Ocp-Apim-Subscription-Key': subscriptionKey,
//                 'Ocp-Apim-Subscription-Region': 'centralindia', // Replace with your Azure region code
//             },
//             body: JSON.stringify(textArray),
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(data => {
//             if (data && data.length > 0) {
//                 data.forEach((translation, index) => {
//                     const translatedText = translation.translations[0].text;
//                     elementsToTranslate[index].innerText = translatedText;
//                 });
//             } else {
//                 console.error('Invalid response format:', data);
//             }
//         })
//         .catch(error => console.error('Error:', error));
// }


// translateService.js
// const translateService = async (subscriptionKey = '9d3695dd6faf438b886c1d03eacf2249', targetLanguage, elementsToTranslate, translatedLanguage) => {
//     const endpoint = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=' + targetLanguage;
  
//     const textArray = elementsToTranslate.map((element) => {
//       return { 'Text': element.innerText };
//     });
  
//     try {
//       const response = await fetch(endpoint, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Ocp-Apim-Subscription-Key': subscriptionKey,
//           'Ocp-Apim-Subscription-Region': 'centralindia', // Replace with your Azure region code
//         },
//         body: JSON.stringify(textArray),
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       const data = await response.json();
  
//       if (data && data.length > 0) {
//         return data.map((translation) => translation.translations[0].text);
//       } else {
//         console.error('Invalid response format:', data);
//         return [];
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       return [];
//     }
//   };
  
// export { translateService };
  

// import axios from 'axios';

// const translateService = async (subscriptionKey ='97a533a5-0b5c-4e8b-b452-ece3152c8539', endpoint, text, targetLanguage) => {
//  endpoint = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=' 
//   const headers = {
//     'Ocp-Apim-Subscription-Key': subscriptionKey,
//     'Content-type': 'application/json',
//     'Ocp-Apim-Subscription-Region': 'eastus'
//   };

//   const body = [
//     // {
//     //   text,
//     // },
//     text
//   ];

//   try {
//     const response = await axios.post(
//       `${endpoint}${targetLanguage}`,
//       body,
//       { headers }
//     );

//     console.log( response.data[0].translations[0].text);
//   } catch (error) {
//     console.error('Translation error:', error);
//     return text; // Fallback to original text if translation fails
//   }
// };

// export { translateService };


import axios from 'axios';


const { v4: uuidv4 } = require('uuid');

  const azureTranslateEndpoint = process.env.REACT_APP_AZURE_TRANSLATE_ENDPOINT || "https://api.cognitive.microsofttranslator.com";
  const azureTranslateSubscriptionKey = process.env.REACT_APP_AZURE_TRANSLATE_SUBSCRIPTION_KEY || "a419c35f1c984ad4b6aea3ae644dba5d";
  const azureTranlateSubscriptionlocation = process.env.REACT_APP_AZURE_TRANSLATE_SUBSCRIPTION_LOCATION || "eastus";
  // console.log(azureTranslateEndpoint,azureTranslateSubscriptionKey);

const translateService = async (text, targetLanguage) => {
  try {
    const res = await axios({
      baseURL: azureTranslateEndpoint,
      url: '/translate',
      method: 'post',
      headers: {
        'Ocp-Apim-Subscription-Key': azureTranslateSubscriptionKey,
        'Ocp-Apim-Subscription-Region': azureTranlateSubscriptionlocation,
        'Content-type': 'application/json',
        'X-ClientTraceId': uuidv4().toString(),
      },
      params: {
        'api-version': '3.0',
        'from':'en',
        'to': targetLanguage,
      },
      data: [{
        text,
      }],
      responseType: 'json',
    });

    return res.data[0].translations[0].text;
  } catch (error) {
    console.error('Translation error:', error);
    return text; 
  }
};

export { translateService };


// console.log(res);


