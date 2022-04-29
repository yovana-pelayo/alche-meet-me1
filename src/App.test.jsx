import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('Should render the header', () => {
    render(<App />)
    const image = screen.getAllByAltText('Alchemy Logo')
    // const headerText = await screen.getAllByLabelText('name!')
    const header = screen.getByRole('banner')

    expect(image).toBeInTheDocument()
    // expect(headerText).toBeInTheDocument()
    expect(header).toHaveStyle()
  })
})
