import { useState } from "react"
import { useFocus } from "../../utils"
import {
    NewItemButton,
    NewItemFormContainer,
    NewItemInput
} from "../../styleComponents"


type NewItemFormProps = {
    onAdd(text: string): void
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {

    const [text, setText] = useState("")
    const inputRef = useFocus() // le doy el foco al elemento de agregar nota a la lista

    if (inputRef.current) {
        inputRef.current.focus()
    }

    const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            onAdd(text)
        }
    }

    return (
        <NewItemFormContainer>
            <NewItemInput
                ref={inputRef}
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyPress={handleAddText}
            />
            <NewItemButton onClick={() => onAdd(text)}>
                Create
            </NewItemButton>
        </NewItemFormContainer>
    )
}
