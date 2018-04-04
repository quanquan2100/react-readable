import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { getCategories } from '../readableAPI'
import { chooseCategory } from "../actions"

import IconTag from "react-icons/lib/md/local-offer"

class Categories extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  // componentDidMount() {
  // }

  render() {
    // const { categoryList } = this.state;
    const { currentCategory, categoryList, categoryChange } = this.props;
    // console.log(context);
    return (
      <div className="categories">
        <Link to="/">全部分类</Link>
        <ul className="categories-list">
          {
            categoryList.map((category) => (
              <li className={"categories-item " + (category.path === currentCategory ? "active" : "")} key={category.path} >
                <Link to={`/category/${category.path}`} onClick={() => (categoryChange(category.path))} ><IconTag /> {category.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    currentCategory: state.globalReducer.category,
    categoryList: state.categoryReducer.categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    categoryChange: (id) => (dispatch(chooseCategory(id)))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
