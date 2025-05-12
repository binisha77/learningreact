interface props{
  children:string;
  onClick:()=>void;
  color:string;
  
}

const Button = ({children , onClick,color }:props) => {
  return (
   <Button className='btn btn-primary' onClick={onClick}>{children}</Button>
  )
}

export default Button;