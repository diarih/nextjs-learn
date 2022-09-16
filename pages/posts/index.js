export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}

const index = ({ data }) => {
    return (
        <>
            <ol>
                {data?.map((item) => {
                    return (
                        <li key={item.id}>
                            <div>{item.title}</div>
                        </li>
                    )
                })}
            </ol>
        </>
    )
}

export default index
