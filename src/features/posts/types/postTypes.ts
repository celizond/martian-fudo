export type post = {
    avatar: string;
    name: string;
    createdAt: string;
    id: string;
    title: string;
    content: string;
}

export type ActionPostButtonsProps = {
    post: post;
}

export type DetailPostProps = {
    post: post;
}