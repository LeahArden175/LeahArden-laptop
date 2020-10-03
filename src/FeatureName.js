import React, { Component } from 'react';
import FeatureOptions from './FeatureOptions';
import slugify from 'slugify';



class FeatureNames extends Component {

    createOptionList = () =>{
        return this.props.options.map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
            <FeatureOptions 
              key={itemHash}
              id={itemHash}
              feature={this.props.name}
              itemHash={itemHash}
              item={item}
              updateFeature={this.props.updateFeature}
              selected={this.props.selected}
            />
            );
        });
    }
    render(props){
    return(
        <fieldset className="feature" key={this.props.featureHash}>
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>
        {this.createOptionList()}
      </fieldset>
    )
    }
}

export default FeatureNames;