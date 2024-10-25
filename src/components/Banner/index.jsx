import Header from "../Header"

const Banner = () => {
  return (
    <section className="px-5 py-2 bg-black h-1/2 text-white">
      <Header></Header>

      <div>
        <p>Hi there</p>
        <h1>I am Front-end Developer|</h1>
      </div>

      <div className="flex">
        <div className="flex flex-col">
          <p>Email</p>
          <p>alejomira96@gmail.com</p>
        </div>
        <div className="flex flex-col">
          <p>Phone</p>
          <p>+57 312 3119897</p>
        </div>
        <div className="flex flex-col">
          <p>Location</p>
          <p>Colombia</p>
        </div>
      </div>
    </section>
  )
}

export default Banner