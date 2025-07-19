export type comment = {
    createdAt: string;
    name: string;
    avatar: string;
    id: string;
    content: string;
    parentId: null | string;
}

export type comments = comment[];

export type MoreCommentsProps = {
    id: string;
}

export type AddCommentProps = {
  nested?: string | null;
};
