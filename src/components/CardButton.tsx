import { CardButtonType } from '@/types/button-type'
import React from 'react'
interface CardButtonProps
{
  card: CardButtonType
}
const CardButton: React.FC<CardButtonProps> = ({card}) => {
  return (
    <div>
      {card.icon}
      {card.name}
      {card.description}
    </div>
  )
}

export default CardButton