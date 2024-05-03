const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
module.exports=buildModule("StudentRecord",(m)=>{
    const student=m.contract("StudentRecord");

    return{student};
})