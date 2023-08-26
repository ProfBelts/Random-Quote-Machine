/* eslint-disable react/jsx-no-target-blank */
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import { useEffect, useState } from "react";



function Wrapper () {

const URL = 'https://api.quotable.io/quotes/random'

const [quotes, setQuotes] = useState("")
const [author, setAuthor] = useState("");

async function getQuotes() {
    try {
      const res = await fetch(URL);
      const data = await res.json();

      const quoteContent = data[0].content;
      const authorName = data[0].author;

      setQuotes(quoteContent);
      setAuthor(authorName);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getQuotes();
  }, []);

  const handleNewQuote = () => {
    getQuotes(); // Fetch and set new quote and author
  };

  return (
    // Wrapper
   <div className="relative z-2">
    <div className="rounded-md relative w-[650px] p-10 table bg-white">
    <div className="text-center w-[650px] h-auto clear-both font-semibold text-2xl">
  <FontAwesomeIcon icon={faQuoteLeft} className="text-base mr-1" />
  <span className="font-semibold text-3xl">
    {quotes || "Loading..."} {/* Show loading message if quotes is empty */}
  </span>
</div>
<div className="text-base text-right">
  - <span>{author || "Loading..."}</span> {/* Show loading message if author is empty */}
</div>

        <div className="w-[550px] mx-auto block">
        <Button>
        <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quotes)}`}
            className="float-left  pt-1 text-center text-lg  h-8 w-10"
            target="_blank"
            title="Tweet the Quote!"
            >
            <FontAwesomeIcon icon={faTwitter} />
            </a>
          </Button>

          <Button>
          <a
            href="https://www.facebook.com/professorseph"
            className="float-left  pt-1 text-center text-lg  h-8 w-10"
            target="_blank"
            title="Add me on Facebook!"
            >
            <FontAwesomeIcon icon={faFacebook} />
            </a>
            </Button>

            <button onClick={handleNewQuote}  className="float-right p-2 mt-7 h-38px border-none rounded-md text-white bg-gray-800 outline-none text-sm px-18 py-8-6 mt-30 opacity-100 cursor-pointer"> 
                <span> New Quote </span>
            </button>
    

        </div>
        
    </div>

   </div>
  );
}

export default Wrapper;
