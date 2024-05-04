/* eslint-disable react/prop-types */


export default function Header({ text }) {

    return (
        <>
            <div className="flex justify-center">
                <div className="my-10  font-bold text-5xl">
                    {text}
                </div>
            </div>
        </>
    )
}
