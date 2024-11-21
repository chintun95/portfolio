import Image from "next/image"

export default function About(){
  return  (
      <section id= "about">
        <p className="section__text_p1">Get to know more</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <Image src="/images/UNT-student-ID-photo.jpg" width={300} height={300} alt="Chin Lun Wong profile picture"/>
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <Image src="/images/experience.png" alt="Experience icon"
                width={50} height={50}/>
                <h3>Experience</h3>
                <p2>2+ years <br/> Frontend Development</p2>
              </div>
              <div className="details-container">
                <Image src="/images/experience.png" alt="Experience icon"
                width={50} height={50}/>
                <h3>Education</h3>
                <p2>Bachelor of Science in <br/> Computer Science</p2>
              </div>
            </div>
            <div className="">
            </div>
          </div>
        </div>
      </section>
  )
}

