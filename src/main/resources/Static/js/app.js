var app = ( function () {

    let api = apiclient;
    let nameAuthor;
    let listaNombres = [];
    let points;


    let getBlueprints = function (author){
        api.getBlueprintsByAuthor(author, function (error, data){
            console.log(data);
        })
    };

    let setNameAuthor = function (nameAuthor){
        this.nameAuthor = nameAuthor;
        console.log(this.nameAuthor);
    }

    return {

        setNameAuthor : function (nameAuthor){
          setNameAuthor(nameAuthor);
        },

        getBlueprints : function (author){
            getBlueprints(author);
        },

        getBlueprintsByAuthor: function (author){
            api.getBlueprintsByAuthor(author, function (error, mockData){
                listaNombres = mockData.map(function (blueprint){
                     return {
                        name: blueprint.name,
                        points: blueprint.points.length
                    };
                });
            })
            return listaNombres;
        },

        getBlueprintsByNameAndAuthor: function (name, author){
            api.getBlueprintsByNameAndAuthor(name, author, function (error, blueprint){
                points = blueprint.points
                return points;
            })
            return points;
        },

        drawPoints: function (name, author){
            let canvas = $("#dibujar")[0];
            let canvas2d = canvas.getContext("2d");
            let points = this.getBlueprintsByNameAndAuthor(name,author);
            //console.log(points.length);
            for(let i = 1; i < points.length; i++){
                canvas2d.moveTo(points[i-1].x,points[i-1].y);
                canvas2d.lineTo(points[i].x,points[i].y);
                canvas2d.stroke();
            }

        }

    };
})();






