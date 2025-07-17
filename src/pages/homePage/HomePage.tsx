import { MartianLayout } from '../../layouts/MartianLayout';
import { AddPost, FeedPosts } from '../../features/posts/components';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <MartianLayout>
      <>
        <AddPost />
        <FeedPosts />
      </>
    </MartianLayout>
  )
}
