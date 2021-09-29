
var apiclient = (function (){

    return {
        getBlueprintsByAuthor: function(author, callback) {
            $.get("/blueprints/"+author, function (data){
                callback(null,data);
            }).fail(function (){
                alert("error");
            });
        },

        getBlueprintsByNameAndAuthor: function(name, author, callback) {
            let blueprint = mockdata[author].find(function(blueprint) {
                return blueprint.name == name
            });
            callback(null, blueprint)
        }
    }
})();

