// import { useRouter } from 'next/router'
// import useSWR from "swr";

// const fetcher = (url) => fetch(url).then((r) => r.json())


export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/')
  const data = await res.json()
  const paths = data.map((item) => {
    return {
      params: {
        id: item.id.toString()
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  console.log(context)

  const { id } = context.params
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}


export default function User({ data }) {
  // const router = useRouter()
  // const { id } = router.query

  // const { data, error } = useSWR(
  //   `https://jsonplaceholder.typicode.com/users/${id}`,
  //   fetcher
  // );

  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>

  return (
    <>
      <h1>User id: {data.id}</h1>
      <h2>More information about user {data.email}</h2>
    </>
  )
}
