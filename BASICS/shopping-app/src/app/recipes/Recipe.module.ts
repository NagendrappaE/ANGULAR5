export class Recipe {

    public name: string
    public description: string
    public imagePath: string

    constructor(nm: string, desc: string, imgPath: string) {
        this.name = nm
        this.description = desc
        this.imagePath = imgPath
    }

}