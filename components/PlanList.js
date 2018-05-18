import React, { Component } from "react";
import { FlatList } from "react-native";
import { PlanCard } from "../components";
import PropTypes from "prop-types";

class PlanList extends Component {

  static propTypes={
      membershipList:PropTypes.array,
      currency:PropTypes.string,
  }

  constructor(props) {
    super(props);
    let product_code = this.getDefaultProductCode(this.props.membershipList);

    this.state = {
      currency: this.props.currency,
      dataSource: this.props.membershipList,
      selectedProduct: product_code
    };
  }

  _keyExtractor = (item, index) => item.product_code;

  _renderItem = ({ item }) => (
    <PlanCard
      name={item.name}
      price={item.price}
      salePrice={item.saleprice}
      allowDiscount={item.allowDiscount}
      discountedText={item.discount_text[0]}
      pricePerMonth={item.pricepermoth}
      productSubText={item.product_subtext}
      productCode={item.product_code}
      duration={item.duration}
      currency={this.state.currency}
      benefits={item.benefits}
      bestValue-={item.bestValue}
      topSeller={item.topseller}
      yourPlan={item.your_plan}
      selected={this.state.selectedProduct === item.product_code}
      onContinue={product_code => {
        console.log(`Continue Pressed`);
      }}
      onSelected={product_code => {
        console.log(`On Selected ${product_code}`)
        this.setState({selectedProduct:product_code});
      }}
    />
  );

  render() {
    console.log(`Current Selected: ${this.state.selectedProduct}`);

    return (
      <FlatList
        data={this.state.dataSource}
       /*  extraData={this.state} */
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        style={{ paddingTop: 2, paddingBottom: 2, paddingHorizontal: 2 }}
      />
    );
  }

  getDefaultProductCode = membershipList => {
    let defaultSelection = membershipList.filter(item => {
      let { product_code, defaultOffer } = item;
      console.log(
        `Product code verification ${product_code} : ${defaultOffer}, `
      );
      return defaultOffer === true;
    });
    let { product_code } = defaultSelection[0];
    return product_code;
  };
}

export { PlanList };
