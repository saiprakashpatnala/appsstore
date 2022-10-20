// Write your code here write onclick function to button we use function omponent

import './index.css'

const TabItem = props => {
  const {tabDetails, updateState, isActive} = props
  const {displayText, tabId} = tabDetails
  const sl = isActive === true ? 'yes' : 'no'
  console.log(sl)

  const ok = () => {
    updateState(tabId)
  }
  return (
    <li>
      <button className={sl} type="button" onClick={ok}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
