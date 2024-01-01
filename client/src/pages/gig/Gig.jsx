import React from 'react'
import './gig.scss'
import {FaStar} from 'react-icons/fa'
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
            <img src="" alt="" />
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
          <Slider slidesToShow={1} arrowsSroll={1}>
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
          <p>I use an AI program to create images based on text prompts. This means I can help you to create a vision you have through a textual description of your scene without requiring any reference images. Some things I've found it often excels at are: Character potraits (E.g a picture to go with your DnD character) Landscapes (E.g. wallpapers, illustrations to compliment a story) Logos (E.g. Esports team, business, profile picture) You can be as vaque or as descriptive as you want. Being more vague will allow the AI to be more creative which can sometimes result in some amazing images. You can also be incredibly precise if you have a clear image of what you want in mind. All of the images I create are original and will be found nowhere else. If you have any questions you're more than welcome to send me a message </p>
        </div>
        <div className="right"></div>
      </div>
    </div>
  )
}

export default Gig