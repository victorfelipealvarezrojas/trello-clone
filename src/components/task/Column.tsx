import { FC } from "react"
import {
    ColumnContainer,
    ColumnTitle
} from "../../styleComponents"
import { AddNewItem } from "./AddNewItem"
import { addTask, useAppState } from "../../state"
import { Card } from "./Card"




type ColumnProps = {
    text?: string | undefined
    id: string
    children?: React.ReactNode | null
}

export const Column: FC<ColumnProps> = ({ text, id, children }) => {

    const { getTasksByListId, dispatch } = useAppState()

    const tasks = getTasksByListId(id)

    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {tasks.map(task => (
                <Card text={task.text} key={task.id} id={task.id} />
            ))}
            <AddNewItem
                toggleButtonText="+ Add another task"
                onAdd={text => dispatch(addTask(text, id))}
                dark
            />
        </ColumnContainer>
    )

}
