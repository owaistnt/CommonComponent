import React, { Component } from "react";
import { FlatList } from "react-native";
import { PlanCard } from "../components";

class PlanList extends Component {
  constructor(props) {
    super(props);
   /*  let { memberships, currency } = SampleData.data;
    let membershiplist = [...memberships];
    let initialCurrency = currency.split(" ")[1]; */
    let product_code = this.getDefaultProductCode(this.props.membershiplist);

    this.state = {
      currency: this.props.currency,
      dataSource: this.props.membershiplist,
      selectedProduct: product_code
    };
  }

  _keyExtractor = (item, index) => item.product_code;

  _renderItem = ({ item }) => (
    <PlanCard
      name={item.name}
      price={item.price}
      saleprice={item.saleprice}
      allowDiscount={item.allowDiscount}
      discount_text={item.discount_text[0]}
      pricepermoth={item.pricepermoth}
      product_subtext={item.product_subtext}
      product_code={item.product_code}
      duration={item.duration}
      currency={this.state.currency}
      benefits={item.benefits}
      bestValue-={item.bestValue}
      topseller={item.topseller}
      your_plan={item.your_plan}
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

  getDefaultProductCode = membershiplist => {
    let defaultSelection = membershiplist.filter(item => {
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
