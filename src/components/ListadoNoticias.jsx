

export const ListadoNoticias = () => {
  return (
    <div>
        {
            ListadoNoticias.map(noticia => (
                <Noticia
                    key={noticia.url}
                    noticia={noticia}
                />
            ))
        }
    </div>
  )
}
