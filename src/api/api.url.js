
export const apiurl = {
  URL: 'http://localhost:8000'
}




export const getallCategories = (newcategory, categories, parentId) => {
  const categoryList = [];
  if (parentId == undefined) {
    return [
      ...categories,
      {
        _id: newcategory._id,
        name: newcategory.name,
      }
    ];
  }

  return categoryList;
}

































// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

// client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
//                 .verifications
//                 .create({to: '+15017122661', channel: 'sms'})
//                 .then(verification => console.log(verification.status));




// {
//   "sid": "VEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
//   "service_sid": "VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
//   "account_sid": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
//   "to": "+15017122661",
//   "channel": "sms",
//   "status": "pending",
//   "valid": false,
//   "date_created": "2015-07-30T20:00:00Z",
//   "date_updated": "2015-07-30T20:00:00Z",
//   "lookup": {},
//   "amount": null,
//   "payee": null,
//   "send_code_attempts": [
//     {
//       "time": "2015-07-30T20:00:00Z",
//       "channel": "SMS",
//       "attempt_sid": "VLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
//     }
//   ],
//   "sna": null,
//   "url": "https://verify.twilio.com/v2/Services/VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Verifications/VEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
// }


