export const signup =async (req,res)=>{
    const {fullName,email,passward} = req.body

    try{
        if(!fullName || !email || !passward){
            return res.status(400).json({message:"All fields are required"})
        }
        if(passward.length <6){
            return res.status(400).json({message:"Passward must be atleast 6 character long"})
        }
        //check if emails vaild: regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            return res.status(400).json({message:"Invalid email format"})
        }

        
    }catch(error){

    }
}