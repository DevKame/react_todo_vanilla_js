

import ItemHolder from '@/components/ItemHolder';

import '@/components/SectionWrapper.scss';

export default function SectionWrapper({todos, handleItemAction}) {

    const openTodos = todos.filter(todo => todo.open);
    const closedTodos = todos.filter(todo => !todo.open);
    return (
        <main id='section-wrapper' className='w-90 mx-auto bord-1 bord-red mt-2 d-f jc-b ai-c'>
            <ItemHolder
                holdertype='open'
                items={openTodos}
                handleItemAction={handleItemAction}>
            </ItemHolder>
            <ItemHolder
                holdertype='closed'
                items={closedTodos}
                handleItemAction={handleItemAction}>
            </ItemHolder>
        </main>
    )
}