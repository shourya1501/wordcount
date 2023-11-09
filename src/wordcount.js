import {useState,useRef} from 'react';
function WordCount(props){
    const textAreaRef=useRef();
    const [WordCount,setWordCount]=useState(0);

    const countWords = (e) => {
        const text=textAreaRef.current.value;
        setWordCount(text.split(" ").length);
    }
        return (  <>
            <textarea rows="10" cols="100"  ref={textAreaRef} /><br />
            <button onClick={countWords}>Count Words</button>
            <p>{WordCount} words.</p>
          </> );
    }
     
    export default WordCount;
