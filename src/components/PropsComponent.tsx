import React from 'react'
type UserProps={
    fName:string,
    lName:string
}

const PropsComponent:React.FC<UserProps> = ({fName,lName}) => {
  return (
    <div>
        <h4>This is PropsComponent</h4>
        <p>{fName}--{lName}</p>
    </div>
  )
}
export default PropsComponent