
export class SymbolVerify {
    constructor( numb2) {
        this.numb2 = numb2;
    }

    SymbolCoding(){

        let numb = this.numb2
        let array = numb.split('');
        let aux = parseFloat(this.numb2).toFixed(2); //ja passa -23

        array.forEach(element => {
            if ( element == '%'){
                aux = aux/100

                return aux
            }
        });
        return aux
    }
}