const {body}=require('express-validator')

const validatorUser=()=>([body('name')
.notEmpty()
.withMessage('Name cannot be empty')
.isLength({min:3})
.withMessage("name should be atlease three characters")
.isString()
.withMessage('Name should be string'),
body('code')
.notEmpty()
.withMessage('code can not be empty'),
body('active')
.notEmpty()
.isBoolean()
.withMessage('active should be boolean')])

module.exports=validatorUser