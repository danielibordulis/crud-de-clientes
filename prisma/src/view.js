import { PrismaClient } from "@prisma/client";

const id="09abeacb-ae6e-40e1-8e5c-351a14eadce4"

const prisma = new PrismaClient();

class View{
    async execute(){
     
        const result= await prisma.cliente.findUnique({
            where:{
                id:id
            }
     
        })

     console.log(result)   
    }

}
const view = new View();

view.execute()