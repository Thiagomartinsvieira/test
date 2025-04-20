import { render, screen } from '@testing-library/react'
import Menu from './index'

test('To be render a link to the initial page', () => {
    render(<Menu />)
    const linkInitialPage = screen.getByText('Inicial')
    expect(linkInitialPage).toBeInTheDocument()
})

test('To be render a list of links', () => {
    render(<Menu />)
    const listOfLinks = screen.getAllByRole('link')
    expect(listOfLinks).toHaveLength(4)
})

test("Dont't have to render a link to extract", () => {
    render(<Menu />)
    const linkExtract = screen.queryByTestId('Extract')
    expect(linkExtract).not.toBeInTheDocument()
})

test("To be render a list of links with a class link", () => {
    render(<Menu/>)
    const links = screen.getAllByRole("link")
    links.forEach((link) => expect(link).toHaveClass('links'));
    expect(links).toMatchSnapshot()
})
