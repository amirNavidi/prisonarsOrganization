import  {APICaller}  from "../../utilities/APICaller";

export default async function handler(req , res){
    const PrisonerUID =req.body.Prisoner?req.body.Prisoner:null
    console.log(PrisonerUID,"prisoners");
    
     try{
        const backendResponse = await APICaller('GetPrisoners',{'PrisonerUID':PrisonerUID});
        console.log(backendResponse,'get prisoners data');
        if(backendResponse){
            return res.status(200).json({message:'OK',backendResponse})
        }else{
            return res.status(503).json({message:'An error occured'})
        }
     }catch(err){
        console.log(err,'get prisoners err');
        return res.status(500).json({message:'Server error'})        
     }
}