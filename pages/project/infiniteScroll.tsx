import React from 'react'
import Anime from '../../Components/anime/Anime'
import Lable from '../../Components/common/Label/Lable'

export default function infiniteScroll() {
  return (
    <div>
      <Lable title="Fetching data + infinite scroll + SASS" />
        <Anime/>
    </div>
  )
}
