import React from "react";
import styles from './cardsList.module.scss';
import TeaCard, {TeaCardParams} from "../teaCard";

export interface CardsListParams {
    teaInfos: TeaCardParams[]
}

const CardsList:React.FC<CardsListParams> = ({teaInfos})=>{
  return (
      <div className={styles.cardContainer}>
          {teaInfos.map(params => <TeaCard {...params} key={params._id} isCart={true}/>)}
      </div>
  )
};

export default CardsList;