import { SymbolVerify } from "./SymbolVerify.js";


export class Calculate{
    constructor(numb1, numb2) {
        this.numb1 = numb1
        this.numb2 = numb2
        this.symbolVerify = new SymbolVerify(this.numb2)
        this.verifyNumb2 = this.symbolVerify.SymbolCoding()
        this.verifyNumb1= parseFloat(this.numb1);

    }

    IsPercent() {
     
        let aux = this.numb2
        let percent = 0

        if (aux.charAt(aux.length - 1) == '%') {               
            // verifyNumb2 = verifyNumb2 / 100
            percent = this.verifyNumb1 * this.verifyNumb2   
            
            if (percent < 0) {
                percent = this.verifyNumb1 + percent
                return [` ${aux} de ${this.verifyNumb1} é igual à ${percent}`]
            } else {
                return [` ${aux} de ${this.verifyNumb1} é igual à ${percent}`]
            }    
        }
    } 
    
    IsGreater () {
        let percent1 = 0
        let percent2 = 0
        let percent3 = 0
        let percent4 = 0
        let msgArray = []
        
        percent1 = (this.verifyNumb2 / this.verifyNumb1) * 100
        percent3 = (this.verifyNumb1/this.verifyNumb2) * 100
       
        
        if ( this.verifyNumb1 > this.verifyNumb2 ){

           

            percent2 = 100 - percent1
            percent4 = percent3 - 100

            msgArray = [
                `O número ${this.verifyNumb2} representa ${percent1.toFixed(2)}% do numero ${this.verifyNumb1}`,
                `O número ${this.verifyNumb1} representa ${percent3.toFixed(2)}% do numero ${this.verifyNumb2}`,
                `O número ${this.verifyNumb2} é ${percent2.toFixed(2)}% menor que o número ${this.verifyNumb1}`,
                `O número ${this.verifyNumb1} é ${percent4.toFixed(2)}% maior que o número ${this.verifyNumb2}`
            ]
            
            return msgArray

        } else if ( this.verifyNumb2 > this.verifyNumb1 ) {

            percent2 = percent1 - 100
            percent4 = 100 - percent3

            msgArray = [
                `O número ${this.verifyNumb2} representa ${percent1.toFixed(2)}% do numero ${this.verifyNumb1}`,
                `O número ${this.verifyNumb1} representa ${percent3.toFixed(2)}% do numero ${this.verifyNumb2}`,
                `O número ${this.verifyNumb1} é ${percent4.toFixed(2)}% menor que o número ${this.verifyNumb2}`,
                `O número ${this.verifyNumb2} é ${percent2.toFixed(2)}% maior que o número ${this.verifyNumb1}`
            ]

            return msgArray
        } else if ( this.verifyNumb2 == this.verifyNumb1 ) {

            return ["Os numeros apresentados são iguais"]
        }
    }
}