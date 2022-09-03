import axios from 'axios'
import React from 'react'

export function getPhotoApi() {
   return  axios.get(`https://api.facthunt.in/fostergem/v1/post/list/public`)
}
