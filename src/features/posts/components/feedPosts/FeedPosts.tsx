import { useEffect, useState } from "react";
import { api } from "../../../../services/api";
import { NarrowPost } from "../index";

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
        <>
            {first !== undefined &&

                first.map((post: any) => (
                    <NarrowPost
                        key={post.id}
                        {...post} />
                ))

            }
        </>
    )
}
