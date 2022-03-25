import { useState, useMemo, createContext, useContext } from 'react'
// memo를 써서 filter, pokemon 어디가 바뀌든 새로운 filter를 제공한다.

interface Pokemon {
  id: number
  name: string
  image: string
}

// serverside props function 함수명이 지정되어 있음.
export async function getServerSideProps() {
  const resp = await fetch(
    'https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json'
  )

  return {
    props: {
      pokemon: await resp.json(),
    },
  }
}

//custom hook 만들기
const usePokemonController = (pokemon: Pokemon[]) => {
  const [filter, setFilter] = useState('')

  console.log(pokemon)

  const filteredPokemon = useMemo(
    () =>
      pokemon.filter((p) =>
        p.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [filter, pokemon]
    // filter, pokemon 둘 중 뭐가 바뀌어도 pokemon은 바뀌지 않아 리렌더링 되지 않음.
  )

  return {
    filter,
    setFilter,
    pokemon: filteredPokemon,
  }
}

const PokemonContext = createContext<ReturnType<typeof usePokemonController>>({
  filter: '',
  setFilter: () => {},
  pokemon: [],
})

// filter, setFilter, pokemon을 제공하는 provider 생성
export const PokemonProvider = ({ pokemon, children }) => (
  <PokemonContext.Provider value={usePokemonController(pokemon)}>
    {children}
  </PokemonContext.Provider>
)

// use함수로 어디에 있든 pokemonContext를 다시 get back 해서 값을 받아옴
export const usePokemon = () => useContext(PokemonContext)
