import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchDetails } from 'Redux/modules/items/actions'
import _ from 'lodash'
import ListCard from './presentational/ListCard'
import { Container } from 'react-bootstrap'
import LoadingOverlay from 'react-loading-overlay'
import ReactPaginate from 'react-paginate'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageCount: 0,
    }
  }
  static propTypes = {
    list: PropTypes.object,
    details: PropTypes.object,
    fetchDetails: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
    const {
      match: { params },
    } = this.props
    this.props.fetchDetails(params.itemType)
  }

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    const {
      match: { params },
    } = this.props
    if (
      !_.isEqual(prevProps.newstories, this.props.newstories) ||
      !_.isEqual(prevProps.match.params, params.itemType)
    ) {
      this.props.fetchDetails(params.itemType)
    }
  }

  render() {
    const { details } = this.props
    const {
      match: { params },
    } = this.props
    const itemsList = details && details[params.itemType ? params.itemType : 'newstories']
    return (
      <Container>
        <LoadingOverlay
          active={!itemsList || _.isEmpty(itemsList)}
          spinner
          text='Loading your content...'
        >
          {itemsList && itemsList.map((el, i) => <ListCard info={el} key={el.id} index={i + 1} />)}
          {/* <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          /> */}
        </LoadingOverlay>
      </Container>
    )
  }
}

//state: our state is passed as the first argument here
const mapStateToProps = state => ({
  list: state.items.list,
  details: state.items.details,
  // todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

export default connect(mapStateToProps, { fetchDetails })(Home)
