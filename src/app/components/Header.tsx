export default function Header(props:any) {
  let title = props.title;
  let logo = props.logo;

  return (
    <>
      <img src={logo} alt="Default Logo"></img>
      <h1> {title} </h1>
    </>
  )
}
