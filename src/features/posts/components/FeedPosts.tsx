import { NarrowPost } from "./NarrowPost"

const posts = [
    {
        "createdAt": "2023-11-11T17:10:14.358Z",
        "name": "Domenico79",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/711.jpg",
        "content": "Doloribus magni quo fugiat aperiam esse fugitbo quam iusto quasi nemo expedita vero minus. Nesciunt esse dolorum ex praesentium consequatur magnam repellat. Nulla voluptate alias maxime aspernatur ipsa recusandae dolores.\nEum ut iure. Assumenda eum molestias dolore maiores officia voluptatibus ipsam ipsum. Nobis ratione porro repellat aperiam molestias cumque commodi. Dolore veritatis expedita explicabo ab.\nCumque animi nobis explicabo doloremque animi hic consequuntur quis. Enim voluptatem velit. Et est doloremque. Accusamus maxime a quos ab sed totam ea. Cumque alias error quia. At tenetur laudantium quidem.",
        "title": "gloves are ergonomically designed",
        "id": "4"
    },
    {
        "createdAt": "2023-10-11T17:10:14.358Z",
        "name": "Domendsfgd79",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/711.jpg",
        "content": "Doloribugit. Mollitia explicabo quam iusto quasi nemo expedita vero minus. Nesciunt esse dolorum ex praesentium consequatur magnam repellat. Nulla voluptate alias maxime aspernatur ipsa recusandae dolores.\nEum ut iure. Assumenda eum molestias dolore maiores officia voluptatibus ipsam ipsum. Nobis ratione porro repellat aperiam molestias cumque commodi. Dolore veritatis expedita explicabo ab.\nCumque animi nobis explicabo doloremque animi hic consequuntur quis. Enim voluptatem velit. Et est doloremque. Accusamus maxime a quos ab sed totam ea. Cumque alias error quia. At tenetur laudantium quidem.",
        "title": "Carbonite web easy fit",
        "id": "5"
    }
]

export const FeedPosts = () => {
    return (
        <>
            {posts.map((post) => (
                <NarrowPost
                    key={post.id}
                    {...post} />
            ))}
        </>
    )
}
