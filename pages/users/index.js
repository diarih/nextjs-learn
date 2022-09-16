import Link from "next/link"

export default function index({ data }) {
    return (
        <>
            <ol>
                {data?.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link href={`users/${item.id}`}>
                                <a>
                                    <div>{item.email}</div>
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/')
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}
