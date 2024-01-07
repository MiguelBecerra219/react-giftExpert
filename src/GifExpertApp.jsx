import { useState } from 'react'
import { AddCategory, GifGrid } from './Components'

export const GiftExpertApp = () => {
  const [categorias, setCategorias] = useState(['One Punch'])

  const onAddCategory = (NewCategory) => {
    if (categorias.includes(NewCategory)) return
    setCategorias([...categorias, NewCategory])
  }

  return (
      <>
        <h1>GifExpertApp</h1>

        <AddCategory
          // setCategorias={setCategorias}
          onNewCategory={event => onAddCategory(event)}
        />

        <section>
          { categorias.map(category => (<GifGrid key={category} category={category}/>))}
        </section>
      </>
  )
}
