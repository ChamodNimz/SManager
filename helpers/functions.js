
module.exports = {
    
    // Function to check the req id a valid mongodb  object id 
    checkMongoId:function(id){

            if(id.match(/^[0-9a-fA-F]{24}$/)){
                return true;
            }
            else{
                return false;
            }
    },

    // Validations
    isEmpty: function(value){
        
        if(value.match(/^[0-9]{2}$/)){
            return true;
        }
    }
}