interface HeaderProps {
  title: string;
  logo: string;
}

export default function Header(props: HeaderProps) {
  let title = props.title;
  let logo = props.logo;

  return (
    <>
      <div className="flex items-center bg-indigo-400 pl-4 mb-4">
        <h1 className="text-3xl text-white"> {title} </h1>
        <img
          src={logo}
          alt="Default Logo"
          className="w-44"
        >
        </img>
      </div>
    </>
  )
}
