import { Ingredient } from "../shared/Ingredient.model"

export class Recipe {

    public name: string
    public description: string
    public imagePath: string
    public ingredient :Ingredient []

    constructor(nm: string, desc: string, imgPath: string,ingr:Ingredient [] ) {
        this.name = nm
        this.description = desc
        this.imagePath = imgPath
        this.ingredient=ingr
    }

}