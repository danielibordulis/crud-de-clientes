
import { PrismaClient } from "@prisma/client";

const id="09abeacb-ae6e-40e1-8e5c-351a14eadce4"

const prisma = new PrismaClient();

class Delete{
    async execute(){
     
      
       try {
        await prisma.cliente.delete({
        
            where:{
                id:id,
            }
            
        })
        console.log("Deletado")
        
       } catch (error) {
        console.log("Erro")
       }
    }

}

const delet_= new Delete();

delet_.execute()