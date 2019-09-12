import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {fromLeft} from 'react-navigation-transitions'

import ProductDetail from '../ProductDetail/ProductDetail';
import SearchView from '../Search/SearchView';
const Search = createStackNavigator(
    {
        ProductDetail : (screen = ProductDetail),
        SearchView : (screen = SearchView)
    },
    {
        initialRouteName: 'SearchView',
        transitionConfig: ()=>fromLeft(500),
        headerMode:'none'

    }
)
export default createAppContainer(Search);

