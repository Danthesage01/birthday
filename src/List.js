import React from 'react';

const List = (props) => {
  const { name, image, age } = props.person
  return (
    <article>
      <img src={image} alt="{name}" />
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </article>
  )
}
export default List;
