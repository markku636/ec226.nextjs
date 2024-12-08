'use client';

import PostsA from '@/redux/features/posts/PostsA';
import PostsB from '@/redux/features/posts/PostsB';
import PostsLazy from '@/redux/features/posts/PostsLazy';
import { useState } from 'react';

function Page() {
    const [openA, setOpenA] = useState(false);
    const [openB, setOpenB] = useState(false);
    const [openLazy, setOpenLazy] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center gap-6">
                {openA && <PostsA />}
                {openB && <PostsB />}
                {openLazy && <PostsLazy />}
            </div>
            <div className="flex gap-5">
                <button
                    className="mt-10 w-fit rounded-xl bg-slate-400 p-5 text-white hover:bg-slate-600"
                    onClick={() => setOpenA(!openA)}
                >
                    load component A
                </button>
                <button
                    className="mt-10 w-fit rounded-xl bg-slate-400 p-5 text-white hover:bg-slate-600"
                    onClick={() => setOpenB(!openB)}
                >
                    load component B
                </button>
                <button
                    className="mt-10 w-fit rounded-xl bg-slate-400 p-5 text-white hover:bg-slate-600"
                    onClick={() => setOpenLazy(!openLazy)}
                >
                    load component C
                </button>
            </div>
        </div>
    );
}

export default Page;
