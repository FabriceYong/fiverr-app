import React from 'react'
import './orders.scss'
import { Link } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'

const Orders = () => {

    const currentUser = {
      id: 1,
      username: 'James bond',
      isSeller: true,
      img: './img/james-bond.jpg',
    }
    
  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
          {/* <Link to={'/add'}>
            <button>Add New Gig</button>
          </Link> */}
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? 'Buyer' : 'Seller'}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/1904dea962bf22b73dad40abb932f116-1703095465/Untitled%20design%20-%202023-12-20T190234.650/create-custom-ai-art-using-midjourney-advanced-ai-tool.png"
                alt="gig"
              />
            </td>
            <td>Maria Anders</td>
            <td>11</td>
            <td>James Bond</td>
            <td>
              <MdEmail />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/1904dea962bf22b73dad40abb932f116-1703095465/Untitled%20design%20-%202023-12-20T190234.650/create-custom-ai-art-using-midjourney-advanced-ai-tool.png"
                alt="gig"
              />
            </td>
            <td>Fransico Chang</td>
            <td>11</td>
            <td>James Bond</td>
            <td>
              <MdEmail />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/1904dea962bf22b73dad40abb932f116-1703095465/Untitled%20design%20-%202023-12-20T190234.650/create-custom-ai-art-using-midjourney-advanced-ai-tool.png"
                alt="gig"
              />
            </td>
            <td>Roland Mendel</td>
            <td>11</td>
            <td>James Bond</td>
            <td>
              <MdEmail />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/1904dea962bf22b73dad40abb932f116-1703095465/Untitled%20design%20-%202023-12-20T190234.650/create-custom-ai-art-using-midjourney-advanced-ai-tool.png"
                alt="gig"
              />
            </td>
            <td>Helen Bennett</td>
            <td>11</td>
            <td>James Bond</td>
            <td>
              <MdEmail />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/1904dea962bf22b73dad40abb932f116-1703095465/Untitled%20design%20-%202023-12-20T190234.650/create-custom-ai-art-using-midjourney-advanced-ai-tool.png"
                alt="gig"
              />
            </td>
            <td>Yoshi Tannamuri</td>
            <td>11</td>
            <td>James Bond</td>
            <td>
              <MdEmail />
            </td>
          </tr>

          <tr>
            <td>
              <img
                src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/1904dea962bf22b73dad40abb932f116-1703095465/Untitled%20design%20-%202023-12-20T190234.650/create-custom-ai-art-using-midjourney-advanced-ai-tool.png"
                alt="gig"
              />
            </td>
            <td>Giovanni Rovelli</td>
            <td>11</td>
            <td>James Bond</td>
            <td>
              <MdEmail />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Orders
