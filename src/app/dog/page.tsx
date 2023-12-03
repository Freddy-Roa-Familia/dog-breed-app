export default function Dog (props:any) {
  let breed = props.breed;
  let image = props.image;
  
  return (
    <>
      <div className="flex flex-col items-center">
        <img 
          className='rounded-full h-52 w-52' 
          src={image} 
          alt={breed}></img>
        <p className='text-justify'>{breed}</p>
      </div>
    </>
  )
}
