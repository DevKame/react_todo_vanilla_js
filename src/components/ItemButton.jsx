

export default function ItemButton({content, itemtype, itemid, handleItemAction}) {

    function handleClick(e) {
        switch(content) {
            case 'D':
                handleItemAction(itemid, 'done');
                break;
            case 'U':
                handleItemAction(itemid, 'undone');
                break;
            case 'X':
                handleItemAction(itemid, 'delete');
                break;
        }
    }
    let disable = false;
    let typeclass = '';
    switch(content) {
        case 'D':
            typeclass = 'mark-as-done';
            disable = itemtype === 'open' ? false : true;
            break;
        case 'U':
            typeclass = 'mark-as-undone';
            disable = itemtype === 'open' ? true : false;
            break;
        case 'X':
            typeclass = 'mark-as-deleted';
            disable = false;
            break;
    }

    return (
        <button
            className={`item-button ${typeclass} d-f jc-c ai-c`}
            disabled={disable}
            onClick={handleClick}>
            <small>{ content }</small>
        </button>
    )
}