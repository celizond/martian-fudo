import { useActionsPost } from '../../hooks/useActionsPost';
import { ActionButtons } from '../../../../components/actionButtons/ActionButtons';
import type { ActionPostButtonsProps } from '../../types/postTypes';

export const ActionPostButtons = ({ post }: ActionPostButtonsProps) => {

    return (
        <ActionButtons
            text='post'
            data={post}
            elementsEdits={{ title: post.title, content: post.content }}
            useActions={useActionsPost}
        />
    )
}
