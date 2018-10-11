import React from 'react'
import {withRouter} from 'react-router'

import {BreadcrumbsItem} from './BreadcrumbsItem'

export const BreadcrumbsComponent = ({location:{pathname}}) => {
  const pathTokens = splitPath(pathname)
  return(<div className="breadcrumbs-wrapper">
      <ul className="breadcrumbs">
        {renderBreadcrumbs(pathTokens)}
      </ul>
    </div>)
}

const splitPath = (path) => {
  return path.split('/').filter(elem => elem.length !== 0)
}

const renderBreadcrumbs = (tokens) => {
  return tokens.map((elem, index) => {
    const url = '/' + tokens.slice(0, index+1).join('/');
    return <BreadcrumbsItem key={index} index={index} url={url} path={elem}/>
  })
}

export const Breadcrumbs = withRouter(BreadcrumbsComponent)
