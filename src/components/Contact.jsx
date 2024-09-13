import { motion } from "framer-motion"
import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify"

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const {name,value}=e.target;
    setForm({...form,[name]:value})
   }

  const handleSubmit = (e) => { 
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_66e35d7', //service id
      'template_gk4dw6n', //template id
      {
        from_name: form.name,
        to_name: "Shariar khan",
        to_email: "kshariare@gmail.com",
        message: form.message,
      },
      'Nfs6LYj10ZOcuXV3J' //public key parameter
    )
    .then(()=>{
      setLoading(false);
      toast.success('Thank you, I will get to you as soon as possible');

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }).catch( (error) =>{
        setLoading(false)
        console.log(error);
        toast.error('Something went wrong')
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-8 
    overflow-hidden">
      <motion.div variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[1.0] bg-black-100 p-8 rounded-2xl">
        <h3 className={styles.sectionHeadText}>Contact me?</h3>
        <p className={styles.sectionSubText}>Get in touch</p>

        <form ref={formRef} onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8">

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange}
              placeholder="What's your name?" className="bg-tertiary py-4 px-6 placeholder:
            text-white rounded-lg outline-none border-none font-medium"/>
          </label>


          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Your Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange}
              placeholder="What's your email?" className="bg-tertiary py-4 px-6 placeholder:
            text-white rounded-lg outline-none border-none font-medium"/>
          </label>


          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Your Message</span>
            <textarea rows="7" name="message" value={form.message} onChange={handleChange}
              placeholder="What do you want to say?" className="bg-tertiary py-4 px-6 placeholder:
            text-white rounded-lg outline-none border-none font-medium"
            >
            </textarea>
          </label>
          <button type="submit" className="bg-tertiary py-3 px-8 outline-none
              w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>

      </motion.div>

    <motion.div variants={slideIn('right','tween',0.2,1)}
    className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
      <EarthCanvas />

    </motion.div>
    </div>
  )
}
const wrappedContact = SectionWrapper(Contact, "contact")
export default wrappedContact