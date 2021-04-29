import { render, screen } from '@testing-library/react' 

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)


     expect(screen.getByRole('link', {
      name: /a js library for interactive maps/i
    })
    ).toBeInTheDocument()
  })
  it('should render with maker in the correct place', () => {

    const place1 = {
      id: '1',
      name: 'Maricá',
      slug: 'marica',
      location: {
        latitude: -22.9164733,
        longitude: -42.8311508
      }
    }

    const place2 = {
      id: '2',
      name: 'São Paulo',
      slug: 'sao-paulo',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    render(<Map places={[ place1, place2 ]} />)


    expect(screen.getByTitle(/maricá/i)).toBeInTheDocument()
    expect(screen.getByTitle(/São Paulo/i)).toBeInTheDocument()
  })
})