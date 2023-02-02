
export class View {
    constructor(element) {
        this._element = element
    }

    template(model) {
        let string = ''
            model.forEach(element => {
                string+=`<li>${element}</li>`
            
        });

        return string
    }    

    update(model) {
        console.log(model);
        this._element.innerHTML = this.template(model)
    }

}