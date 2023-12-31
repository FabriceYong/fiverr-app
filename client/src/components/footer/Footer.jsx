import React from 'react'
import './footer.scss'
import { FaInstagram, FaTiktok, FaLinkedin, FaFacebook, FaPinterest, FaTwitch, FaTwitter } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { CiGlobe } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul className="categories">
          <h3>Categories</h3>
          <li>Graphics & Design</li>
          <li>Digital Marketing</li>
          <li>Writing and Translation</li>
          <li>Video & Animation</li>
          <li>Music and Audio</li>
          <li>Fiverr Logo Maker</li>
          <li>Programming and Tech</li>
          <li>Data</li>
          <li>Business</li>
          <li>Lifestyle</li>
          <li>Photography</li>
          <li>End-to-End Projects</li>
          <li>Sitemap</li>
        </ul>
        <ul className="About">
          <h3>About</h3>
          <li>Careers</li>
          <li>Press & News</li>
          <li>Partnerships</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Intellectual Property Claims</li>
          <li>Investor Relations</li>
        </ul>
        <ul className="Support">
          <h3>Support and Education</h3>
          <li>Help & Support</li>
          <li>Trust & Safety</li>
          <li>Selling on Fiverr</li>
          <li>Buying on Fiverr</li>
          <li>Fiverr Guides</li>
          <li>
            Fiver Workspace <span>Invoice Software</span>
          </li>
          <li>Learn span Online Courses</li>
        </ul>
        <ul className="community">
          <h3>Community</h3>
          <li>Customer Success Stories</li>
          <li>Community Hub</li>
          <li>Forum</li>
          <li>Events</li>
          <li>Blog</li>
          <li>Affiliates</li>
          <li>Influencers</li>
          <li>Podcast</li>
          <li>Invite a Friend</li>
          <li>Become a Seller</li>
          <li>Community Standards</li>
        </ul>
        <ul className="business">
          <h3>Business Solutions</h3>
          <li>About Business Solutions</li>
          <li>Fiverr Pro</li>
          <li>Fiverr Certified</li>
          <li>Fiverr Enterprise</li>
          <li>
            ClearVoice <span>Content Marketing</span>
          </li>
          <li>Working Not Working</li>
          <li>Contact Sales</li>
        </ul>
      </div>
      <div className="footer-end">
        <div className='left'>
          <h1>
            fiverr<span>&#174;</span>
          </h1>
          <h4>
            <span>&#169;</span>Fiverr International Ltd.{' '}
            {new Date().getFullYear()}
          </h4>
        </div>
        <div className="icons">
          <FaTiktok />
          <FaTwitter />
          <FaLinkedin />
          <FaFacebook />
          <FaPinterest />
          <FaXTwitter />
          <div className="right-end">
            <h3><CiGlobe /> <span>English</span></h3>
            <h3>$ USD</h3>
            <img src="./icons/extended-arms.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
