/** @jsx h */
import { h } from 'preact'
import Counter from '../islands/Counter.tsx'
import moment from 'moment'

export default function Home() {
  return (
    <div>
      <img
        src='/logo.svg'
        height='100px'
        alt='the fresh logo: a sliced lemon dripping with juice'
      />
      <p>Qazi Gang 💯</p>
      {moment().format('MMMM Do YYYY, h:mm:ss a')}
      <Counter start={3} />
    </div>
  )
}
