export const Bar = ({ animationDuration, progress }: any) => (
    <div
        className='bg-indigo-600 h-1 w-full left-0 top-0 fixed z-50'
        style={{
            marginLeft: `${(-1 + progress) * 100}%`,
            transition: `margin-left ${animationDuration}ms linear`,
        }}
    ></div>
);


export const Container = ({ animationDuration, children, isFinished }: any) => (
    <div
        className='pointer-events-none'
        style={{
            opacity: isFinished ? 0 : 1,
            transition: `opacity ${animationDuration}ms linear`,
        }}
    >
        {children}
    </div>
);