import type { comment } from "./comment.types";

export type MoreCommentsProps = {
    id: string;
}

export type AddCommentProps = {
  nested?: string | null;
  anotherFn?: () => void;
};

export type ActionCommentButtonsProps = {
    comment: comment;
    threeButtons?: boolean;
}

export type FeedCommentsProps = {
    mainComments:any;
    isLoadingComments: boolean;
    errorComments: any;
}