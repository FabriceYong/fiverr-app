import React from 'react'
import './myGigs.scss'
import { Link } from 'react-router-dom'
import { MdDelete } from 'react-icons/md'

const MyGigs = () => {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to={'/add'}>
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img
                src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/1904dea962bf22b73dad40abb932f116-1703095465/Untitled%20design%20-%202023-12-20T190234.650/create-custom-ai-art-using-midjourney-advanced-ai-tool.png"
                alt="gig"
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <MdDelete />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/1904dea962bf22b73dad40abb932f116-1703095465/Untitled%20design%20-%202023-12-20T190234.650/create-custom-ai-art-using-midjourney-advanced-ai-tool.png"
                alt="gig"
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <MdDelete />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/1904dea962bf22b73dad40abb932f116-1703095465/Untitled%20design%20-%202023-12-20T190234.650/create-custom-ai-art-using-midjourney-advanced-ai-tool.png"
                alt="gig"
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <MdDelete />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/1904dea962bf22b73dad40abb932f116-1703095465/Untitled%20design%20-%202023-12-20T190234.650/create-custom-ai-art-using-midjourney-advanced-ai-tool.png"
                alt="gig"
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <MdDelete />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/1904dea962bf22b73dad40abb932f116-1703095465/Untitled%20design%20-%202023-12-20T190234.650/create-custom-ai-art-using-midjourney-advanced-ai-tool.png"
                alt="gig"
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <MdDelete />
            </td>
          </tr>

          <tr>
            <td>
              <img
                src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/1904dea962bf22b73dad40abb932f116-1703095465/Untitled%20design%20-%202023-12-20T190234.650/create-custom-ai-art-using-midjourney-advanced-ai-tool.png"
                alt="gig"
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <MdDelete />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default MyGigs