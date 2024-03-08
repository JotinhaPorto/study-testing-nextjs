import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import List from './List'

describe("List component", () => {
  it("Deve adicionar um item a lista", () => {
    render(<List />)

    const { getByText, getByPlaceholderText } = screen
    const input = getByPlaceholderText("Digite seu nome")

    const button = getByText("Add")
    fireEvent.change(input, { target: { value: "Teste" } })
    fireEvent.click(button)
    expect(getByText("Teste")).toBeInTheDocument()
  })
  it("Deve remover um item da lista", () => {
    render(<List />)

    const { getByText, getByPlaceholderText, queryByText } = screen
    const input = getByPlaceholderText("Digite seu nome")
    fireEvent.change(input, { target: { value: "Teste" } })
    const buttonAdd = getByText("Add")
    fireEvent.click(buttonAdd)

    const buttonRemove = getByText("Remove")
    fireEvent.click(buttonRemove)

    expect(queryByText("Teste")).not.toBeInTheDocument()
  })
})

