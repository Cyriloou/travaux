import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import psl from 'psl'

// List Card in order to display data

function ListCard({ info: { id, title, by, score, url, time }, index }) {
  const siteHost = url && psl.get(extractHostname(url))
  return (
    <div className='ui feed'>
      <div className='event'>
        <div className='label'>{index}</div>
        <div className='content'>
          <div className='summary'>
            <a href={url}>{title}</a>{' '}
            <a href={`https://news.ycombinator.com/from?site=${siteHost}`}>{siteHost}</a>
          </div>
          <div className='meta'>
            <span className='like'>
              <i className='angle up icon'></i> {score} point by {by} {moment(time).fromNow()} |{' '}
              <a href={`https://news.ycombinator.com/hide?id=${id}&goto=newest`}>hide</a> |{' '}
              <a
                href={`https://hn.algolia.com/?query=${title}&sort=byDate&dateRange=all&type=story&storyText=false&prefix&page=0`}
              >
                past
              </a>{' '}
              | <a href={`https://www.google.com/search?q=${title}`}>web</a> |{' '}
              <a href={`https://news.ycombinator.com/item?id=${id}`}>discuss</a>
            </span>
            <span className='date'>{moment(time).fromNow()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

ListCard.propTypes = {
  key: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  by: PropTypes.string,
  score: PropTypes.number,
}

export default ListCard

const extractHostname = url => {
  let hostname
  //find & remove protocol (http, ftp, etc.) and get hostname

  if (url.indexOf('//') > -1) {
    hostname = url.split('/')[2]
  } else {
    hostname = url.split('/')[0]
  }

  //find & remove port number
  hostname = hostname.split(':')[0]
  //find & remove "?"
  hostname = hostname.split('?')[0]

  return hostname
}
