import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
// import { render, screen } from '@testing-library/react'
import Counter from '../Counter'


test('initial state check', ()=>{
  render(<Counter></Counter>)
  const countTest = screen.getByText('Count is 0')
  const increbtn = screen.getByText('Increment');
  const decrebtn = screen.getByText('Decrement')

  expect(countTest).toBeInTheDocument();
  expect(increbtn).toBeInTheDocument();
  expect(decrebtn).toBeInTheDocument();

})

