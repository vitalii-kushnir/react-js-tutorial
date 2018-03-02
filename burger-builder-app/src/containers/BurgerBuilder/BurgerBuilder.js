import React, {Component} from 'react';
import {connect} from 'react-redux';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-order'
import * as actionType from '../../store/actions';

class BurgerBuilder extends Component {

  state = {
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    // axios.get('https://burger-app-d688f.firebaseio.com/ingredients.json')
    //   .then(response => {
    //     this.setState({ingredients: response.data});
    //   }).catch(error => {
    //     this.setState({
    //       error: true
    //     })
    // });
  }

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    });
  };

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false
    });
  };

  purchaseContinueHandler = () => {
    this.props.history.push('/checkout');
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  }

  render() {
    const desabledInfo = {
      ...this.props.ings
    };

    for (let key in desabledInfo) {
      desabledInfo[key] = desabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner/>;

    if (this.props.ings) {
      orderSummary = <OrderSummary
        purchaseCanceled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        ingredients={this.props.ings}
        price={this.props.price}
      />;

      burger = <Aux>
        <Burger ingredients={this.props.ings}/>
        <BuildControls
          ingredientAdded={this.props.onIngredientAdded}
          ingredientRemoved={this.props.onIngredientRemoved}
          disabled={desabledInfo}
          price={this.props.price}
          purchasable={this.updatePurchaseState(this.props.ings)}
          ordered={this.purchaseHandler}
        />
      </Aux>;
    }

    if (this.state.loading) {
      orderSummary = <Spinner/>
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price : state.totalPrice
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ignName) => dispatch({
      type: actionType.ADD_INGREDIENT,
      ingredientName: ignName
    }),
    onIngredientRemoved: (ignName) => dispatch({
      type: actionType.REMOVE_INGREDIENT,
      ingredientName: ignName
    })
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));