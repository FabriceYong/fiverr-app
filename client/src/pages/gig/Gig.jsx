import React from 'react'
import './gig.scss'
import { FaStar } from 'react-icons/fa'
import { AiFillLike, AiFillDislike } from 'react-icons/ai'
import { FaRegClock, FaCheck } from 'react-icons/fa6'
import { RiRefreshLine } from 'react-icons/ri'
import Slider from 'infinite-react-carousel'

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">
            FIVER {'>'} GRAPHICS & DESIGN {'>'}
          </span>
          <h1>I will create ai generated art for you</h1>

          <div className="user">
            <img src="https://img6.arthub.ai/649f195d-28d6.webp" alt="" />
            <span>James Bond</span>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsSroll={1} className="slider">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/1904dea962bf22b73dad40abb932f116-1703095465/Untitled%20design%20-%202023-12-20T190234.650/create-custom-ai-art-using-midjourney-advanced-ai-tool.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/3b0443e7a879aeccf95aea50814b578f-1703024618/Untitled%20(16%20x%209%20in)%20(12)/create-custom-ai-art-using-midjourney-advanced-ai-tool.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/e2b18bb72dcea64eff9ef43f94736c06-1703970347/2/create-custom-ai-art-using-midjourney-advanced-ai-tool.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/db9d048bdceaa538e9214663f5f08d08-1703116378/merrychristmas2/create-custom-ai-art-using-midjourney-advanced-ai-tool.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/298676084/original/c73f161ce591d08b618bef938b960757a92ff006/create-custom-ai-art-using-midjourney-advanced-ai-tool.png"
              alt=""
            />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character potraits
            (E.g a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vaque or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message{' '}
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img
                src="https://img6.arthub.ai/649f195d-28d6.webp"
                alt="user profile"
              />
              <div className="info">
                <span>James Bond</span>
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span>5</span>
                </div>
                <button>Contact me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English, French</span>
                </div>
              </div>
              <hr />
              <p>
                My name is Ciaran, I enjoy creating AI generated aret in my
                spate time. I have a lot of experience using the AI programme
                and that means I know what to prompt the AI with to get a greate
                and incredibly detailed result.{' '}
              </p>
            </div>
            <div className="reviews">
              <h2>Reviews</h2>
              <div className="item">
                <div className="user">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaJajMdDyfL6WCyv78S_PkxaC0Sicz2BCivA&usqp=CAU"
                    alt=""
                  />
                  <div className="info">
                    <span>Matilde Bond</span>
                    <div className="country">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                        alt="UK flag"
                      />
                      <span>United Kingdom</span>
                    </div>
                  </div>
                </div>
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span>5</span>
                </div>
                <p>
                  I just want to say that art_with_ai was the first, and after
                  this, the only artist I'll be using on Fiverr. Communication
                  was amazing, each and every day he sent me images that I was
                  free to request changes to. They listened, understood, and
                  delivered above and beyond my expectations. I absolutely
                  recommend this gig, and know already that I'll be using it
                  again very very soon
                </p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <AiFillLike />
                  <span>Yes</span>
                  <AiFillDislike />
                  <span>No</span>
                </div>
              </div>
              <hr />

              <div className="item">
                <div className="user">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaJajMdDyfL6WCyv78S_PkxaC0Sicz2BCivA&usqp=CAU"
                    alt=""
                  />
                  <div className="info">
                    <span>Matilde Bond</span>
                    <div className="country">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                        alt="UK flag"
                      />
                      <span>United Kingdom</span>
                    </div>
                  </div>
                </div>
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span>5</span>
                </div>
                <p>
                  I just want to say that art_with_ai was the first, and after
                  this, the only artist I'll be using on Fiverr. Communication
                  was amazing, each and every day he sent me images that I was
                  free to request changes to. They listened, understood, and
                  delivered above and beyond my expectations. I absolutely
                  recommend this gig, and know already that I'll be using it
                  again very very soon
                </p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <AiFillLike />
                  <span>Yes</span>
                  <AiFillDislike />
                  <span>No</span>
                </div>
              </div>
              <hr />

              <div className="item">
                <div className="user">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaJajMdDyfL6WCyv78S_PkxaC0Sicz2BCivA&usqp=CAU"
                    alt=""
                  />
                  <div className="info">
                    <span>Matilde Bond</span>
                    <div className="country">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                        alt="UK flag"
                      />
                      <span>United Kingdom</span>
                    </div>
                  </div>
                </div>
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span>5</span>
                </div>
                <p>
                  I just want to say that art_with_ai was the first, and after
                  this, the only artist I'll be using on Fiverr. Communication
                  was amazing, each and every day he sent me images that I was
                  free to request changes to. They listened, understood, and
                  delivered above and beyond my expectations. I absolutely
                  recommend this gig, and know already that I'll be using it
                  again very very soon
                </p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <AiFillLike />
                  <span>Yes</span>
                  <AiFillDislike />
                  <span>No</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>
            I will create a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className="details">
            <div className="item">
              <FaRegClock />
              <span>2 days Delivery</span>
            </div>
            <div className="item">
              <RiRefreshLine />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <FaCheck />
              <span>Prompt Writing</span>
            </div>
            <div className="item">
              <FaCheck />
              <span>Artwork delivery</span>
            </div>
            <div className="item">
              <FaCheck />
              <span>Image upscaling</span>
            </div>
            <div className="item">
              <FaCheck />
              <span>Additional design</span>
            </div>
            <button>Continue</button>
          </div>

          {/* <div className="button">
            <button>Contact Me</button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Gig
