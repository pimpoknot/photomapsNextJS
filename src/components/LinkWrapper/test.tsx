import { render, screen } from '@testing-library/react'
import LinkWrapper from '.'

describe('<LinkWrapper />', () => {
  it('should render a Link and children ', () => {
    render(<LinkWrapper href="#">Correto</LinkWrapper>)

    const children = screen.getByRole('link', { name: /correto/i })

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/#')
  })
})