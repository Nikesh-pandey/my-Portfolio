const Admin= require('./models/model');
module.exports= async(req,res)=>{

const Allowedemails=[
    "nks23@gmail.com"
]
    try{
const {email}= req.body;
if(!Allowedemails.includes(email)){
    return res.status(403).json({message:"only valid emails are allowed"});
}
const Adata= new Admin(req.res);
const AdminData= await Adata.save();
if(!AdminData){
    res.status(400).json({message:"The credientials didnot matched"});
}
res.status(200).json({message:"success"});

    }
    catch(err){
        res.status(500).json({error:message.err});

    }
};

exports.getdata=async(req,res)=>{
    const admin= await Admin.findOne({email});
    if(!admin){
        return res.status(403).json({message:"Email didnot matched"});
    }
};
const isMatch= await bcrypt.compare(password,admin.password);
if(!isMatch){
    return res.status(403).json({message:"the password is not matched "});
}