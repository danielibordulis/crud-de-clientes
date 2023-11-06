import { PrismaClient } from "@prisma/client";
const Novousuario={
    name:"Danieli,2",
    full_name:"Danieli Bordulis Paiva Silva,2",
    cpf:"110.680.079-66,2",
    adress:"Rua da felicidade,2"
}

const id="09abeacb-ae6e-40e1-8e5c-351a14eadce4"

const prisma = new PrismaClient();

class Edit{
    async execute(){
     
        const result= await prisma.cliente.update({

            where:{
                id:id
            },

        data:{
         name:Novousuario.name,
         full_name:Novousuario.full_name,
         cpf:Novousuario.cpf,
         adress:Novousuario.adress
        }
        })

     console.log(result)   
    }

}

const edit_= new Edit();

edit_.execute()