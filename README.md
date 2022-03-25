# state-management

# with-context

https://github.com/jherr/nextjs-state-management/blob/main/with-use-state/pages/index.tsx

ts / tsx 차이,, ts 에 jsx 가 있으면 tsx

getServerSideProps , pageProps 공부

# with-react-query-simple

react-query : 리액트에서 비동기 로직을 리액트스럽게 다룰 수 있게 해주는 라이브러리
리액트쿼리가 urql, apollo보다 나은건 server-state를 다루기 때문
-> data sync 에 초점을 두면서 state 관리와 date fetch가 간단해짐! -https://hasura.io/blog/getting-started-with-react-query/ 읽어 볼것.

- 리액트 쿼리 사용을 위해 QueryClientProvider 를 최상단에서 감싸주어야한다.
- 쿼리 인스턴스를 생성 후 client={queryClient} 작성해준다.

getServerSideProps 에서 fetch부분을 분리하는 이유
react-query 는 fetcher가 필요함.

@ 리액트 쿼리 사용법 정리
https://velog.io/@kimhyo_0218/React-Query-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%BF%BC%EB%A6%AC-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-useQuery

- refetchOnMount (boolean | "always")
- refetchOnWindowFocus (boolean | "always")
  에 대한 설명 다시 읽어보기

# with-react-query

getStaticProps (SSG) vs getServerSideProps (SSR) 비교
queryClient.prefetch
hydrate -> dehydrate(queryClient)

# with-zustand

create 는 custom hook
