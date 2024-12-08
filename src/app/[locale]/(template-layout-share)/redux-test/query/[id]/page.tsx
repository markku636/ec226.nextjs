import PostsById from '@/redux/features/posts/PostById';

function Page({ params }: { params: { id: string } }) {
    return (
        <div>
            <PostsById postId={params.id} />
        </div>
    );
}

export default Page;
