import { CardContainer } from "../../styleComponents"

type CardProps = {
    text: string
    id: string
}

export const Card = ({ text }: CardProps) => {
    return <CardContainer>{text}</CardContainer>
}
