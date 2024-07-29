import { useState } from 'react'
import Footer from '../components/Footer'
import Title from '../components/Title'

const ESignature = () => {
    const [name, setName] = useState("Your Signature");
    const [date, setDate] = useState("");

    
  return (
    <main>
        <div className="container text-center">
        <Title classes="title-main" title={name}/>
        <Title title = {!date ? "DOB" : date}/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit iusto velit dolorum nulla quis neque, nisi odio officiis iure veniam, voluptatibus rem sequi adipisci quibusdam magnam eius soluta culpa aspernatur! Voluptatibus incidunt beatae facilis atque nemo mollitia molestias ducimus minus. Velit fugit quaerat tenetur dolores ad repellat sint, ratione, fugiat eius eos, alias odit eligendi soluta voluptate quidem modi minima eaque deleniti amet rem recusandae voluptatibus obcaecati minus. Maiores sed soluta, repellat nostrum ut pariatur iusto qui totam nihil voluptatem quasi non quis</p>

        <Footer name={name} setName={setName} date={date} setDate={setDate} />
        </div>
    </main>
  )
}

export default ESignature
