import React, { Component } from 'react'
import Navbar from 'Components/Nav/Navbar'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchDetails } from 'Redux/modules/items/actions'
import _ from 'lodash'
import ListCard from './presentational/ListCard'
import { Container } from 'react-bootstrap'
import ReactLoading from 'react-loading'
import ReactPaginate from 'react-paginate'

const ITEM_PER_PAGE = 30

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

  // On 1st render, fetch the data
  componentDidMount = () => {
    const {
      match: { params },
    } = this.props
    this.props.fetchDetails(params.itemType, ITEM_PER_PAGE)
  }

  // On update, fetch new data
  componentDidUpdate = prevProps => {
    const { details } = this.props
    const {
      match: { params },
    } = this.props
    if (
      (!_.isEqual(prevProps.details, this.props.details),
      !_.isEqual(prevProps.list, this.props.list) ||
        !_.isEqual(prevProps.match.params.itemType, params.itemType))
    ) {
      this.props.fetchDetails(params.itemType, ITEM_PER_PAGE)

      const dataLength = details[params.itemType || 'newstories']
        ? details[params.itemType || 'newstories'].length
        : 0
      this.setState({
        pageCount: details && Math.ceil(dataLength / ITEM_PER_PAGE),
      })
    }
  }

  // Not finished
  // On page selection, slice data to show page related data and fetch extra data
  handlePageClick = data => {
    const {
      match: { params },
    } = this.props
    this.props.fetchDetails(params.itemType, ITEM_PER_PAGE)
    let selected = data.selected
    let offset = Math.ceil(selected * ITEM_PER_PAGE)
  }

  render() {
    const { details } = this.props
    const {
      match: { params },
    } = this.props
    // get details related to page or from newstories as default
    const itemsList = details && details[params.itemType || 'newstories']
    return (
      <Container>
        <Navbar />
        {!itemsList || _.isEmpty(itemsList) ? (
          <ReactLoading type={'spinningBubbles'} color={'black'} height={667} width={375} />
        ) : (
          itemsList &&
          itemsList.map((el, i) => (
            <div key={el.id}>
              <ListCard info={el} index={i + 1} />
            </div>
          ))
        )}
        <ReactPaginate
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
        />
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
