import { useState } from 'react'

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


export const Formulario = ({ guardarCategoria }) => {

    const OPTIONS = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sports', label: 'Deportes' },
        { value: 'technology', label: 'Tecnología' }
    ]

    const [general, setGeneral] = useState('general')
    const [business, setBusiness] = useState('business')
    const [entertainment, setEntertainment] = useState('entertainment')
    const [health, setHealth] = useState('health')
    const [science, setScience] = useState('science')
    const [sports, setSports] = useState('sports')
    const [technology, setTechnology] = useState('technology')



    const buscarNoticias = (e) => {
        e.preventDefault()
        guardarCategoria()
    }


  return (
    <div className='flex mt-3 mb-8'>
        <div className='col s12 m8 offset-m2'>
            <form
             onSubmit={buscarNoticias}
            >
                <h2>Encuentra Noticias por Categoría</h2>

                <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Seleccione la categoria" />
                </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectLabel>Selecione el tipo de Noticia</SelectLabel>
                        <SelectItem
                         value={general}
                         onClick={() => setGeneral}
                         >General</SelectItem>
                        <SelectItem value={sports} onClick={() => setSports}>Deportes</SelectItem>
                        <SelectItem value={technology} onClick={() => setTechnology }>Tecnología</SelectItem>
                        <SelectItem value={health} onClick={setHealth}>Salud</SelectItem>
                        <SelectItem value="science">Ciencia</SelectItem>
                        <SelectItem value="business">Negocion</SelectItem>
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
