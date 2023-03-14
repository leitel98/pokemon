import Link from 'next/link'

const Pokemon = ({ pokemon }) => {
  const id = pokemon.url.split('/').filter(x=>x).pop()
  return ( //defino la ruta abajo, ojo nombre carpeta
    <li><Link href={`/pokemons/${id}`}>{pokemon.name}</Link></li>
  )
}

export default function Pokemons({ pokemones }) { //en el getstaticprops
  return (
    <>
      <div>
        <p>My Pokemon List</p>
        <ul>
          {pokemones.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.name} />)}
        </ul>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  //contenido estatico, devuelve siempre un listado de pokemones
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const data = await response.json()

  return {
    props: { pokemones: data.results }
  }
}
