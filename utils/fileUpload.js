const multer=require('multer');
const path=require('path')
const storage=multer.diskStorage({
    filename:function(req,file,callback){
      
        callback(null,new Date().toISOString().replace(/:/g, '-')+file.originalname)
    },
    destination:function(req,file,callback){
      console.log(__dirname)
        callback(null,path.join(__dirname,"../uploads/"))
    }
})
const upload=multer({
    storage
})

module.exports=upload