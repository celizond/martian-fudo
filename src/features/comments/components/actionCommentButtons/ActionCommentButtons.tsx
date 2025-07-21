import { useActionsComment } from '../../hooks/useActionsComment';
import { ActionButtons } from '../../../../components/actionButtons/ActionButtons';
import type { ActionCommentButtonsProps } from '../../types';

export const ActionCommentButtons = ({ comment }: ActionCommentButtonsProps) => {

    return (
        <ActionButtons
            text='comentario'
            data={comment}
            elementsEdits={{ content: comment.content }}
            useActions={useActionsComment}
        />
    )
}
