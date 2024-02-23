import axios from 'axios';
const { v4: uuidv4 } = require('uuid');

  const azureTranslateEndpoint = process.env.REACT_APP_AZURE_TRANSLATE_ENDPOINT || "";
  const azureTranslateSubscriptionKey = process.env.REACT_APP_AZURE_TRANSLATE_SUBSCRIPTION_KEY || "";
  const azureTranlateSubscriptionlocation = process.env.REACT_APP_AZURE_TRANSLATE_SUBSCRIPTION_LOCATION || "";
  console.log(azureTranslateEndpoint,azureTranslateSubscriptionKey);

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
