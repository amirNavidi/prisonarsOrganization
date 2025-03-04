
// import baseUrl from "../URL/baseUrl";
// import fetch from 'node-fetch'

// const APICaller= async(subAddress,body)=>{
//     const finalUrl = `${baseUrl}/${subAddress}`;
//     const sendedBody =  body ;
//     console.log("this is finalUrl" ,finalUrl);
//     console.log("this is body",sendedBody);
    
//    try{
//     const APIFunc =await fetch(`${baseUrl}/${subAddress}`,{
//         method:"POST",
//         headers:{'Content-Type':'application/json'},
//         body: JSON.stringify(body)


//     })
//     if (baseUrl.startsWith('https')) {
//       options.agent = new (require('https').Agent)({
//           rejectUnauthorized: false,
//       });
//   }
   
//     if (!APIFunc) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     } catch (err) {
//     console.error("Error in APICallerFetch:", err);
//     throw err;
//   }
    
// }
// export  {APICaller}
import baseUrl from "../URL/baseUrl";
import fetch from "node-fetch";
import https from "https"; 

const agent = new https.Agent({
  rejectUnauthorized: false,
});

const APICaller = async (subAddress, body) => {
  const finalUrl = `${baseUrl}/${subAddress}`;
  console.log("this is finalUrl", finalUrl);
  console.log("this is body", body);

  try {
    const APIFunc = await fetch(finalUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      agent, // استفاده از agent برای نادیده گرفتن SSL
    });

    if (!APIFunc.ok) {
      throw new Error(`HTTP error! status: ${APIFunc.status}`);
    }

    return await APIFunc.json();
  } catch (err) {
    console.error("Error in APICallerFetch:", err);
    throw err;
  }
};

export { APICaller };
