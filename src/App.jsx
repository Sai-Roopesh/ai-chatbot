import './App.css'
import axios from 'axios'
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
import { useState } from 'react'
import Header from './Header'
import TextArea from './TextArea'
import Button from './Button';
import Answer from './Answer';
function App() {

  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  async function generateAnswer() {
    setAnswer("Generating Answer")
    const response = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      method: "POST",
      data: {
        "contents": [
          {
            "parts": [
              {
                "text": question
              }
            ]
          }
        ]
      }
    })

    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text'])
  }


  return (
    <>
      <div className='flex flex-col justify-center bg-red-300 h-screen'>
        < Header text={"Chat Bot"} />
        <TextArea question={question} onChange={(e) => setQuestion(e.target.value)} />
        <Button generateAnswer={generateAnswer} />
        <Answer answer={answer} />
      </div>
    </>
  )

}

export default App
