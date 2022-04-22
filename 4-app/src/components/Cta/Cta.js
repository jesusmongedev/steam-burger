import Icon from '../Icon/Icon'
import './Cta.scss'

const Cta = ({ icon, iconType, type, label }) => {
  console.log(icon, type, label, iconType)
  const cssClass = 'Cta'
  const content = icon ? <Icon icon={icon} type={iconType} /> : label

  return (
    <button className={`${cssClass} ${cssClass}--${type}`}>{content}</button>
  )
}

export default Cta
