import { useState } from 'react';
import { getFunctions, httpsCallable } from 'firebase/functions';

const ChatGpt = () => {
    const [prompt, setPrompt] = useState('')
    const [output, setOutput] = useState('')
    const [fetching, setFetching] = useState(false);
//k
    const handleSubmit = async () => {
        const functions = getFunctions();
        const chatCompletion = httpsCallable(functions, 'chatCompletion')
        console.log("YESSS");
        try {
            const data = {
                prompt
            }
            setFetching(true);
            const result = await chatCompletion(data);
            setOutput(result.data.aiResponse);
        } catch (error) {
            //nice
        } finally {
            setFetching(false);
        }
    }

    return (
        <div>
            <input type="text"
                name="prompt"
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)} />
            <button 
                disabled={fetching}
                onClick={handleSubmit}>
                {fetching ? 'loading answer!' : 'submit answers'}
            </button>

            <div>
                <label>AI output</label>
                <div>
                    {output}
                </div>
            </div>


        </div>
    )
}

export default ChatGpt;