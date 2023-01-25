import React , {useEffect} from 'react'

const ItemListContainer = () => {

    useEffect(() => {
        console.log('Me renderizo')
    });

    console.log('Primer render')

  return (
    <div className='Container-itemList-Container'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime consequatur vitae velit odit laborum veniam recusandae in veritatis commodi error nemo, rem cum architecto incidunt rerum neque laboriosam excepturi nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. In, reprehenderit sunt hic ullam iusto aperiam possimus molestiae. Tempora nostrum sequi aliquid fuga non reiciendis iusto, ab quas animi laudantium laborum?</p>
    </div>
  )
}

export default ItemListContainer
