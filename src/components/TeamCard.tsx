import React, { useEffect, useRef } from 'react';

export const TeamCard = () => {
  return (
    <div>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <link
        href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css'
        rel='stylesheet'
        integrity='sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1'
        crossOrigin='anonymous'
      />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap'
        rel='stylesheet'
      />
      <link rel='stylesheet' href='style.css' />
      <title>Team-section</title>
      <div className='team-section container mt-5 mr-2'>
        <h1 className='psec-title'>Our Team</h1>
        <div className='container'>
          <div className='row justify-content-evenly align-items-center'>
            {/* 1.Ainesh  */}
            <div className='card col-9 col-md-5 col-xl-3'>
              <img className='pic' src='/team/ainesh.jpg' alt='' />
              <div className='overlay'>
                <div className='profile-head'>
                  <h6 className='name'>Ainesh Phanithi</h6>
                  <h5 className='role'>DSC Lead</h5>
                </div>
                <div className='profile-desc'>
                  Ainesh has finished the Technology Entrepreneurship Program
                  from the Indian School of Business successfully and has worked
                  with multiple startups over a span of 2 years. He can
                  effortlessly articulate ideas, offer practical solutions and
                  has a great sense of humour.
                </div>
                <div className='contact-icons'>
                  <div className='icons'>
                    <a target='_blank' href='https://github.com/Aineshphanithi'>
                      <img className='logo' src='./logos/git.png' alt='' />
                    </a>
                  </div>
                  <div className='icons'>
                    <a
                      target='_blank'
                      href='https://www.linkedin.com/in/ainesh-phanithi/'
                    >
                      <img className='logo' src='./logos/link.png' alt='' />
                    </a>
                  </div>
                  <div className='icons'>
                    <a
                      target='_blank'
                      href='https://www.instagram.com/aineshphanithi/'
                    >
                      <img className='logo' src='./logos/insta.png' alt='' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='p-head'>
                <h6 className='name'>Ainesh Phanithi</h6>
                <h5 className='role'>DSC Lead</h5>
              </div>
            </div>
            {/* 2.Virinchi */}
            <div className='card col-9 col-md-5 col-xl-3'>
              <img className='pic' src='/team/Virinchi.jpg' alt='' />
              <div className='overlay'>
                <div className='profile-head'>
                  <h6 className='name'>Alahari Virinchi</h6>
                  <h5 className='role'>Management Lead</h5>
                </div>
                <div className='profile-desc'>
                  Alahari Virinchi was a part of Technology Entrepreneurship
                  Programme at Indian School of Business, Hyderabad. He plays a
                  major role in proper functioning of various organizations out
                  of college such as CodingForAll, BOTX, Silikon Innovations,
                  etc.
                </div>
                <div className='contact-icons'>
                  <div className='icons'>
                    <a
                      target='_blank'
                      href='https://www.linkedin.com/in/alahari-virinchi-228714153/'
                      className='link'
                    >
                      <img className='logo' src='./logos/link.png' alt='' />
                    </a>
                  </div>
                  <div className='icons'>
                    <a
                      target='_blank'
                      href='https://github.com/AlahariVirinchi8055'
                      className='github'
                    >
                      <img className='logo' src='./logos/git.png' alt='' />
                    </a>
                  </div>
                  <div className='icons'>
                    <a
                      target='_blank'
                      href='https://www.instagram.com/d__narcissist/'
                      className='insta'
                    >
                      <img className='logo' src='./logos/insta.png' alt='' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='p-head'>
                <h6 className='name'>Alahari Virinchi</h6>
                <h5 className='role'>Management Lead</h5>
              </div>
            </div>
            {/* 3.Nikhil Mulaguru */}
            <div className='card col-9 col-md-5 col-xl-3'>
              <img className='pic' src='/team/nikhil_m.jpg' alt='' />
              <div className='overlay'>
                <div className='profile-head'>
                  <h6 className='name'>Nikhil Mulaguru</h6>
                  <h5 className='role'>Strategy Lead</h5>
                </div>
                <div className='profile-desc'>
                  Nikhil is interested in computer science and believes that
                  tech solutions are the need of the hour. He can come up with
                  effective strategies for user acquisition and retention,
                  coordinating with businesses, and content building.
                </div>
                <div className='contact-icons'>
                  <div className='icons'>
                    <a
                      target='_blank'
                      href='https://www.instagram.com/nikhilchowdary_9?r=nametag'
                      className='insta'
                    >
                      <img className='logo' src='./logos/insta.png' alt='' />
                    </a>
                  </div>
                  <div className='icons'>
                    <a
                      target='_blank'
                      href='https://www.linkedin.com/in/nikhilmulaguru/'
                      className='link'
                    >
                      <img className='logo' src='./logos/link.png' alt='' />
                    </a>
                  </div>
                  <div className='icons'>
                    <a
                      target='_blank'
                      href='https://github.com/Nikhil-Mulaguru'
                      className='github'
                    >
                      <img className='logo' src='./logos/git.png' alt='' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='p-head'>
                <h6 className='name'>Nikhil Mulaguru</h6>
                <h5 className='role'>Strategy Lead</h5>
              </div>
            </div>
            {/* 4.Goteti Rithika  */}
            <div className='card col-9 col-md-5 col-xl-3'>
              <img className='pic' src='/team/G.rithika.jpg' alt='' />
              <div className='overlay'>
                <div className='profile-head'>
                  <h6 className='name'>Goteti Rithika</h6>
                  <h5 className='role'>Women Empowerment Lead</h5>
                </div>
                <div className='profile-desc'>
                  Rithika is capable of translating requirements into technical
                  solutions. She is experienced in women’s empowerment and
                  related areas. She has excellent communication, and
                  interpersonal skills.
                </div>
                <div className='contact-icons'>
                  <div className='icons'>
                    <a
                      target='_blank'
                      href='https://www.instagram.com/rithika1122/'
                      className='insta'
                    >
                      <img className='logo' src='./logos/insta.png' alt='' />
                    </a>
                  </div>
                  <div className='icons'>
                    <a
                      target='_blank'
                      href='https://www.linkedin.com/in/goteti-rithika-0301021b6'
                      className='link'
                    >
                      <img className='logo' src='./logos/link.png' alt='' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='p-head'>
                <h6 className='name'>Goteti Rithika</h6>
                <h5 className='role'>Women Empowerment Lead</h5>
              </div>
            </div>
            {/* 5.Sirichadan Reddy */}
            <div className='card col-9 col-md-5 col-xl-3'>
              <img className='pic' src='/team/chandan.jpg' alt='' />
              <div className='overlay'>
                <div className='profile-head'>
                  <h6 className='name'>Sirichadan Reddy</h6>
                  <h5 className='role'>Operations and Outreach Lead</h5>
                </div>
                <div className='profile-desc'>
                  SiriChandan is currently pursuing his bachelors in civil
                  engineering. He is reliable, compassionate and believes that
                  he can accomplish everything through hard work and sincerity.
                </div>
                <div className='contact-icons'>
                  <div className='icons'>
                    <a
                      target='_blank'
                      href='https://www.instagram.com/sirichandan_reddy/'
                      className='insta'
                    >
                      <img className='logo' src='./logos/insta.png' alt='' />
                    </a>
                  </div>
                  <div className='icons'>
                    <a
                      target='_blank'
                      href='https://www.linkedin.com/in/sirichandan-reddy-beeravolu-257b031b5/'
                      className='link'
                    >
                      <img className='logo' src='./logos/link.png' alt='' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='p-head'>
                <h6 className='name'>Sirichadan Reddy</h6>
                <h5 className='role'>Operations and Outreach Lead</h5>
              </div>
            </div>
            {/* 6.Srilekha Gaddam */}
            <div className='card col-9 col-md-5 col-xl-3 '>
              <img className='pic' src='/team/srilekha.jpg' alt='' />
              <div className='overlay'>
                <div className='profile-head'>
                  <h6 className='name'>Srilekha Gaddam</h6>
                  <h5 className='role'>Corporate and PR Lead</h5>
                </div>
                <div className='profile-desc'>
                  Skilled in Sourcing, Screening, Interviewing, Recruiting, and
                  Human Resources. worked for Semiconductor Clients like
                  Qualcomm, Intel, Microchip, Oneplus etc.
                </div>
                <div className='contact-icons'>
                  <div className='icons'>
                    <a
                      target='_blank'
                      href='https://www.instagram.com/srilekha_gaddam/'
                      className='insta'
                    >
                      <img className='logo' src='./logos/insta.png' alt='' />
                    </a>
                  </div>
                  <div className='icons'>
                    <a
                      target='_blank'
                      href='https://www.linkedin.com/in/srilekha-gaddam-2842651b2'
                      className='link'
                    >
                      <img className='logo' src='./logos/link.png' alt='' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='p-head'>
                <h6 className='name'>Srilekha Gaddam</h6>
                <h5 className='role'>Corporate and PR Lead</h5>
              </div>
            </div>
          </div>
          <div className='container'>
            <h4 className='web-title'>Web-Development Team</h4>
            <div className='row justify-content-evenly align-items-center'>
              {/* 1.Imtiyaz  */}
              {/* <div class="card web col-9 col-md-5 col-xl-3">
                        <img class="pic" src="/team/imtiyaz.jpg" alt="">
                        <div class="overlay">
                            <div class="profile-head">
                                <h6 class="name">Mohammed Imtiyaz</h6>
                                <h5 class="role">Web-Development Lead</h5>
                            </div>
                            <div class="profile-desc">
                                I am Imtiyaz Mohammed, a 2nd year Electronics and Communication Engineering Student from CVR College of Engineering. My Area of expertise Java, Javascript, React.js, Data structures etc.
                            </div>
                            <div class="contact-icons">
                                <div class="icons"><a target="_blank" href="https://www.instagram.com/imtiyaz_mohammed_/?hl=en" class="insta"><img class="logo" src="./logos/insta.png" alt=""></a></div>
                                <div class="icons"><a target="_blank" href="https://www.linkedin.com/in/mohammed-imtiyaz-b9a7221a1" class="link"><img class="logo" src="./logos/link.png" alt=""></a></div>
                                <div class="icons"><a target="_blank" href="https://github.com/imtiyazMohammed" class="web-github"><img class="logo" src="./logos/git.png" alt=""></a></div>
                            </div>
                        </div>
                        <div class="p-head">
                            <h6 class="name">Mohammed Imtiyaz</h6>
                            <h5 class="role">Web-Development Lead</h5>
                        </div>
                    </div> */}
              {/* 2.Thushar */}
              <div className='card web col-9 col-md-5 col-xl-3'>
                <img className='pic' src='/team/thushar.jpg' alt='' />
                <div className='overlay'>
                  <div className='profile-head'>
                    <h6 className='name'>K.E Thushar</h6>
                    <h5 className='role'>Web-Development Lead</h5>
                  </div>
                  <div className='profile-desc'>
                    Thushar is a passionate programmer and a Web developer of
                    MERN Stack, who loves problem solving, learning new
                    frameworks and technologies. He is always ready to explore
                    beyond his limits.
                  </div>
                  <div className='contact-icons'>
                    <div className='icons'>
                      <a
                        target='_blank'
                        href='https://www.instagram.com/thusharke25/?hl=en'
                        className='insta'
                      >
                        <img className='logo' src='./logos/insta.png' alt='' />
                      </a>
                    </div>
                    <div className='icons'>
                      <a
                        target='_blank'
                        href='https://www.linkedin.com/in/thushar-ke-b00ba51a0/'
                        className='link'
                      >
                        <img className='logo' src='./logos/link.png' alt='' />
                      </a>
                    </div>
                    <div className='icons'>
                      <a
                        target='_blank'
                        href='https://github.com/Thusharke'
                        className='web-github'
                      >
                        <img className='logo' src='./logos/git.png' alt='' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='p-head'>
                  <h6 className='name'>K.E Thushar</h6>
                  <h5 className='role'>Web-Development Lead</h5>
                </div>
              </div>
              {/* 3.Vardhan */}
              <div className='card web col-9 col-md-5 col-xl-3'>
                <img className='pic' src='/team/vardhan.jpg' alt='' />
                <div className='overlay'>
                  <div className='profile-head'>
                    <h6 className='name'>Viswa Sai Vardhan</h6>
                    <h5 className='role'>Web-Development Team</h5>
                  </div>
                  <div className='profile-desc'>
                    Vardhan is a web/mobile development enthusiast with
                    extensive knowledge in MERN stack. He can build mobile
                    applications with react-native. He's passionate about
                    learning and exploring things.
                  </div>
                  <div className='contact-icons'>
                    <div className='icons'>
                      <a
                        target='_blank'
                        href='https://www.instagram.com/vardhan_l27l/?hl=en'
                        className='insta'
                      >
                        <img className='logo' src='./logos/insta.png' alt='' />
                      </a>
                    </div>
                    <div className='icons'>
                      <a
                        target='_blank'
                        href='https://www.linkedin.com/in/vardhan-452aa/'
                        className='link'
                      >
                        <img className='logo' src='./logos/link.png' alt='' />
                      </a>
                    </div>
                    <div className='icons'>
                      <a
                        target='_blank'
                        href='https://github.com/tancred27'
                        className='web-github'
                      >
                        <img className='logo' src='./logos/git.png' alt='' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='p-head'>
                  <h6 className='name'>Viswa Sai Vardhan</h6>
                  <h5 className='role'>Web-Development Team</h5>
                </div>
              </div>
              {/* 4.Charan */}
              <div className='card web col-9 col-md-5 col-xl-3'>
                <img className='pic' src='/team/charan.jpg' alt='' />
                <div className='overlay'>
                  <div className='profile-head'>
                    <h6 className='name'>Sri Charan</h6>
                    <h5 className='role'>Web-Development Team</h5>
                  </div>
                  <div className='profile-desc'>
                    Charan is a Web developer, a Data miner and a Python
                    developer who is exceptionally focused towards his work. His
                    self-motivated and diligent spirit make him one of the
                    strongest assets to the team.
                  </div>
                  <div className='contact-icons'>
                    <div className='icons'>
                      <a
                        target='_blank'
                        href=' https://www.facebook.com/profile.php?id=100059335165205'
                        className='insta'
                      >
                        <img className='logo' src='./logos/insta.png' alt='' />
                      </a>
                    </div>
                    <div className='icons'>
                      <a
                        target='_blank'
                        href=' https://www.linkedin.com/in/sri-charan-53092b1aa/'
                        className='link'
                      >
                        <img className='logo' src='./logos/link.png' alt='' />
                      </a>
                    </div>
                    <div className='icons'>
                      <a
                        target='_blank'
                        href='https://github.com/sricharan18'
                        className='web-github'
                      >
                        <img className='logo' src='./logos/git.png' alt='' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='p-head'>
                  <h6 className='name'>Sri Charan</h6>
                  <h5 className='role'>Web-Development Team</h5>
                </div>
              </div>
              {/* 5.Shivani */}
              <div className='card web col-9 col-md-5 col-xl-3'>
                <img className='pic' src='/team/Shivani.jpg' alt='' />
                <div className='overlay'>
                  <div className='profile-head'>
                    <h6 className='name'>Shivani Needugunde</h6>
                    <h5 className='role'>Web-Development Team</h5>
                  </div>
                  <div className='profile-desc'>
                    I'm a tech enthusiast who believes in team work and always
                    looking to try new things inorder to gain experience and
                    knowledge. As I believe progress is the key.
                  </div>
                  <div className='contact-icons'>
                    <div className='icons'>
                      <a
                        target='_blank'
                        href='https://instagram.com/shivani__nidugunda?igshid=1q4t5ek1vk2zi '
                        className='insta'
                      >
                        <img className='logo' src='./logos/insta.png' alt='' />
                      </a>
                    </div>
                    <div className='icons'>
                      <a
                        target='_blank'
                        href='https://www.linkedin.com/in/shivani-needugunde-a39b381b5'
                        className='link'
                      >
                        <img className='logo' src='./logos/link.png' alt='' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='p-head'>
                  <h6 className='name'>Shivani Needugunde</h6>
                  <h5 className='role'>Web-Development Team</h5>
                </div>
              </div>
              {/* 6.Vaishnavi */}
              <div className='card web col-9 col-md-5 col-xl-3 '>
                <img className='pic' src='/team/Vaishnavi.jpg' alt='' />
                <div className='overlay'>
                  <div className='profile-head'>
                    <h6 className='name'>Vaishnavi Gvs</h6>
                    <h5 className='role'>Web-Development Team</h5>
                  </div>
                  <div className='profile-desc'>
                    Being a part of web development team , Dsccvr I feel there
                    is much more to learn, explore , innovate and create for the
                    welfare of society.
                  </div>
                  <div className='contact-icons'>
                    <div className='icons'>
                      <a
                        target='_blank'
                        href='https://www.instagram.com/vaishnavi.77/'
                        className='insta'
                      >
                        <img className='logo' src='./logos/insta.png' alt='' />
                      </a>
                    </div>
                    <div className='icons'>
                      <a
                        target='_blank'
                        href='https://www.linkedin.com/in/vaishnavi-gvs-0306b41b9'
                        className='link'
                      >
                        <img className='logo' src='./logos/link.png' alt='' />
                      </a>
                    </div>
                    <div className='icons'>
                      <a
                        target='_blank'
                        href='https://github.com/yshnavy'
                        className='web-github'
                      >
                        <img className='logo' src='./logos/git.png' alt='' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='p-head'>
                  <h6 className='name'>Vaishnavi Gvs</h6>
                  <h5 className='role'>Web-Development Team</h5>
                </div>
              </div>
            </div>
            <div className='container'>
              <h4 className='android-title'>Android-Devolopment Team</h4>
              <div className='row justify-content-evenly align-items-center'>
                {/* 1.Aadesh  */}
                <div className='card android col-9 col-md-5 col-xl-3'>
                  <img className='pic' src='/team/Aadesh.jpg' alt='' />
                  <div className='overlay'>
                    <div className='profile-head'>
                      <h6 className='name'>Aadesh Pandiri</h6>
                      <h5 className='role'>Android-Development Lead</h5>
                    </div>
                    <div className='profile-desc'>
                      Ritika is an undergraduate techie who is receptive. She is
                      interested in learning and exploring new things. Talks
                      less but enjoys working and spending time with new people.
                    </div>
                    <div className='contact-icons'>
                      <div className='icons'>
                        <a
                          target='_blank'
                          href='https://www.instagram.com/aadeshpandiri/'
                          className='android-insta'
                        >
                          <img
                            className='logo'
                            src='./logos/insta.png'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='icons'>
                        <a
                          target='_blank'
                          href='https://www.linkedin.com/in/aadesh-pandiri-674237195/'
                          className='link'
                        >
                          <img className='logo' src='./logos/link.png' alt='' />
                        </a>
                      </div>
                      <div className='icons'>
                        <a
                          target='_blank'
                          href='https://github.com/aadeshpandiri'
                          className='github'
                        >
                          <img className='logo' src='./logos/git.png' alt='' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='p-head'>
                    <h6 className='name'>Aadesh Pandiri</h6>
                    <h5 className='role'>Android-Development Lead</h5>
                  </div>
                </div>
                {/* 2.Prahalad */}
                <div className='card android col-9 col-md-5 col-xl-3'>
                  <img className='pic' src='/team/prahalad.jpg' alt='' />
                  <div className='overlay'>
                    <div className='profile-head'>
                      <h6 className='name'>Majoju Krishna Prahalad</h6>
                      <h5 className='role'>Android Facilitator</h5>
                    </div>
                    <div className='profile-desc'>
                      A 19 year tech enthusiast, who isn't afraid to step up and
                      lead when the situation calls for it. An ambivert and a
                      daredevil when it comes to handling android and machine
                      learning concepts.
                    </div>
                    <div className='contact-icons'>
                      <div className='icons'>
                        <a
                          target='_blank'
                          href='https://www.instagram.com/prahladkrish/'
                          className='android-insta'
                        >
                          <img
                            className='logo'
                            src='./logos/insta.png'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='icons'>
                        <a
                          target='_blank'
                          href='https://www.linkedin.com/in/majoju-krishna-prahlad-0808901b2/'
                          className='link'
                        >
                          <img className='logo' src='./logos/link.png' alt='' />
                        </a>
                      </div>
                      <div className='icons'>
                        <a
                          target='_blank'
                          href='https://github.com/SaiPrahlad6'
                          className='github'
                        >
                          <img className='logo' src='./logos/git.png' alt='' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='p-head'>
                    <h6 className='name'>MAJOJU KRISHNA PRAHLAD</h6>
                    <h5 className='role'>Android Facilitator</h5>
                  </div>
                </div>
                {/* 3.Madhav */}
                <div className='card android col-9 col-md-5 col-xl-3'>
                  <img className='pic' src='/team/madhav.jpg' alt='' />
                  <div className='overlay'>
                    <div className='profile-head'>
                      <h6 className='name'>Nomula Sai Madhav Reddy</h6>
                      <h5 className='role'>Android-Development Team</h5>
                    </div>
                    <div className='profile-desc'>
                      Madhav is proficient in core concepts of Computer Science
                      such as Deep Learning and its deployment on various
                      platforms. His witty comments ensure that the team spirits
                      are always high. He tends to give his 100% involvement in
                      ANDROID DEVELOPMENT.
                    </div>
                    <div className='contact-icons'>
                      <div className='icons'>
                        <a
                          target='_blank'
                          href='https://www.instagram.com/madhav_1683/'
                          className='android-insta'
                        >
                          <img
                            className='logo'
                            src='./logos/insta.png'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='icons'>
                        <a
                          target='_blank'
                          href='https://www.linkedin.com/in/nomula-sai-madhav-reddy-3bb36a1b5'
                          className='link'
                        >
                          <img className='logo' src='./logos/link.png' alt='' />
                        </a>
                      </div>
                      <div className='icons'>
                        <a
                          target='_blank'
                          href='https://github.com/nsreddy0709'
                          className='github'
                        >
                          <img className='logo' src='./logos/git.png' alt='' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='p-head'>
                    <h6 className='name'>Nomula Sai Madhav Reddy</h6>
                    <h5 className='role'>Android-Development Team</h5>
                  </div>
                </div>
                {/* 4.Yashwanth */}
                <div className='card android col-9 col-md-5 col-xl-3'>
                  <img className='pic' src='/team/yashwanth.jpg' alt='' />
                  <div className='overlay'>
                    <div className='profile-head'>
                      <h6 className='name'>Jannaikode Yashwanth Kumar</h6>
                      <h5 className='role'>Android-Development Team</h5>
                    </div>
                    <div className='profile-desc'>
                      Yashwanth is impassioned about coding and developing
                      Android mobile applications. He is ambitious and always
                      tries to push his limits in exploring new technologies.
                    </div>
                    <div className='contact-icons'>
                      <div className='icons'>
                        <a
                          target='_blank'
                          href='https://www.instagram.com/yashwanth_24_12/'
                          className='android-insta'
                        >
                          <img
                            className='logo'
                            src='./logos/insta.png'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='icons'>
                        <a
                          target='_blank'
                          href='https://www.linkedin.com/in/jannaikode-yashwanth-kumar-56338a1b4'
                          className='link'
                        >
                          <img className='logo' src='./logos/link.png' alt='' />
                        </a>
                      </div>
                      <div className='icons'>
                        <a
                          target='_blank'
                          href='https://github.com/Yashwanth-Kumar24/'
                          className='github'
                        >
                          <img className='logo' src='./logos/git.png' alt='' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='p-head'>
                    <h6 className='name'>Jannaikode Yashwanth Kumar</h6>
                    <h5 className='role'>Android-Development Team</h5>
                  </div>
                </div>
              </div>
              <div className='container'>
                <h4 className='ml-title'>Machine-Learning Team</h4>
                <div className='row justify-content-evenly align-items-center'>
                  {/* 1.Srimanth */}
                  <div className='card ml col-9 col-md-5 col-xl-3'>
                    <img className='pic' src='/team/srimanth.jpg' alt='' />
                    <div className='overlay'>
                      <div className='profile-head'>
                        <h6 className='name'>Srimanth Tenneti</h6>
                        <h5 className='role'>Machine-Learning Lead</h5>
                      </div>
                      <div className='profile-desc'>
                        Digital Systems Designer | ML Lead at DSC CVR | NLP
                        Enthusiast | Aspiring summer intern for 2021's Digital
                        Design Roles
                      </div>
                      <div className='contact-icons'>
                        <div className='icons'>
                          <a
                            target='_blank'
                            href='https://www.instagram.com/srimanth_tenneti/'
                            className='insta'
                          >
                            <img
                              className='logo'
                              src='./logos/insta.png'
                              alt=''
                            />
                          </a>
                        </div>
                        <div className='icons'>
                          <a
                            target='_blank'
                            href='https://www.linkedin.com/in/srimanth-tenneti-662b7117b/'
                            className='ml-link'
                          >
                            <img
                              className='logo'
                              src='./logos/link.png'
                              alt=''
                            />
                          </a>
                        </div>
                        <div className='icons'>
                          <a
                            target='_blank'
                            href='https://github.com/srimanthtenneti '
                            className='github'
                          >
                            <img
                              className='logo'
                              src='./logos/git.png'
                              alt=''
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='p-head'>
                      <h6 className='name'>Srimanth Tenneti</h6>
                      <h5 className='role'>Machine-Learning Lead</h5>
                    </div>
                  </div>
                  {/* 2.Prakarsha */}
                  <div className='card ml col-9 col-md-5 col-xl-3'>
                    <img className='pic' src='/team/prakarsha.jpg' alt='' />
                    <div className='overlay'>
                      <div className='profile-head'>
                        <h6 className='name'>Ratna Prakarsha Kandukuri</h6>
                        <h5 className='role'>Machine-Learning Team</h5>
                      </div>
                      <div className='profile-desc'>
                        Calm and compassionate. Speaks only when it's required.
                        She says that the mountains are always calling her.
                        Psychology, philosophy and AI intrigue her. She believes
                        in unity and discipline.
                      </div>
                      <div className='contact-icons'>
                        <div className='icons'>
                          <a
                            target='_blank'
                            href='https://www.instagram.com/kandukuriratna/'
                            className='insta'
                          >
                            <img
                              className='logo'
                              src='./logos/insta.png'
                              alt=''
                            />
                          </a>
                        </div>
                        <div className='icons'>
                          <a
                            target='_blank'
                            href='https://www.linkedin.com/in/ratna-prakarsha-kandukuri-ba7b301a5'
                            className='ml-link'
                          >
                            <img
                              className='logo'
                              src='./logos/link.png'
                              alt=''
                            />
                          </a>
                        </div>
                        <div className='icons'>
                          <a
                            target='_blank'
                            href='https://github.com/Prakarsha01'
                            className='github'
                          >
                            <img
                              className='logo'
                              src='./logos/git.png'
                              alt=''
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='p-head'>
                      <h6 className='name'>Ratna Prakarsha Kandukuri</h6>
                      <h5 className='role'>Machine-Learning Team</h5>
                    </div>
                  </div>
                  {/* 3.sreeja*/}
                  <div className='card ml col-9 col-md-5 col-xl-3'>
                    <img className='pic' src='/team/sreeja.jpg' alt='' />
                    <div className='overlay'>
                      <div className='profile-head'>
                        <h6 className='name'>Sreeja Vanguru</h6>
                        <h5 className='role'>Machine-Learning Team</h5>
                      </div>
                      <div className='profile-desc'>
                        Sreeja is a Computer Science student. As the world is
                        becoming more and more technologically driven, she
                        believes there's a lot to explore and is looking forward
                        to learn new things.
                      </div>
                      <div className='contact-icons'>
                        <div className='icons'>
                          <a
                            target='_blank'
                            href='https://www.linkedin.com/in/sreeja-vanguru-b30040179'
                            className='ml-link'
                          >
                            <img
                              className='logo'
                              src='./logos/link.png'
                              alt=''
                            />
                          </a>
                        </div>
                        <div className='icons'>
                          <a
                            target='_blank'
                            href='https://github.com/hokage7272'
                            className='github'
                          >
                            <img
                              className='logo'
                              src='./logos/git.png'
                              alt=''
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='p-head'>
                      <h6 className='name'>Sreeja Vanguru</h6>
                      <h5 className='role'>Machine-Learning Team</h5>
                    </div>
                  </div>
                  {/* 4.Aditi */}
                  <div className='card ml col-9 col-md-5 col-xl-3'>
                    <img className='pic' src='/team/aditi.jpg' alt='' />
                    <div className='overlay'>
                      <div className='profile-head'>
                        <h6 className='name'>Aditi Nigam</h6>
                        <h5 className='role'>Machine-Learning Team</h5>
                      </div>
                      <div className='profile-desc'>
                        An undergraduate techie who is receptive. Aditi hopes to
                        grow as a community. She is curious to explore various
                        domains and come up with innovative ideas for a better
                        life.
                      </div>
                      <div className='contact-icons'>
                        <div className='icons'>
                          <a
                            target='_blank'
                            href='https://www.linkedin.com/in/aditi-nigam-31a0071ba/'
                            className='ml-link'
                          >
                            <img
                              className='logo'
                              src='./logos/link.png'
                              alt=''
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='p-head'>
                      <h6 className='name'>Aditi Nigam</h6>
                      <h5 className='role'>Machine-Learning Team</h5>
                    </div>
                  </div>
                  {/* 5.Siddarth */}
                  <div className='card ml col-9 col-md-5 col-xl-3'>
                    <img className='pic' src='/team/siddarth.jpg' alt='' />
                    <div className='overlay'>
                      <div className='profile-head'>
                        <h6 className='name'>Siddhartha Malladi</h6>
                        <h5 className='role'>Machine-Learning Team</h5>
                      </div>
                      <div className='profile-desc'>
                        Siddhartha is an undergrad student who spends his
                        analytical and problem solving skills in developing
                        solutions using Machine Learning. He is an asset to the
                        team and contributes extensively with his calculative
                        and open-minded approach.
                      </div>
                      <div className='contact-icons'>
                        <div className='icons'>
                          <a
                            target='_blank'
                            href='https://www.instagram.com/_siddhuu._/'
                            className='android-insta'
                          >
                            <img
                              className='logo'
                              src='./logos/insta.png'
                              alt=''
                            />
                          </a>
                        </div>
                        <div className='icons'>
                          <a
                            target='_blank'
                            href='https://www.linkedin.com/in/msiddhu/'
                            className='link'
                          >
                            <img
                              className='logo'
                              src='./logos/link.png'
                              alt=''
                            />
                          </a>
                        </div>
                        <div className='icons'>
                          <a
                            target='_blank'
                            href='https://github.com/msiddhu'
                            className='github'
                          >
                            <img
                              className='logo'
                              src='./logos/git.png'
                              alt=''
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='p-head'>
                      <h6 className='name'>Siddhartha Malladi</h6>
                      <h5 className='role'>Machine-Learning Team</h5>
                    </div>
                  </div>
                </div>
                <div className='container'>
                  <h4 className='web-title'>Cyber-Security Team</h4>
                  <div className='row justify-content-evenly align-items-center'>
                    {/* 1.Lekh Raj*/}
                    <div className='card web col-9 col-md-5 col-xl-3'>
                      <img className='pic' src='/team/lekh_raj.jpg' alt='' />
                      <div className='overlay'>
                        <div className='profile-head'>
                          <h6 className='name'>Lekh Raj</h6>
                          <h5 className='role'>Cyber-Security Lead</h5>
                        </div>
                        <div className='profile-desc'>
                          Lekh is a tech guy who has experience in almost all IT
                          domains such as Cyber Security, Application
                          Development tools, Cloud Computing, algorithms,
                          Machine Learning, Entrepreneur, and many more.
                        </div>
                        <div className='contact-icons'>
                          <div className='icons'>
                            <a
                              target='_blank'
                              href='https://www.instagram.com/lekh_ac_9169/'
                              className='insta'
                            >
                              <img
                                className='logo'
                                src='./logos/insta.png'
                                alt=''
                              />
                            </a>
                          </div>
                          <div className='icons'>
                            <a
                              target='_blank'
                              href='https://www.linkedin.com/in/lekh-raj-765818152/'
                              className='link'
                            >
                              <img
                                className='logo'
                                src='./logos/link.png'
                                alt=''
                              />
                            </a>
                          </div>
                          <div className='icons'>
                            <a
                              target='_blank'
                              href='https://github.com/lekh9169'
                              className='web-github'
                            >
                              <img
                                className='logo'
                                src='./logos/git.png'
                                alt=''
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='p-head'>
                        <h6 className='name'>Lekh Raj</h6>
                        <h5 className='role'>Cyber-Security Lead</h5>
                      </div>
                    </div>
                    {/* 2.Rithika 3rd year ALL PENDING */}
                    {/* <div class="card web col-9 col-md-5 col-xl-3">
                                    <img class="pic" src="https://media-exp1.licdn.com/dms/image/C5603AQHiDOl_PuuS1A/profile-displayphoto-shrink_200_200/0/1600529369128?e=1614211200&v=beta&t=i-AqjdAJ0h8Rb3puQ3b7XzKVjqye8o-eTfBE-JK3Q78" alt="">
                                    <div class="overlay">
                                        <div class="profile-head">
                                            <h6 class="name">Ratna Prakarsha Kandukuri</h6>
                                            <h5 class="role">Cyber-Security STC</h5>
                                        </div>
                                        <div class="profile-desc">
                                            ML/AI/DL Enthusiast || Competitive Programming || 5🌟 hackerrank || App Developer || Web Developer|| OpenCv 
                                        </div>
                                        <div class="contact-icons">
                                            <div class="icons"><a href="https://www.instagram.com/kandukuriratna/" class="insta"><i class="fab fa-instagram fa-2x"></i></a></div>
                                            <div class="icons"><a href="https://www.linkedin.com/in/ratna-prakarsha-kandukuri-ba7b301a5" class="link"><i class="fab fa-linkedin fa-2x"></i></a></div>
                                            <div class="icons"><a href="https://github.com/Prakarsha01" class="web-github"><i class="fab fa-github fa-2x"></i></a></div>
                                        </div>
                                    </div>
                                    <div class="p-head">
                                        <h6 class="name">Ratna Prakarsha Kandukuri</h6>
                                        <h5 class="role">Cyber-Security STC</h5>
                                    </div>
                                </div> */}
                    {/* 3.Susheel */}
                    <div className='card web col-9 col-md-5 col-xl-3'>
                      <img className='pic' src='/team/susheel.jpg' alt='' />
                      <div className='overlay'>
                        <div className='profile-head'>
                          <h6 className='name'>Susheel reddy Pagilla</h6>
                          <h5 className='role'>Cyber-Security Team</h5>
                        </div>
                        <div className='profile-desc'>
                          Susheel, final year undergrad student, is a Data
                          structures and Algorithms expert.
                        </div>
                        <div className='contact-icons'>
                          <div className='icons'>
                            <a
                              target='_blank'
                              href='https://instagram.com/_susheel_reddy_?igshid=19trhn2kid5wm'
                              className='insta'
                            >
                              <img
                                className='logo'
                                src='./logos/insta.png'
                                alt=''
                              />
                            </a>
                          </div>
                          <div className='icons'>
                            <a
                              target='_blank'
                              href='https://www.linkedin.com/in/susheel-reddy-pagilla-21341914b'
                              className='link'
                            >
                              <img
                                className='logo'
                                src='./logos/link.png'
                                alt=''
                              />
                            </a>
                          </div>
                          <div className='icons'>
                            <a
                              target='_blank'
                              href='https://github.com/endaevor'
                              className='web-github'
                            >
                              <img
                                className='logo'
                                src='./logos/git.png'
                                alt=''
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='p-head'>
                        <h6 className='name'>Susheel reddy Pagilla</h6>
                        <h5 className='role'>Cyber-Security Team</h5>
                      </div>
                    </div>
                  </div>
                  <div className='container'>
                    <h4 className='nt-title'>Non-Tech Team</h4>
                    <div className='row justify-content-evenly align-items-center'>
                      {/* 1.Lahari */}
                      <div className='card col-9 col-md-5 col-xl-3'>
                        <img className='pic' src='/team/lahari.jpg' alt='' />
                        <div className='overlay'>
                          <div className='profile-head'>
                            <h6 className='name'>Lahari Annam</h6>
                            <h5 className='role'>Content Writer</h5>
                          </div>
                          <div className='profile-desc'>
                            Lahari is a Machine Learning enthusiast and believes
                            that her richest assets are drive, discipline and
                            desire to be an astounding writer.
                          </div>
                          <div className='contact-icons'>
                            <div className='icons'>
                              <a
                                target='_blank'
                                href='https://www.instagram.com/_lahari09_/'
                                className='insta'
                              >
                                <img
                                  className='logo'
                                  src='./logos/link.png'
                                  alt=''
                                />
                              </a>
                            </div>
                            <div className='icons'>
                              <a
                                target='_blank'
                                href='https://www.linkedin.com/in/lahari-annam-76b0a9192'
                                className='link'
                              >
                                <img
                                  className='logo'
                                  src='./logos/insta.png'
                                  alt=''
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='p-head'>
                          <h6 className='name'>Lahari Annam</h6>
                          <h5 className='role'>Content Writer</h5>
                        </div>
                      </div>
                    </div>
                    <div className='container'>
                      <h4 className='android-title'>Faculty Co-Ordinator</h4>
                      <div className='row justify-content-evenly align-items-center'>
                        <div className='card android col-9 col-md-5 col-xl-3'>
                          <img className='pic' src='/team/nagesh.jpg' alt='' />
                          <div className='overlay'>
                            <div className='profile-head'>
                              <h6 className='name'>SeetharamNagesh Appe</h6>
                              <h5 className='role'>Faculty Co-Ordinator</h5>
                            </div>
                            <div className='profile-desc'>
                              {/* An undergrad student with a good amount of experience in front end engineering, product development and competitive programming  */}
                            </div>
                            <div className='contact-icons'>
                              <div className='icons'>
                                <a
                                  target='_blank'
                                  href='https://www.linkedin.com/in/seetharamnagesh-appe-4584281aa/'
                                  className='link'
                                >
                                  <i className='fab fa-linkedin fa-2x' />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className='p-head'>
                            <h6 className='name'>A. SeetharamNagesh</h6>
                            <h6 className='role fac'>Faculty Co-Ordinator</h6>
                          </div>
                        </div>
                        <div className='card android col-9 col-md-5 col-xl-3'>
                          <img
                            className='pic'
                            src='/team/vijaya_mair.jpg'
                            alt=''
                          />
                          <div className='overlay'>
                            <div className='profile-head'>
                              <h6 className='name'>Vijaya Mair</h6>
                              <h5 className='role fac'>
                                Placement Co-ordinator and Mentor
                              </h5>
                            </div>
                            <div className='profile-desc'>
                              {/* An undergrad student with a good amount of experience in front end engineering, product development and competitive programming  */}
                            </div>
                            <div className='contact-icons'>
                              <div className='icons'>
                                <a
                                  target='_blank'
                                  href='https://www.linkedin.com/in/vijayamair/'
                                  className='link'
                                >
                                  <i className='fab fa-linkedin fa-2x' />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className='p-head'>
                            <h6 className='name'>Vijaya Mair</h6>
                            <h6 className='role fac'>
                              Placement Co-ordinator and Mentor
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          body {
            background-color: #131b21;
          }
          .team-section {
            font-family: 'Poppins', sans-serif;
          }
          .psec-title {
            color: rgba(67, 132, 244);
            margin-bottom: 1.5rem;
            /* font-weight: bold; */
          }
          .web-title {
            color: rgba(251, 189, 4);
            margin: 1.8rem 0 0 0;
          }
          .android-title {
            color: rgb(207, 61, 48);
            margin: 1.8rem 0 0 0;
          }
          .ml-title {
            color: rgb(32, 173, 69);
            margin: 1.8rem 0 0 0;
          }
          .nt-title {
            color: rgba(67, 132, 244);
            margin: 1.8rem 0 0 0;
          }
          .card {
            margin: 2rem 3px;
            background-color: rgb(65, 65, 65);
            border: 1px solid rgb(59, 124, 236);
            border-radius: 10px;
            color: white;
            padding: 0;
            position: relative;
            overflow-y: hidden;
            -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.46);
            -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.46);
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.46);
            transition: all 0.1s;
          }
          .web {
            border: 1px solid rgb(255, 201, 40);
          }
          .android {
            border: 1px solid rgb(255, 49, 30);
          }
          .ml {
            border: 1px solid rgb(44, 236, 95);
          }
          .card:hover .p-head {
            opacity: 0;
          }
          .card:hover .overlay {
            transform: translateY(0%);
          }
          .overlay:hover {
            transform: translateY(0%);
          }
          .pic {
            width: 100%;
          }
          .overlay {
            text-align: center;
            color: white;
            z-index: 10;
            position: absolute;
            background-color: rgba(50, 98, 182, 0.966);
            width: 100%;
            height: 100%;
            transform: translateY(100%);
            transition: all 0.8s;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 5px;
            min-height: min-content;
          }
          .web .overlay {
            background-color: rgba(251, 189, 4, 0.966);
          }
          .android .overlay {
            background-color: rgba(207, 61, 48, 0.966);
          }
          .ml .overlay {
            background-color: rgba(32, 173, 69, 0.966);
          }
          .p-head {
            border-top: 1px solid rgb(59, 124, 236);
            position: absolute;
            text-align: center;
            padding-top: 0.7rem;
            bottom: 0;
            background-color: #131b21;
            width: 100%;
            opacity: 1;
            transition: all 0.3s;
          }
          .web .p-head {
            border-top: 1px solid rgb(255, 201, 40);
          }
          .android .p-head {
            border-top: 1px solid rgb(234, 68, 53);
          }
          .ml .p-head {
            border-top: 1px solid rgb(44, 236, 95);
          }
          .p-head .role {
            margin-bottom: 0.7rem;
          }
          .role {
            font-weight: bold;
            font-size: 1.05rem;
          }
          .p-head .name {
            color: whitesmoke;
          }
          .name {
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.28);
            margin-bottom: 0.2rem;
          }
          .contact-icons {
            min-height: 0;
            margin-top: 1rem;
            display: flex;
            width: 100%;
            justify-content: center;
          }
          .icons a {
            margin: 0 0.3rem;
            transition: all 0.5s;
          }
          .logo {
            height: 32px;
            width: 32px;
          }
          .profile-desc {
            font-size: 0.8rem;
          }

          @media screen and (max-width: 480px) {
            .fac {
              font-size: 0.8rem;
            }
          }
        `}
      </style>
    </div>
  );
};
