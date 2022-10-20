// Write your code here we write app item and pass props to it

import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <li className="app-list">
      <img src={imageUrl} className="app-img" alt={appName} />
      <p className="name">{appName}</p>
    </li>
  )
}

export default AppItem
