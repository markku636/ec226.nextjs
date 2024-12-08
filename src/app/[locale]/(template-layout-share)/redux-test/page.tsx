import Counter from 'src/redux/features/counter/Counter';

// This is server side component, and Counter is CSR
function Page() {
    return (
        <div className="mx-auto w-[1000px] text-center">
            <h2 className="text-2xl font-bold text-[rgb(112,76,182)]">Open redux devtool and see what's happening!!</h2>
            <Counter />
        </div>
    );
}

export default Page;
