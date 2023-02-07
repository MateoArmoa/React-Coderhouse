import imagen from '../../assets/react.svg' 

const CartWidget = () => {
  const cartIco = <FontAwesomeIcon icon={faBagShopping} />
  const{prodUnits, updateProductUnit, cartList, updateCartLocalStorage} = useCartContext()
  const [render, setRender] = useState(false)

  useEffect(() => {
      if(!render){
          updateCartLocalStorage()
          setRender(true)
      }
      updateProductUnit()
  }, [cartList])

  return (
      <>
          {
              prodUnits ?
                  <div className='cardWidget'>
                      <p className='WidgetIco'>{cartIco}</p>
                      <p className='WidgetNum'>{prodUnits}</p>
                  </div>
                  :
                  <div className='cardWidget'>
                      <p className='WidgetIco'>{cartIco}</p>
                  </div>

          }
      </>
  )
}

export default CartWidget
  