import React from 'react'
type props = {
    index: number;
    objectData: {
        userName: string;
        description: string;
        name:string;
        category:string;
        categorySubType:string
        // Add more properties if necessary 
    };
  };
  
const CardComidas : React.FunctionComponent<props> = (props) => {
    const { index, objectData } = props;
    return (
        <div key={index} style={{backgroundColor: 'pink',textAlign:'center'}}>
            <h2>{objectData?.userName}</h2>
            <p>{objectData?.description}</p>
            <img src={"https://firebasestorage.googleapis.com/v0/b/meins-25f6d.appspot.com/o/imagesFromPost%2F3e731eb6-e039-4bdd-9c24-44db332eedc6.1708134375738.jpg?alt=media&token=fe05731c-d36c-4aa2-92a3-8b6029af15c2"} 
            alt={objectData.name}  style={{ maxHeight: '573px' }} />
        </div>
      )
}

export default CardComidas