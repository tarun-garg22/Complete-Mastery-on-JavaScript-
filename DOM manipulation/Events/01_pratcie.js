var fullname = "piyush garg";

var obj = {
          fullname : "Hacked Full Name",
          prop:{
                    fullname:"Inside Prop",
                    getFullname : function(){
                              return this.fullname
                    },
          },
          getFullname:function(){
                    return this.fullname
          },
          getFullnamev2:()=>{
                    return this.fullname
          },
          getFullnamev3:(function(){
                    return this.fullname
          })(),
};
console.log(obj.prop.getFullname());
console.log(obj.getFullname());
console.log(obj.getFullnamev2());
console.log(obj.getFullnamev3());