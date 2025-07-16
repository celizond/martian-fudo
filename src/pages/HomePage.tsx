import { AddPost } from "../features/posts/components/AddPost";
import { FeedPosts } from "../features/posts/components/FeedPosts";
import { MartianLayout } from "../layouts/MartianLayout"
import './HomePage.scss';

export const HomePage = () => {
  return (
    <MartianLayout>
        <AddPost />
        <FeedPosts />
    </MartianLayout>
  )
}
