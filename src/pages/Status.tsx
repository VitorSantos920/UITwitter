import { useState, FormEvent, KeyboardEvent } from 'react';
import { Header } from '../components/Header';
import { Separator } from '../components/Separator';
import { Tweet } from '../components/Tweet';
import './Status.css';
import { PaperPlaneRight } from 'phosphor-react';

export function Status() {
  const [newAnswer, setNewAnswer] = useState('');

  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido',
    'Parabéns pelo progresso.',
  ]);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswer, ...answers]);
    setNewAnswer('');
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer('');
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sapiente
      enim perspiciatis provident suscipit hic facere, dolorem culpa quia? Ad
      voluptas nobis eum reprehenderit totam cumque sint officia sit voluptatem?"
      />
      <Separator />
      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/vitorsantos920.png" alt="" />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value);
            }}
          ></textarea>
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>
      {answers.map((answer) => (
        <Tweet key={answer} content={answer} />
      ))}
    </main>
  );
}
