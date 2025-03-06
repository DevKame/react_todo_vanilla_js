

import ItemButton from '@/components/ItemButton';

export default function Item({item, holdertype, handleItemAction}) {

    return (
        <div
            className="item w-100 d-f jc-s ai-c p-1">
            <p>{item.entry}</p>
            <div className="button-holder ms-auto d-f jc-b ai-c">
                <ItemButton
                    content='D'
                    itemtype={holdertype}
                    itemid={item.id}
                    handleItemAction={handleItemAction}
                    >
                </ItemButton>
                <ItemButton
                    content='U'
                    itemtype={holdertype}
                    itemid={item.id}
                    handleItemAction={handleItemAction}
                    >
                </ItemButton>
                <ItemButton
                    content='X'
                    itemtype={holdertype}
                    itemid={item.id}
                    handleItemAction={handleItemAction}
                    >
                </ItemButton>
            </div>
        </div>
    )
}