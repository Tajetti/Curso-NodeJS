import { Readable } from 'node:stream'

class UmpMilhao extends Readable {
    index = 1
    
    _read() {
        const i = this.index++

        setTimeout(() => {
            if(i >= 100){
                this.push(null) // Para o read fornecer os dados para quem estiver consumindo
            } else {
                const buffer = Buffer.from(String(i))

                this.push(buffer)
            }
        },1000)


    } // retorna os dados.
}

new UmpMilhao()
    .pipe(process.stdout)