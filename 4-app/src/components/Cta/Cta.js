import Icon from '../Icon/Icon'

const Cta = ({ icon, iconType, type, label, handleMenuButton, action }) => {
  console.log(icon)
  const cssClass = 'Cta'
  const content = icon ? (
    <Icon icon={icon} type={iconType} />
  ) : (
    <a href={`#${action}`}>{label}</a>
  )

  return (
    <button
      className={`${cssClass} ${cssClass}--${type} ${
        icon === 'nav' ? `${cssClass}--${type}-fixed` : ''
      }`}
      onClick={handleMenuButton}
    >
      {content}
    </button>
  )
}

export default Cta
