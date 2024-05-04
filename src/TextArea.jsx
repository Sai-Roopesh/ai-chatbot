/* eslint-disable react/prop-types */


function TextArea({ question, onChange }) {
    return (
        <div className="max-w-2xl mx-auto my-10">
            <textarea
                id="message"
                rows="4"
                value={question}
                onChange={onChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message..."

            ></textarea>
        </div>
    );
}

export default TextArea;
