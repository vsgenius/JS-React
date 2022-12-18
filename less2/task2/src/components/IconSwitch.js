import CardsView from './CardsView';
import { products } from './store';
 import ListView from './ListView';
 import { ReactComponent as ViewList } from '../view_list_black_24dp.svg';
 import { ReactComponent as ViewModule } from '../view_module_black_24dp.svg';

function IconSwitch ({icon,onSwitch}) {
return (
    <div>
    <div className="icon" onClick={()=>onSwitch(icon)}>{icon!=='view_list' ? <ViewModule/> :<ViewList/>}</div>
    {icon!=='view_list' ? <CardsView cards={products}/> : <ListView items={products}/> }
    </div>
)
}

export default IconSwitch;