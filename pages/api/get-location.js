import  {APICaller}  from "../../utilities/APICaller";

export default async function (req , res){
try{
    const {location}=req.body;
    const backendResponse =await APICaller(location);
    if(backendResponse){
        return res.status(200).json({data:backendResponse});
    }else{
        return res.status.json({message:'An error occured'});
    }        
}catch(err){
        console.log(err , 'get Province err');
        return res.status(500).json({message:'Server error'});
    }
}

