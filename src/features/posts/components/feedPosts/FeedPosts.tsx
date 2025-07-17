import { useEffect, useState } from "react";
import { api } from "../../../../services/api";
import { NarrowPost } from "../index";
import type { post } from "../../types/postTypes";

export const FeedPosts = () => {

    const [first, setfirst] = useState<any>()

    const checkData = async () => {
        try {
            const response = await api.get('/post');
            setfirst(response.data)
            console.log('Res ', response)
        } catch (error) {
            return;
        }
    };
    useEffect(() => {

        checkData()
    }, [])


    return (
        <section>
            {first !== undefined &&

                first.map((post: post) => (
                    <NarrowPost
                        key={post.id}
                        {...post} />
                ))

            }
        </section>
    )
}
