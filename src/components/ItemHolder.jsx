
import ItemButton from '@/components/ItemButton';
import Item from '@/components/Item';

import '@/components/ItemHolder.scss';

export default function ItemHolder({holdertype, items, handleItemAction}) {

    
    return (
        <section className={`ITEM-HOLDER ${holdertype} py-2 px-4 w-45 d-f fdir-c jc-s ai-s bg-gray-l-20`}>
            <h3 className='w-100'>{holdertype === 'open' ? 'Open TODOs' : 'Closed TODOs'}</h3>

            <div className="item-column w-100 d-f fdir-c jc-s ai-s mt-3">
                {
                    items.map(item => (
                        <Item
                            key={item.id}
                            item={item}
                            holdertype={holdertype}
                            handleItemAction={handleItemAction}>
                        </Item>
                    ))
                }
            </div>
        </section>
    )
}