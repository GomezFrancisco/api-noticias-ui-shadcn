import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectLabel,
    SelectValue,
    SelectGroup
  } from "@/components/ui/select"


export const Formulario = () => {



  return (
    <div className='flex mt-3 mb-8'>
        <div className='col s12 m8 offset-m2'>
            <form>
                <h2>Encuentra Noticias por Categoría</h2>

                <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Seleccione la categoria" />
                </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectLabel>Selecione el tipo de Noticia</SelectLabel>
                        <SelectItem value="apple">Deportes</SelectItem>
                        <SelectItem value="banana">Tecnología</SelectItem>
                        <SelectItem value="blueberry">Cine</SelectItem>
                        <SelectItem value="grapes">Policiales</SelectItem>
                        <SelectItem value="pineapple">Music</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <div className="mt-5">
                <Button>Buscar</Button>

                </div>
            </form>
        </div>

    </div>
  )
}
