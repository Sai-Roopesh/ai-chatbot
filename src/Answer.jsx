/* eslint-disable react/prop-types */
export default function Answer({ answer }) {
    return (
        <div className="w-150px text-wrap text-center text-black-400 my-10">

            <pre className="indent-5">
                {answer}
            </pre>

        </div>
    );
}
