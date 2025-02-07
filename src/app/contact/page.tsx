import Image from 'next/image'
import CircleOne from 'public/png/Ellipse.png'
import CircleTwo from 'public/png/Ellipse2.png'
import type { Metadata } from 'next'
import { Network } from '@/components/icons'
import { contactInfo } from '@/utils/const'
import { Input } from '@/components/ui'
import Navbar from '@/components/navbar'
import Checkbox from '@/components/ui/checkbox'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Generated by create next app',
  keywords: 'Ecommerce',
}

export default function Contact() {
  return (
    <>
      <Navbar
        background="shadow-md shadow-gray-dark p-4"
        textColor="text-gray-dark"
      />

      <section className="flex flex-wrap justify-center  gap-[50px] xl:p-[30px] lg:p-[30px] md:p-[20px] p-[10px] border-solid border-black ">
        <article className="shadow-gray-dark   shadow-lg flex flex-wrap justify-center gap-[50px] rounded-[15px] sm:rounded-none xl:p-[0] md:p-[10px] lg:p-0 xl:w-auto lg:w-[100%] md:w-[100%] w-[100%] md:rounded-lg">
          <article className="bg-black  xlw-[400px] lg:w-[400px]  w-[350px] md:w-[400px] relative p-3 sm:p-5 rounded-r-md">
            <article className="text-white">
              <h2 className="bolt text-[28px] mt-[5%]">
                <b>Contact Information</b>
              </h2>
              <p className="font-[500] text-[18px] pb-[10%]">
                Say something start a live chat!
              </p>
              {contactInfo.map((info, i) => (
                <figure className="flex gap-4 mt-[13%]" key={i}>
                  <Image src={info.src} alt={info.alt} />
                  <p className="text-xs sm:text-base">
                    <b>{info.text}</b>
                  </p>
                </figure>
              ))}
            </article>
            <div className="flex justify-end relative z-1">
              <figure className="w-[138px] absolute top-[-5%] right-[11%]">
                <Image className="w-[100%]" src={CircleOne} alt="circleOne" />
              </figure>
              <figure className="w-[200px] mr-[-20px] mb-[-5px]">
                <Image className="w-[100%]" src={CircleTwo} alt="circleTwo" />
              </figure>
            </div>
            <div className="absolute z-5 bottom-10">
              <Network
                styleicons="text-white"
                colorfacebook=""
                bgfacebook="bg-withe"
              />
            </div>
          </article>
          <form className="flex flex-col justify-evenly xl:w-[650px]   w-[370px] md:w-[500px] lg:w-[550px] p-1 sm:p-3">
            <article className="flex w-full gap-5 pt-5 pb-3">
              <div className="w-1/2">
                <label className=" text-s text-gray-dark">First Name</label>
                <Input style={{ paddingLeft: '10px' }} placeholder="Feyz" />
              </div>
              <div className="w-1/2">
                <label className="text-s text-gray-dark">Second Name</label>
                <Input style={{ paddingLeft: '10px' }} placeholder="Ibrahim" />
              </div>
            </article>
            <article className="flex w-full gap-5 pt-5 pb-3">
              <div className="w-1/2">
                <label className="text-s text-gray-dark">Email</label>
                <Input
                  style={{ paddingLeft: '10px' }}
                  placeholder="example@gmail.com"
                  name="Email"
                />
              </div>
              <div className="w-1/2">
                <label className="text-s text-gray-dark">Phone Number</label>
                <Input
                  style={{ paddingLeft: '10px' }}
                  placeholder="+91 73569 88456"
                />
              </div>
            </article>
            <article className=" pt-5 pb-3">
              <strong className="text-s text-gray-dark">Select Subject?</strong>
              <div className="xl:flex  lg:flex md:flex  xl:ml-0 lg:ml-0  md:ml-0 ml-[-150px]  items-center">
                <Checkbox text="General Inquiry" />
                <Checkbox text="General Inquiry" />
                <Checkbox text="General Inquiry" />
                <Checkbox text="General Inquiry" />
              </div>
            </article>

            <article className="w-full gap-5 pt-5 pb-3">
              <label className="text-s  text-gray-dark">Message</label>
              <Input
                style={{ paddingLeft: '10px' }}
                placeholder="Write your message.."
              />
            </article>

            <Input
              style={{
                background: '#3858D6',
                color: 'white',
                width: '200px',
                textAlign: 'center',
                padding: '10px',
              }}
              value="Send Message"
              type="submit"
            />
          </form>
        </article>
      </section>
    </>
  )
}
