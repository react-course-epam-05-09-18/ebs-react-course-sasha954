import React from 'react'

export const BreadcrumbsItem = ({path, url, index}) => {
  return (<li className="breadcrumbs__item"><a href={url} className="breadcrumbs__link">{path}</a></li>)
}
