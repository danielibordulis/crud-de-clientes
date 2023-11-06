
import { PrismaClient } from "@prisma/client";
const usuario={
    name:"Danieli",
    full_name:"Danieli Bordulis Paiva Silva",
    cpf:"110.680.079-66",
    adress:"Rua da felicidade"
}

const prisma = new PrismaClient();

class Create{
    async execute(){
     
        const result= await prisma.cliente.create({
        data:{
         name:usuario.name,
         full_name:usuario.full_name,
         cpf:usuario.cpf,
         adress:usuario.adress
        }
        })

     console.log(result)   
    }

}

const create = new Create();

create.execute()